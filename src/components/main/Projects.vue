<template>
    <div>
        <div>Projects</div>
        <ul>
            <li v-for='(project, key) in projects' :key='key'>
                {{ project.description }}
            </li>
        </ul>
        <router-view>

        </router-view>
    </div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectList from '@/scripts/main/ProjectItems';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList
        }
    }
    
})
</script>


<style lang="scss" scoped>

</style>
