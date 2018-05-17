<template>
<div class='main-content'>
    <featured-project/>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import FeaturedProject from '@/components/projects/OptimizingKeyboards.vue';

export default Vue.extend({
    name: 'Featured',
    data () {
        let m : String = "Lief's new website, in progress!"
        return {
        msg: m
        }
    },
    components: {
        'featured-project': FeaturedProject
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.preface {
    max-width: $small-size;
}
</style>
