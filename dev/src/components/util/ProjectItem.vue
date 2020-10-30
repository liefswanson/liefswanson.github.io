<template>
<li class='item'
    :style='style'>
    <router-link :to='target'
                 exact
                 class='suppress-link-style project-link'>
        <div ref='content'
             class='content'>
            <div class='card-header'>
                <prealloc :img="img"
                          class="thumb"/>
                <h2 class='title'>
                    <span>{{title}}</span>
                    <span class='category-bar'>
                        <span class='spacer'></span>
                        <i v-for="elem in activeTags"
                           :key="elem.name"
                           class='icon'
                           :class="[
                                elem.fa,
                                elem.icon,
                                filterActive(elem.name) ? '': 'inactive'
                           ]"/>
                    </span>
                </h2>
            </div>
            <p class='desc'>
                {{blurb}}
            </p>
        </div>
        <div class='mask'></div>
    </router-link>
</li>
</template>

<script lang="ts">
import Vue          from 'vue';
import imagesLoaded from 'vue-images-loaded';

import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

import Tag            from '@/scripts/main/Tag';
import TagItems       from '@/scripts/main/TagItems';
import Project        from '@/scripts/main/Project';
import { SectionMap } from '@/scripts/nav/NavItems';
import NavEventBus    from '@/scripts/nav/NavEventBus';
import Events         from '@/scripts/nav/Events';


import { pxInStd }         from '@/style/ts/StandardUnits';
import { AnimationTimers } from '@/style/ts/Timers';
import Swatch              from '@/style/ts/Swatch';
import Measurement         from '@/style/ts/Measurement';
import PreallocatedImage from '@/scripts/main/PreallocatedImage';
import TagItem from '@/scripts/main/TagItem';


export default Vue.extend({
    name: 'ProjectItem',
    data() {
        return {
            rowSpan: 0,
            inFocus: false,
            tags: TagItems
        };
    },
    props: {
        properties: {
            type: Object as () => Project,
            required: true
        },
        autoRows: {
            type: Number,
            required: true
        },
        gap: {
            type: Number,
            required: true
        },
        filters: {
            type: Array as () => Tag[],
            required: true
        }
    },
    computed: {
        path():  string { return this.properties.path; },
        name():  string { return this.properties.name; },

        title(): string { return this.properties.title; },
        blurb(): string { return this.properties.blurb; },

        img(): PreallocatedImage { return this.properties.img; },

        style(): object {
            let back = 'none';

            if (this.inFocus) {
                back = Swatch.projects;
            }
            return {
                "grid-row-end": "span " + this.rowSpan,
            }
        },

        activeTags(): TagItem[] {
            const active = this.tagActive;
            const fun = function(ti: TagItem): boolean {
                return active(ti.name);
            }
            return this.tags.filter(fun);
        },

        target(): string {
            return SectionMap.projects.path + '/' + this.path;
        }
    },
    methods: {
        focus() {
            this.inFocus = true;
        },
        unfocus() {
            this.inFocus = false;
        },
        tagActive(tag: Tag): boolean {
            return this.properties.tags.indexOf(tag) !== -1;
        },
        filterActive(tag: Tag) {
            return this.filters.length == 0 ||
                   this.filters.indexOf(tag) !== -1;
        },
        updateSpan() {
            const content = this.$refs.content as Element;

            let span = content.getBoundingClientRect().height / pxInStd();
            span = span / (this.autoRows + this.gap);
            span = Math.ceil(span);

            const margin = Measurement.gridGap/this.autoRows;

            this.rowSpan = span + margin;
        },
    },
    mounted() {
        window.addEventListener(Events.resize, this.updateSpan);
        NavEventBus.$on(Events.navAnimDone, this.updateSpan);
        NavEventBus.$on(Events.projectGridActive, this.updateSpan);

        this.updateSpan();
    },
    beforeDestroy() {
        window.removeEventListener(Events.resize, this.updateSpan);
        NavEventBus.$off(Events.navAnimDone, this.updateSpan);
        NavEventBus.$off(Events.projectGridActive, this.updateSpan);
    },
    components: {
        'prealloc': PreallocatedImageVue
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.inactive {
    color: $dark;
}

.icon {
    padding-left: 0.5rem;
    font-size: 0.8em;
}

.category-bar {
    display: flex;
}

.item {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: $grid-gap;
    //box-shadow: 0.25rem 0.25rem 1rem $dark;
    background: darken($bright, 5%);

    @include not-selectable;
}

.project-link {
    border: 0.125rem solid $xlight;
    display: block;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;

    &:hover,
    &:focus {
        border-color: $projects-swatch;
        .mask {
            opacity: 0.25;
        }
    }
}

.content {
    width: 100%;
    box-sizing: border-box;
}

.mask {
    background: $projects-swatch;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: $item-highlight-z;

    transition: opacity $highlight-animation-time ease;
}

.thumb {
    width: 100%;
    height: auto;
    display: block;
}

.card-header {
    position: relative;
    background: $medium;
}

.title {
    $padding: 0.5rem;
    font-size: 1.5rem;
    margin: 0;
    padding: $padding;
    padding-left: $padding * 2;

    font-weight: bold;
    width: calc(100% - #{$padding * 3});
    font-family: "Comfortaa", sans-serif;
    //border-bottom: 0.25em solid $projects-swatch;
    //color: $projects-swatch; //medium;
}

.desc {
    padding: 1.5rem;
    color: $dark;
    box-sizing: border-box;
    //display: none;
}

</style>
