<template>
<div class='projects-root'>
    <transition name='focus'
                mode='out-in'>

        <div v-if='leftActive'
             key='left'
             class='panel left'>
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
                              id='project-grid-container'
                              name='project-group'
                              tag='ul'>

                <project-item v-for='(project, index) in filteredProjects'
                              :key='project.path'
                              :properties="project"
                              :index='index'
                              :style='{
                                  order: projectIndexes[index],
                                  "width": columnWidth + "%"
                                }'
                              :filters='filters'
                              class='project-card'
                              :class='islastColumn(index) ? "last-column" : undefined'/>
                <li v-for='(pad, index) in columnPads'
                    :key=index
                    class='masonry-padding'
                    :style='{
                        order: index,
                        height: pad + "px"
                    }'
                />
            </transition-group>
        </div>

        <div v-else
             key='right'
             class='panel right'>
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
import Measurement from '@/style/ts/Measurement';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            filters: [] as Tag[],
            tags: TagItems,

            projectIndexes: [] as number[],
            columnPads: [] as number[],
            columnHeights: [] as number[],
            columnWidth: 18,
            columnCount: 1,
            height: 15000,

            width: 0,
        }
    },
    computed: {
        debugWidth(): number {
            return this.columnCount * this.columnWidth;
        },
        leftActive(): boolean {
            return this.$route.name == SectionMap.projects.name;
        },
        style(): object {
            return {
                height: this.height + 'px',
            }
        },
        filteredProjects(): Project[] {
            // Having no filters active is considered the same as having all filters active.
            if (this.filters.length == 0) {
                return this.projects;
            }
            return this.projects.filter(this.visible);
        }
    },
    watch: {
        filteredProjects() {
            Vue.nextTick(this.recomputeColumns);
        }
    },
    methods: {
        islastColumn(index: number) : boolean {
            return this.projectIndexes[index] == this.columnCount-1
        },
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
        recomputeColumns() {
            let temp = this.computeWidthandCount();
            if (this.columnWidth == temp.width &&
                this.columnCount == temp.count) {
                return;
            }

            this.columnPads = [];

            this.columnWidth = temp.width;
            this.columnCount = temp.count;

            this.computeHeightsBreaksAndIndexes();
        },
        computeWidthandCount() {
            let container = document.getElementById('project-grid-container') as Element;
            var width = parseFloat(getComputedStyle(container).width as string);
            this.width = width;

            let maxed = Measurement.maxColumnCount;
            let calced = Math.floor(width/(Measurement.minColumnWidth*pxInStd()));

            let colCount = Math.min(maxed, Math.max(1, calced));
            let colWidth = 100 / colCount

            return {
                count: colCount,
                width: colWidth
            };
        },
        computeHeightsBreaksAndIndexes() {
            let container = document.getElementById('project-grid-container') as Element;
            let children = container.children;
            let colCount = this.columnCount;

            let pads = [] as number[];
            let heights = [] as number[];
            for(let i = 0; i < colCount; i++){
                heights.push(0);
            }

            let indexes = [] as number[];
            for(let i = 0; i < children.length; i++) {
                let child = children[i];
                if (child.classList.contains('masonry-padding')){
                    continue;
                }

                let column = this.smallestColumnIndex(heights);

                indexes[i] = column;

                var childStyle = getComputedStyle(children[i])
                var childHeight = parseFloat(childStyle.height as string);
                heights[column] += childHeight;
            }
            for(let i = 0; i < heights.length; i++) {
                heights[i] = Math.ceil(heights[i]);
            }

            let tallest = this.tallestColumnHeight(heights);

            for(let i = 0; i < heights.length; i++) {
                pads.push(tallest - heights[i]);
            }

            this.columnPads = pads;

            this.columnHeights = heights;
            this.height = tallest;

            this.projectIndexes = indexes;
        },
        tallestColumnHeight(columns: number[]) : number {
            var max = 0;
            for(let i = 0; i < columns.length; i++) {
                max = Math.max(max, columns[i]);
            }
            return max;
        },
        smallestColumnIndex(columns: number[]) : number {
            var min = columns[0];
            for(let i = 0; i < columns.length; i++){
                min = Math.min(columns[i], min);
            }
            return columns.indexOf(min);
        }
    },
    mounted() {
        NavEventBus.$on(Events.navAnimDone, this.recomputeColumns);
        window.addEventListener(Events.resize, this.recomputeColumns);
        Vue.nextTick(this.recomputeColumns);

        this.$forceUpdate();
    },
    beforeDestroy() {
        NavEventBus.$off(Events.navAnimDone, this.recomputeColumns);
        window.removeEventListener(Events.resize, this.recomputeColumns);
    },

    components: {
        'project-item': ProjectItem,
        'sticky-bar': StickyBar,
    }
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
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-content: center;
    overflow: hidden;

    list-style-type: none;

    max-width: 100%;

    margin: auto;
}

.project-focused {
    max-width: $small-size;
    @supports(display: grid) {
        max-width: $large-size;
    }
    margin: auto;
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
    //padding-right: $grid-gap;
    //padding-bottom: $grid-gap;
    box-sizing: border-box;
}

.project-card.last-column {
    padding-right: 0;
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
