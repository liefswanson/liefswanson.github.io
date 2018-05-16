<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            Implementing HDR Instead of Just Using It
        </h1>

        <p class='p-wide p-text'>

        </p>

        <p class='p-thin p-note'>
            Below you will find the three images I used while implementing my little custom HDR settings.
        </p>

        <img src='/static/hdr/dark.png'
             alt='dark'
             class='p-thin p-image'>

        <img src='/static/hdr/med.png'
             alt='medium'
             class='p-thin p-image'>


        <img src='/static/hdr/light.png'
             alt='light'
             class='p-thin p-image'>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'HDR',
    components: {
        'v-link': Link
    }
});
</script>


