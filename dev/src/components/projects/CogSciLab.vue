<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        Cognitive Science Lab at SFU
    </h1>

    <p class='p-wide p-text'>
        In my spare time I volunteer at the
        <v-link to='https://cslabsfu.wordpress.com/'>Cognitive Science Lab</v-link>
        at SFU.
        Unfortunately, I don't get to spend as much time in there as I would like, but when I do get to spend time there it is great.
    </p>

    <p class='p-wide p-text'>
        The research I helped with had to do with analyzing replays of StarCraft 2.
        The data consists of replays from players of all skill levels, from some of the worst in the world, to some of the best.
        There are many phenomena in the data worth spending an afternoon speculating about.
    </p>

    <p class='p-wide p-text'>
        One of the cool unexplained findings we found in that data was experts look at some things for such a short period of time,
        it was previously thought impossible to gather information from looking at something for such a short period of time.
        This might mean that at some point, experts become so quick at pattern recognition, they aren't consciously thinking about what they are looking at.
    </p>

    <p class='p-note p-thin'>
        Think about the last time you were driving. Similar things can happen where you make subconscious decisions.
    </p>

    <p class='p-wide p-text'>
        The most valuable thing about volunteering in the lab was the conversations I had with intelligent people in the lab.
        If a topic is even slightly related to cognitive science, be assured it is a topic of discussion in that lab.
    </p>
</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'CogSciLab',
    components: {
        'v-link': Link,
    }
});
</script>
