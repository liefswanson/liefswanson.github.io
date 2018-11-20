<template>
<div class='projects-root'>
    <transition name='focus'
                mode='out-in'>

        <div v-if='leftActive'
             key='left'
             class='panel'>
            <sticky-bar :overlay="false">

                <div class='filter-bar'>
                    <div class='spacer'></div>

                    <button v-for='elem in tags'
                            :key='elem.name'
                            :title='filterMessage(elem.name)'
                            :aria-label='filterMessage(elem.name)'
                            class='toggleable btn'
                            :class='selected(elem.name) ? "active" : ""'
                            @click='click(elem.name)'>
                        <i :class='[elem.fa, elem.icon]'/>
                        <strong class='tag-name' v-if='selected(elem.name)'>{{ elem.name }}</strong>
                    </button>
                </div>

            </sticky-bar>
            <transition-group class='project-grid main-content'
                              :style='style'
                              ref='container'
                              name='project-group'
                              tag='ul'>

                <project-item v-for='project in filteredProjects'
                              :key='project.path'
                              :properties="project"
                              :autoRows='autoRows'
                              :gap='gap'
                              :filters='filters'
                              class='project-card'/>
            </transition-group>
        </div>

        <div v-else
             key='right'
             class='panel'>
            <div class='main-content project-focused'>
                <router-view/>
            </div>
        </div>

    </transition>
</div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/util/ProjectItem.vue';
import StickyBar   from '@/components/nav/StickyBar.vue';

import TagItems       from '@/scripts/main/TagItems';
import Tag            from '@/scripts/main/Tag';
import Project        from '@/scripts/main/Project';
import ProjectList    from '@/scripts/main/ProjectItems';
import { SectionMap } from '@/scripts/nav/NavItems';

import { std } from '@/style/ts/StandardUnits';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            autoRows: 1, //measurements assume use of std
            gap: 0,
            filters: [] as Tag[],
            tags: TagItems,
        }
    },
    computed: {
        leftActive(): boolean {
            return this.$route.name == SectionMap.projects.name;
        },
        style(): object {
            return {
                "grid-auto-rows": this.autoRows + std
            }
        },
        filteredProjects(): Project[] {
            return this.projects.filter(this.visible);
        }
    },
    methods: {
        filterMessage(filter: Tag):string {
            let active = this.selected(filter);
            if (active) {
                return "disable all filters";
            } else {
                return "filter by " + filter;
            }
        },
        click(filter: Tag) {
            let wasSelected = this.selected(filter);
            this.filters = []

            if (!wasSelected){
                this.filters.push(filter);
            }
        },
        visible(project: Project):boolean {
            let filters = this.filters;
            // Having no filters active is considered the same as having all filters active.
            if (filters.length == 0) {
                return true;
            }

            function intersection(filter: Tag): boolean {
                return filters.indexOf(filter) !== -1;
            }

            return project.tags.filter(intersection).length !== 0;
        },
        selected(filter: Tag) {
            return this.filters.indexOf(filter) !== -1;
        }
    },
    components: {
        'project-item': ProjectItem,
        'sticky-bar': StickyBar,
    },
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.filter-bar {
    display: flex;
    padding: $bar-spacing;
}

.btn {
    $btn-back: darken($bright, 7%);
    background: $btn-back;
    margin-left: $bar-spacing;
    padding: $bar-pad;
    border-radius: $icon-size;
    border: 0.125rem solid $btn-back;
    font-size: $icon-size;

    cursor: pointer;
    box-sizing: border-box;
}

.toggleable {
    color: $medium;
    transition: all $action-bar-animation-time ease;
}

.toggleable:hover,
.toggleable:focus {
    color: $dark;
    border-color: $projects-swatch;
}

.toggleable.active {
    color: $projects-swatch;
}

.toggleable.active:hover,
.toggleable.active:focus {
    color: darken($projects-swatch, 10%);
}

.tag-name {
    line-height: 0;
}

.panel {
    height: calc(100% - $header-height);
}

.project-grid {
    @supports (display: grid) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }

    @include on-phone {
        column-count: 1;
    }
    @include on-tablet {
        column-count: 2;
    }
    @include on-laptop {
        column-count: 3;
    }
    @include on-desktop {
        column-count: 4;
    }

    list-style-type: none;

    grid-column-gap: $grid-gap;

    max-width: $large-size + $medium-size; // pretty close to where my desktop monitor sits
    margin: auto;
}

.project-focused {
    max-width: $medium-size;
    margin: auto;
    @supports (display: grid){
        max-width: none;
        margin: none;
    }
}

.project-group-move {
    transition: transform $grid-rearrange-animation-time ease;
}

.project-group-enter {
    opacity: 0;
    transform: translateY(-2rem);
}

.project-group-enter-active,
.project-group-leave-active {
    transition: opacity $grid-rearrange-animation-time ease,
                transform $grid-rearrange-animation-time ease;
}

.project-group-leave-active {
    position: absolute !important;
    visibility: hidden;
}

.project-card {
    display: inline-block;
}

.focus-enter-active,
.focus-leave-active {
    transition: all $content-swap-animation-time ease;
}

.focus-enter,
.focus-leave-to {
    transform: translateX(50vw);
    opacity: 0;
}
</style>
