<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        INSERT TITLE HERE
    </h1>

    <h2 id='what' class='p-wide p-sub-title'>
        What my role was
    </h2>
    <h2 id='why' class='p-wide p-sub-title'>
        Why this project is important to me
    </h2>
    <h2 id='how' class='p-wide p-sub-title'>
        How I tackled it
    </h2>
</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'ProjectEuler',
    components: {
        'v-carousel': Carousel
    }
});
</script>
