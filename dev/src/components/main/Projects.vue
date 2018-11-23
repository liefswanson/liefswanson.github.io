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
            <ul class='project-grid main-content'
                :style='style'
                ref='container'>
                <li v-for='(projectGroup, groupid) in orderedProjects'
                    :key='groupid'
                    class='dont-break'>
                    <ul name='project-group'
                        tag='ul'>
                        <project-item v-for='(project, index) in projectGroup'
                                      :key='project.path'
                                      :properties="project"
                                      :gap='gap'
                                      :filters='filters'
                                      :index="index"
                                      class='project-card'/>
                    </ul>
                </li>
            </ul>
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

import { std, pxInStd } from '@/style/ts/StandardUnits';
import NavEventBus from '@/scripts/nav/NavEventBus';
import Events from '@/scripts/nav/Events';
import { setTimeout } from 'timers';
import { AnimationTimers } from '@/style/ts/Timers';
import Breakpoints from '@/style/ts/Breakpoints';
import Measurement from '@/style/ts/Measurement';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            gap: 0,
            filters: [] as Tag[],
            tags: TagItems,
            orderedProjects: [ProjectList],
            columnCount: 1,
        }
    },
    computed: {
        leftActive(): boolean {
            return this.$route.name == SectionMap.projects.name;
        },
        style(): object {
            return {
                'column-count': this.columnCount
            }
        },
        filteredProjects(): Project[] {
            // Having no filters active is considered the same as having all filters active.
            if (this.filters.length == 0) {
                return this.projects;
            }

            return this.projects.filter(this.visible);
        },
    },
    watch: {
        filteredProjects() {
            this.forceGridUpdate();
        },
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

            function intersection(filter: Tag): boolean {
                return filters.indexOf(filter) !== -1;
            }

            return project.tags.filter(intersection).length !== 0;
        },
        selected(filter: Tag) {
            return this.filters.indexOf(filter) !== -1;
        },
        calcColumnCount(): number {
            let container = this.$refs.container as Element;

            let width = container.getBoundingClientRect().width / pxInStd();

            return Math.floor(width/Measurement.gridColumnWidth);
        },
        reorderProjects(): Project[][] {
            let columns = [] as Project[][];
            let columnCount = this.columnCount;
            for(let i = 0; i < columnCount; i++){
                columns.push([]);
            }

            let filteredProjects = this.filteredProjects;
            for (let i = 0; i < filteredProjects.length; i++) {
                let current = filteredProjects[i];
                columns[i%columnCount].push(current);
            }

            return columns
        },
        manualGridUpdate() {
            let temp = this.calcColumnCount();
            if (temp == this.columnCount) {
                return;
            }
            this.forceGridUpdate();
        },
        forceGridUpdate() {
            this.columnCount = this.calcColumnCount();
            this.orderedProjects = this.reorderProjects();
        }
    },
    components: {
        'project-item': ProjectItem,
        'sticky-bar': StickyBar,
    },
    mounted() {
        window.addEventListener(Events.resize, this.manualGridUpdate);
        NavEventBus.$on(Events.navAnimDone, this.manualGridUpdate);

        this.manualGridUpdate();
    },
    beforeDestroy() {
        window.removeEventListener(Events.resize, this.manualGridUpdate);
        NavEventBus.$off(Events.navAnimDone, this.manualGridUpdate);

    },
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.dont-break {
    display: block;
    break-inside: avoid;
    page-break-inside: avoid;
}

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
    list-style-type: none;
    column-fill: auto;
    column-gap: $grid-gap;
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
