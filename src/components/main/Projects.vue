<template>
    <div>
        <transition name='focus'>
            <ul class='left main-content'
                v-if='leftActive'
                :style='style'
                ref='container'>
                <project-item v-for='(project, key) in projects'
                            :key='key'
                            :properties="project"
                            :autoRows='autoRows'
                            :gap='gap'
                            class='project-card'>
                </project-item>
            </ul>

            <router-view class='right main-content'
                         v-else>
            </router-view>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/projects/ProjectItem.vue'

import ProjectList    from '@/scripts/main/ProjectItems';
import { SectionMap } from '@/scripts/nav/NavItems';

import { std } from '@/style/ts/StandardUnits';



export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            autoRows: 1, //measurements assume use of std
            gap: 1,
        }
    },
    computed: {
        leftActive(): boolean {
            this.$refs.ProjectList
            return this.$route.path == SectionMap.projects.path;
        },
        style(): object {
            return {
                "grid-auto-rows": this.autoRows + std,
                "grid-gap": this.gap + std,
            }
        }
    },
    components: {
        'project-item': ProjectItem
    },

});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

    .left,
    .right {
        height: calc(100% - $header-height);
        overflow-y: auto;
        position: absolute;
    }

    .left {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        list-style-type: none;
    }


    .focus-enter-active,
    .focus-leave-active {
        transition: all $header-animation-time ease;
    }
    .focus-enter,
    .focus-leave-to {
        transform: translateX(-50vh);
        opacity: 0;
    }
</style>
