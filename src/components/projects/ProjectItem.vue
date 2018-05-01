<template>
    <router-link @click.native='followLink'
                 :to='target'
                 exact
                 class='item'
                 tag='li'
                 :style='style'>
        <div ref='content'>
            <h2 class='title'>{{title}}</h2>
            <p  class='blurb'>{{blurb}}</p>
        </div>
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Project        from '@/scripts/main/Project';
import { SectionMap } from '@/scripts/nav/NavItems';
import { pxInStd } from '@/style/ts/StandardUnits';


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
            var span = content.getBoundingClientRect().height / pxInStd;
            span = span / (this.autoRows + this.gap);
            span = Math.ceil(span);

            this.rowSpan = span;
        },
    },
    mounted() {
        window.addEventListener("resize", this.updateSpan);

        this.updateSpan();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateSpan);
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

    .item {
        //border: 1px solid $xlight;
        background: $bright;

        @include clickable;
    }

    .title {
        padding: 0.5rem;
        background: $medium; //projects-swatch;
        font-weight: bold;
        //border-bottom: 0.25em solid $projects-swatch;
        color: $projects-swatch; //medium;
    }

    .blurb {
        padding: 1rem;
        color: $dark;
    }
</style>
