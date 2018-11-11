<template>
<article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Designing and Implementing this portfolio
        </h1>

        <p class='p-text p-wide'>
            By this point, you are probably reasonably acquainted with me and my portfolio!
            If not, I recommend exploring some more after perusing my recursive self-advertising.
            I am at least mildly interesting, I swear.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-text p-wide'>
            Everything.
            My goal was to create a portfolio that speaks to my wide range of interests and abilities, without making me look full of myself.
            The best way I could see to do that was to display my skills, instead of talk about them.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-text p-wide'>
            I don’t like to talk about myself that much.
            I prefer to talk about the things I am interested in.
            However, a portfolio is like a product page… my time, perspective, and knowledge are the products being sold, and as such those are what I need to talk about.
            It was a fulfilling challenge to express who I am through the interactions, functionality, visuals, and content of this portfolio.
        </p>

        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>

</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'ProjectEuler',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
