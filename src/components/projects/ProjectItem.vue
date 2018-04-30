<template>
    <div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Project from '@/scripts/main/Project';

export default Vue.extend({
    name: 'ProjectItem',
    props: {
        properties: {
            type: Object as () => Project,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>

</style>
