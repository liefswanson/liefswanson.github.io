<template>
<div class='p-article-grid
                p-title-section
                section'>
    <div class='p-mid'>
        <h1 class='p-title p-mid title'>
            {{ project.title }}
        </h1>
        <p class='p-note'>
            {{ project.blurb }}
        </p>
    </div>

    <prealloc v-if='!onPhone'
              class='p-image p-thin image p-push-right'
              :img="project.img"/>

</div>
</template>


<script lang="ts">
import Vue from 'vue'
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

import {
    nullProject,
    getProject
}                  from '@/scripts/main/ProjectItems';
import Project     from '@/scripts/main/Project';
import Breakpoints from '@/style/ts/Breakpoints';
import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events';

export default Vue.extend({
    name: "ProjectTitle",
    data() {
        return {
            project: getProject(this.name),
            onPhone: false
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        updateDevice() {
            this.onPhone = Breakpoints.onPhone();
        }
    },
    mounted() {
        window.addEventListener(Events.resize, this.updateDevice)
        this.updateDevice();
    },
    beforeDestroy() {
        window.addEventListener(Events.resize, this.updateDevice);
    },
    components: {
        'prealloc': PreallocatedImageVue
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.image {
    max-width: 25rem;
    margin: auto;
    padding: 0;
}

.title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}
</style>

