<template>
    <router-link @click.native='followLink'
                 :to='target'
                 exact
                 class='item'
                 tag='li'>
        <h2 class='title'>{{title}}</h2>
        <p  class='blurb'>{{blurb}}</p>
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Project        from '@/scripts/main/Project';
import { SectionMap } from '@/scripts/nav/NavItems';

export default Vue.extend({
    name: 'ProjectItem',
    props: {
        properties: {
            type: Object as () => Project,
            required: true
        }
    },
    computed: {
        path():  string { return this.properties.path; },
        name():  string { return this.properties.name; },

        title(): string { return this.properties.title; },
        thumb(): string { return this.properties.thumb; },
        blurb(): string { return this.properties.blurb; },

        active(): boolean {
            let fullPath = this.$route.fullPath;
            let location = fullPath.indexOf(this.path);

            return location != -1;
        },

        target(): string {
            return SectionMap.projects.path + '/' + this.path;
        }
    },
    methods: {
        followLink() {

        },
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

    .item {
        color: $dark;
        cursor: pointer;
        // border: 0.25em solid $medium;
    }

    .title {
        padding: 0.5em;
        color: $projects-swatch;
        background: $medium;
    }

    .blurb {
        padding: 1em;
    }
</style>
