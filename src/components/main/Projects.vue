<template>
    <div>
        <ul class='left'
            v-show='leftActive'
            :style='style'>
            <project-item v-for='(project, key) in projects'
                          :key='key'
                          :properties="project"
                          :height='height'
                          :gap='gap'
                          class='project-card'>
            </project-item>
        </ul>
        <router-view class='right'
                     v-show-else>

        </router-view>
    </div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/projects/ProjectItem.vue'

import ProjectList    from '@/scripts/main/ProjectItems';
import { SectionMap } from '@/scripts/nav/NavItems';

const resize = 'resize';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            height: 1,
            gap: 1
        }
    },
    computed: {
        leftActive(): boolean {
            this.$refs.ProjectList
            return this.$route.path == SectionMap.projects.path;
        },
        style(): object {
            return {
                "grid-auto-rows": this.height + 'em',
                "grid-gap": this.gap + 'em',
            }
        }
    },
    methods: {

    },
    components: {
        'project-item': ProjectItem
    }

})
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

    .left,
    .right {
        height: calc(100%-$header-height);
        overflow-y: auto;
        padding: 2em;
    }

    .left {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em,1fr));
        list-style-type: none;
    }


</style>
