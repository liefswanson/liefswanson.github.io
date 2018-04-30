<template>
    <div class='projects-container'>
        <ul class='left'>
            <project-item v-for='(project, key) in projects'
                          :key='key'
                          :properties="project">
            </project-item>
        </ul>
        <router-view class='right'>

        </router-view>
    </div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/projects/ProjectItem.vue'

import ProjectList from '@/scripts/main/ProjectItems';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList
        }
    },
    components: {
        'project-item': ProjectItem
    }

})
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

    .projects-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .left,
    .right {
        height: calc(100%-$header-height);
        overflow-y: auto;
        padding: 2em;
    }

    .left {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
        grid-auto-rows: minmax(5em, auto);
        list-style-type: none;
    }

    .right {
    }

</style>
