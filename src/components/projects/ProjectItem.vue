<template>
    <router-link @click.native='followLink'
                 :to='target'
                 exact
                 class='item'
                 tag='li'
                 :style='style'>
        <div ref='content'>
            <div class='card-header'>
                <img v-images-loaded="updateSpan"
                     :src="thumb"
                     class="thumb"
                     alt="there was supposed to be a picture here">
                <h2 class='title'>{{title}}</h2>
            </div>
            <div class='desc'>
                <p  class='blurb'>{{blurb}}</p>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Project        from '@/scripts/main/Project';
import { SectionMap } from '@/scripts/nav/NavItems';
import NavEventBus    from '@/scripts/nav/NavEventBus';
import Events         from '@/scripts/nav/Events';
import { setTimeout } from 'timers';
//@ts-ignore
import imagesLoaded from 'vue-images-loaded';

import { pxInStd }         from '@/style/ts/StandardUnits';
import { AnimationTimers } from '@/style/ts/Timers';


export default Vue.extend({
    name: 'ProjectItem',
    data() {
        return {
            rowSpan: 0
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
        }
    },
    computed: {
        path():  string { return this.properties.path; },
        name():  string { return this.properties.name; },

        title(): string { return this.properties.title; },
        thumb(): string { return this.properties.thumb; },
        blurb(): string { return this.properties.blurb; },

        style(): object {
            return {
                "grid-row-end": "span " + this.rowSpan
            }
        },
        target(): string {
            return SectionMap.projects.path + '/' + this.path;
        }
    },
    methods: {
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
    },
    mounted() {
        window.addEventListener(Events.resize, this.updateSpan);
        window.addEventListener(Events.resize, this.delayedUpdate);
        NavEventBus.$on(Events.openNav, this.delayedUpdate);
        NavEventBus.$on(Events.closeNav, this.delayedUpdate);
        NavEventBus.$on(Events.toggleNav, this.delayedUpdate);

        this.updateSpan();
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

    .item {
        //border: 1px solid $xlight;

        @include clickable;
        overflow: hidden;
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
        padding: 0.5rem;
        padding-left: 1rem;
        background: transparentize( $medium, 0.1); //projects-swatch;
        font-weight: bold;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-family: 'Comfortaa', sans-serif;
        //border-bottom: 0.25em solid $projects-swatch;
        //color: $projects-swatch; //medium;
    }

    .blurb {
        color: $dark;
    }

    .desc {
        padding: 1.5rem 0 1.5rem 0;
    }
</style>
