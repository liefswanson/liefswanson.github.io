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
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

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
        height: {
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
            const pxInEm = 16;

            var content = this.$refs.content as Element;
            var span = content.getBoundingClientRect().height / pxInEm;
            span = span / (this.height + this.gap);
            span = Math.ceil(span);

            this.rowSpan = span;
        },
    },
    mounted() {
        this.updateSpan();
        window.addEventListener("resize", this.updateSpan);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.updateSpan);
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

    .item {
        cursor: pointer;
        //border: 1px solid $xlight;
        background: $bright;
    }

    .title {
        padding: 0.5em;
        background: $medium; //projects-swatch;
        font-weight: bold;
        //border-bottom: 0.25em solid $projects-swatch;
        color: $projects-swatch; //medium;
    }

    .blurb {
        padding: 1em;
        color: $dark;
    }
</style>
