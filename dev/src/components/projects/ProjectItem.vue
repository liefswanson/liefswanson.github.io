<template>
<router-link :to='target'
             exact
             class='item'
             tag='li'
             :style='style'>
    <div ref='content'>
        <div class='card-header'>
            <img v-images-loaded="updateSpan"
                 :src="thumb"
                 class="thumb"
                 :alt="thumb">
            <h1 class='title'>
                <span>{{title}}</span>
                <div class='category-bar'>
                    <div class='spacer'></div>
                    <i v-for="elem in tags"
                       :key="elem.name"
                       v-if='tagActive(elem.name)'
                       class='icon'
                       :class="[
                            elem.fa,
                            elem.icon,
                            filterActive(elem.name) ? '': 'inactive'
                       ]"/>
                </div>
            </h1>
        </div>
        <div class='desc'>
            <p class='blurb'>{{blurb}}</p>
        </div>
    </div>
    <div class='mask'></div>
</router-link>
</template>

<script lang="ts">
import Vue          from 'vue';
import imagesLoaded from 'vue-images-loaded';

import Tag            from '@/scripts/main/Tag';
import TagItems       from '@/scripts/main/TagItems';
import Project        from '@/scripts/main/Project';
import { SectionMap } from '@/scripts/nav/NavItems';
import NavEventBus    from '@/scripts/nav/NavEventBus';
import Events         from '@/scripts/nav/Events';
import { setTimeout } from 'timers';


import { pxInStd }         from '@/style/ts/StandardUnits';
import { AnimationTimers } from '@/style/ts/Timers';
import Swatch              from '@/style/ts/Swatch';


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
        thumb(): string { return this.properties.thumb; },
        blurb(): string { return this.properties.blurb; },


        style(): object {
            var back = 'none';

            if (this.inFocus) {
                back = Swatch.projects;
            }
            return {
                "grid-row-end": "span " + this.rowSpan,
            }
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
            var content = this.$refs.content as Element;

            var span = content.getBoundingClientRect().height / pxInStd();
            span = span / (this.autoRows + this.gap);
            span = Math.ceil(span);

            this.rowSpan = span;
        },
    },
    mounted() {
        window.addEventListener(Events.resize, this.updateSpan);
        NavEventBus.$on(Events.navAnimDone, this.updateSpan);

        this.updateSpan();
    },
    beforeDestroy() {
        window.removeEventListener(Events.resize, this.updateSpan);
        NavEventBus.$off(Events.navAnimDone, this.updateSpan);
    },
    directives: {
        imagesLoaded
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
    background: $bright;
}

.mask {
    background: transparentize($projects-swatch, 1);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: $item-highlight-z;

    transition: background $highlight-animation-time ease;

    &:hover,
    &:focus {
        background: transparentize($projects-swatch, 0.75);
    }
}


.thumb {
    width: 100%;
    height: auto;
    display: block;
}

.card-header {
    position: relative;
}

// currently unused
.overlayed {
    background: transparentize( $medium, 0.1); //projects-swatch;
    position: absolute;
    bottom: 0;
    left: 0;
}

.title {
    $padding: 0.5rem;
    font-size: 1.5rem;
    margin: 0;
    padding: $padding;
    padding-left: $padding * 2;

    background: $medium;

    font-weight: bold;
    width: calc(100% - #{$padding * 3});
    font-family: 'Comfortaa', sans-serif;
    //border-bottom: 0.25em solid $projects-swatch;
    //color: $projects-swatch; //medium;
}

.blurb {
    color: $dark;
}

.desc {
    padding: 1.5rem;
}

</style>
