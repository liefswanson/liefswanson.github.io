<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Optimizing Gesture Keyboards for Clarity, Done Dirt Cheap
        </h1>
        <div class='p-wide p-text'>
            <p class='strike'>
                <strong>Sort fir the tips; my keyboard is adding yup.</strong>
            </p>
            <p>
                <strong>Sorry for the typos; my keyboard is acting up.</strong>
            </p>
        </div>


        <p class='p-wide p-text'>
            If the above looks familiar to you, then you know how unreliable gesture typing is in apps like Gboard and SwiftKey.
            I use gesture typing regularly, because it offers speed while not restricting vocabulary the way predictive methods do.
            I decided I would solve this unreliability by finding a keyboard layout designed specifically for gesture typing, because it is important to my own user experience.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-wide p-text'>
            I had the project ideas, did the research into existing work, created the theory &amp; algorithms, and implemented the software required to test a new method of optimizing keyboard layouts for gesture clarity.
            This new method is designed to be extremely fast by comparison to existing methods, because it is intended to run on a phone and use an individual user’s vocabulary, so a keyboard layout is found for <strong>you</strong> not for the language you speak.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-wide p-text'>
           I had the opportunity to follow an idea all the way from inception to empirical testing.
        </p>

        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>


    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'OptimizingKeyboards',
    components: {
        'v-link': Link
    }
});
</script>

<style lang="scss" scoped>
.strike {
    text-decoration: line-through;
}
</style>
