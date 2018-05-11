<template>
<router-link @click.native='followLink'
             :to='target'
             exact
             class='item'
             tag='li'
             :style='style'
             v-if='visible'>
    <div ref='content'>
        <div class='card-header'>
            <img v-images-loaded="updateSpan"
                 :src="thumb"
                 class="thumb"
                 alt="there was supposed to be a picture here">
            <h2 class='title'>
                <div class='category-bar'>
                    <div class='spacer'></div>
                    <i v-if='properties.tags.indexOf("code") !== -1' class='fa fa-code icon'/>
                    <i v-if='properties.tags.indexOf("design") !== -1' class='fa fa-paint-brush icon'/>
                    <i v-if='properties.tags.indexOf("misc") !== -1' class='far fa-dot-circle icon'/>
                </div>
                <span>{{title}}</span>
            </h2>
        </div>
        <div class='desc'>
            <p  class='blurb'>{{blurb}}</p>
        </div>
    </div>
    <div class='mask'></div>
</router-link>
</template>

<script lang="ts">
import Vue          from 'vue';
//@ts-ignore
import imagesLoaded from 'vue-images-loaded';

import Tag            from '@/scripts/main/Tag';
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
            inFocus: false
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
        },
        visible(): boolean {
            let filters = this.filters;
            function intersection(filter: Tag): boolean {
                return filters.indexOf(filter) !== -1;
            }

            this.updateNextTick();
            return this.properties.tags.filter(intersection).length !== 0;
        }
    },
    methods: {
        focus() {
            this.inFocus = true;
        },
        unfocus() {
            this.inFocus = false;
        },
        followLink() {

        },
        updateSpan() {
            var content = this.$refs.content as Element;
            // FIXME: kludge to avoid trying to resize if the compenent isn't loaded
            if (content == undefined) { return; }

            // otherwise all is well and continue!
            var span = content.getBoundingClientRect().height / pxInStd;
            span = span / (this.autoRows + this.gap);
            span = Math.ceil(span);

            this.rowSpan = span;
        },
        // just incase navbar came out during resize
        delayedUpdate() {
            setTimeout(this.updateSpan, AnimationTimers.nav + 1);
        },
        updateNextTick() {
            setTimeout(this.updateSpan, 0);
        }
    },
    mounted() {
        window.addEventListener(Events.resize, this.updateSpan);
        window.addEventListener(Events.resize, this.delayedUpdate);
        NavEventBus.$on(Events.openNav, this.delayedUpdate);
        NavEventBus.$on(Events.closeNav, this.delayedUpdate);
        NavEventBus.$on(Events.toggleNav, this.delayedUpdate);

        this.updateNextTick();
    },
    beforeDestroy() {
        window.removeEventListener(Events.resize, this.updateSpan);
        window.removeEventListener(Events.resize, this.delayedUpdate);
        NavEventBus.$off(Events.openNav, this.delayedUpdate);
        NavEventBus.$off(Events.closeNav, this.delayedUpdate);
        NavEventBus.$off(Events.toggleNav, this.delayedUpdate);
    },
    directives: {
        imagesLoaded
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.icon {
    padding-left: 0.5rem;
}

.category-bar {
    display: flex;
}

.spacer {
    flex: 1;
}

.item {
    //border: 1px solid $xlight;

    cursor: pointer;
    overflow: hidden;
    position: relative;

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

    &:hover{
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

.title {
    $padding: 0.5rem;
    padding: $padding;
    padding-left: $padding * 2;
    background: transparentize( $medium, 0.1); //projects-swatch;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
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
