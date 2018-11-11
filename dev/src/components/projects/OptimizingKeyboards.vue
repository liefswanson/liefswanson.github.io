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
            If the above looks familiar to you, then you know how unreliable <v-link to='https://www.youtube.com/watch?v=obAlmLLD0O0'>gesture typing</v-link> is, in apps like <v-link to='https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin'>Gboard</v-link> and <v-link to='https://www.microsoft.com/en-us/swiftkey'>SwiftKey</v-link>.
            To try and solve this problem, I developed a new method, from scratch, for evaluating how likely it is that typos would occur on a given keyboard while gesture typing.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-wide p-text'>
            I had the project ideas, did the research into existing work, created new algorithms &amp; theory, and implemented the software.
            All of this was for the purpose of testing a new method of optimizing keyboard layouts for gesture clarity.
            This new method is designed to be extremely fast by comparison to existing methods, because it is intended to run on a phone and use an individual user’s vocabulary, so a keyboard layout is found for <strong>you</strong> not for the language you speak.
        </p>

        <p class='p-note p-thin'>
            Gesture clarity is a term defined in a <v-link to='https://dl.acm.org/authorize.cfm?key=N97906'>paper</v-link>, by Smith, Bi, and Zhai.
            This paper details an approach for calculating gesture clarity that I was trying to improve upon.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-wide p-text'>
            This project was done under the <v-link to='http://www.sfu.ca/dean-gradstudies/awards/undergraduate-awards/NSERC.html'>NSERC USRA at SFU</v-link>.
            I was given free reign to do any project that interested me.
            I had dozens of ideas, and had to quickly narrow things down to a single idea that was achievable in one semester.
            The process of repeated refinement was an extremely freeing experience.
            I like taking something all the way from a very eathereal idea right through to implementation.
            Typically, I am only ever given the opportunity to do a very narrowly defined task, but this was quite a different experience, and I much preferred it.
        </p>

        <p class='p-thin p-note'>
            The NSERC USRA grant is done with a professor sponsoring an undergrad student.
            Some students participate in their sponsor's work... but my sponsor <v-link to='https://www.sfu.ca/computing/people/faculty/binaybhattacharya.html'>Binay Bhattarachya</v-link> gave me free reign.
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
