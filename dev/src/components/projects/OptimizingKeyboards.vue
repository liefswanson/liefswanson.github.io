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
            If the above looks familiar to you, then you know how unreliable gesture typing is.
            I use gesture typing regularly, because it offers speed while not restricting vocabulary the way predictive methods do.
            I decided I would solve this problem, because it is important to my own user experience.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-wide p-text'>
            I had the idea, did the research, created the theory &amp; algorithms, and implemented the software required to test a new method of optimizing keyboard layouts for gesture clarity.
            I also wrote the paper that is in the process of being getting published.
            This new method is designed to be extremely fast by comparison to existing methods, because it is intended to run on a phone and use an individual user’s vocabulary, so a keyboard layout is found for <strong>you</strong> not for the language you speak.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-wide p-text'>
           This project was an opportunity for me to exercise multiple skills at once, including: geometry, statistics, morphology, interaction design, programming, software design, and technical &amp; persuasive writing.
           One of the things I learned from this project was how to narrow down ideas.
           I had dozens of ideas how to tackle this problem when I started, and I think I settled on a really good one by the end.
           I think many users like me would find this to be a godsend for when they have to input text on their mobile devices, as machine learning algorithms just haven’t been able to pick up the slack on this particular problem yet.
           There are still more things to do in the future with this project, and I look forward to tackling them.
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
