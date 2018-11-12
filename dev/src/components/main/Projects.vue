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

                    <label v-for='elem in tags'
                           class='btn-back'
                           :key='elem.name'
                           :for='elem.name'
                           :title='elem.name'>
                        <input type='checkbox'
                               :id='elem.name'
                               :value='elem.name'
                               class='filter'
                               v-model='filters'>
                        <span class='toggleable'>
                            <i :class='[elem.fa, elem.icon]'/>
                            <strong v-if='selected(elem.name)'>{{ elem.name }}</strong>
                        </span>

                    </label>
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
             <sticky-bar>
                <div class='action-bar'>
                    <div class='spacer'></div>
                    <router-link to='/projects'
                                 exact
                                 title='Back to Projects'
                                 class='x-btn'>
                        <i class='fas fa-times'/>
                    </router-link>
                </div>
            </sticky-bar>
            <div class='main-content project-focused'>
                <router-view/>
            </div>
        </div>

    </transition>
</div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/projects/ProjectItem.vue';
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
            autoRows: 0.5, //measurements assume use of std
            gap: 0,
            filters: [] as Tag[],
            tags: TagItems
        }
    },
    watch: {
        filters(newFilters: Tag[], oldFilters: Tag[]):void {
            // if new filters only 1 or 0 long, no need to wipe all but last filter clicked
            // this also stops infinite loops (modifying filters inside its own watcher)
            if(newFilters.length <= 1) {
                return;
            }

            function difference(filter: Tag): boolean {
                return oldFilters.indexOf(filter) == -1;
            }

            this.filters = newFilters.filter(difference);
        }
    },
    computed: {
        leftActive(): boolean {
            return this.$route.path == SectionMap.projects.path;
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

.action-bar {
    height: 0;
}

.btn-back {
    @include on-tablet-or-down {
        background: $bright;
        border-radius: 2rem;
        margin-left: 0.3rem;
    }
}

.toggleable {
    display: inline-block;
    white-space: nowrap;
}

.filter-bar {
    display: flex;
    background: transparentize($medium, 1);
    transition: background $action-bar-animation-time ease;

    font-size: $icon-size;
    line-height: $icon-size * 1.5;

    &:hover,
    &:focus {
        @include on-laptop-or-up{
            background: transparentize($medium, 0.25);
        }

        .filter {
            + i {
                color: $dark;
            }

            &:checked + i {
                color: $projects-swatch;
            }
        }
    }
}

.filter {
    position: absolute;
    visibility: hidden;

    + .toggleable {
        color: transparentize($dark, 0.5);
        @include on-tablet-or-down {
            color: $dark
        }
        transition: color $action-bar-animation-time ease;


        padding: 0.5rem;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        //width: $icon-size * 1.5; // compensate for how wide code icon is
        text-align: center;
        cursor: pointer;

        @include on-laptop-or-up {
            &:hover,
            &:focus {
                color: $bright !important;
            }
        }
    }

    &:checked + .toggleable {
        color: transparentize($projects-swatch, 0.5);
        @include on-tablet-or-down {
            color: $projects-swatch;
        }

        @include on-laptop-or-up {
            &:hover,
            &:focus {
                color: lighten($projects-swatch, 10%) !important;
            }
        }
    }
}

.btn {
    color: $medium;
    background: none;
    border-style: none;
    padding: 0.5rem;

    transition: color $action-bar-animation-time ease;
}

.x-btn {
    @extend .btn;
    color: $xlight;
}

.btn:hover,
.btn:focus {
    color: $projects-swatch;
    border-style: none;
    cursor: pointer;
}

.action-bar {
    padding-right: 0.4rem;
    font-size: $icon-size;
    display: flex;
    background: none;
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
