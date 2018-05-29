<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        Working for Whittington IT
    </h1>

    <p class='p-wide p-text'>
        I worked for a few months in Brisbane Australia for a small IT company that serviced family doctors in the greater Brisbane area.
        Working there had some unique challenges, as most of the time I had to be self directed.
        The owner was ill, and has since passed away.
        I was hired specifically to cover for him while he underwent and recovered from an operation.
    </p>

    <p class='p-wide p-text'>
        Though, one shouldn't think that my tasks were limited to maintenance.
        While it is true that I spent plenty of time talking to office assistants while I unplugged and plugged stuff back in again,
        I also spent time making websites and writing code to automate tasks.
        Whittington IT was one of those businesses where they didn't turn down a job if they could do it.
        Sometimes a doctor needed a small website, and sometimes they needed something photoshopped.
        All of those things were within my ability.
    </p>

    <p class='p-wide p-text'>
        Some IT-related tasks were actually pretty difficult.
        I vividly remember working in an office on an urgent problem, only to have another office call me from across the city while no one else was available.
        I had to guide someone on how to help me remotely diagnose a computer that would periodically crash.
        It turned out to be a RAID failure.
    </p>

    <p class='p-thin p-note'>
        You haven't lived until you have tried to guide someone on how to use the commandline to run a disk check over the phone.
    </p>
</article>
</template>


<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'WhittingtonIT',
    components: {
        'v-link': Link,
    }
});
</script>
