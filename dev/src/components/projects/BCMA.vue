<template>
<project-template name='BCMA'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            As one of my co-ops at SFU, I worked IT for the British Columbia Medical Association <span class='p-note'>(BCMA)</span>.
            They have since changed their name to
            <a class='p-link' href='https://www.doctorsofbc.ca/'>Doctors of BC</a>.
            It is sort of like a doctor's union.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I worked under contract, covering both day-to-day and long-term IT tasks.
            At the time of my employment, dozens of employees had been displaced by a renovation. They all either worked from home, or worked from inside other departments they were not familiar with.
            It was my job to make sure everything went smoothly.
        </p>
        <p class='p-thin p-note'>
            There were all sorts of problems you might not expect, such as having printers break in a cascade... likely due to more people using fewer printers.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            It was my first experience working a job where I had more than 100 coworkers and also my first time manning a formal helpdesk with a ticketing system.
            I think that on the whole I did pretty well, the team actually had a dinner to see me off in my last week of my contract.
        </p>

        <p class='p-thin p-note'>
            So either they were going to miss me or they were really glad to be rid of me!
        </p>

        <p class='p-wide p-text'>
            By the end, I think the most important thing I gained was experience interacting with stressed out people!
            People are at their worst when they are hungry... and when their computer mysteriously stops working.
            Defusing stressful situations is part of the job, and probably the best part of the job.
            Helping someone destress by removing the source of their stress, and being kind about it in the process, is a pretty fulfilling job!
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            I worked under the loose supervision of 3 seasoned IT professionals, so that made things pretty easy; making the ocassional mistake was not a huge problem.
            I think the hardest part was figuring out how to use the down-time to preempt future issues.
            It tends to be that problems that need to be solved comes in waves, just by the nature of them taking a non-zero amount of time to solve, and following a
            <a class='p-link' href="https://en.wikipedia.org/wiki/Poisson_distribution">poisson distribution</a>
            ... and it is even worse when you push out an update with a mistake in it!
        </p>

        <p class='p-wide p-text'>
            One of the things I did with my down time was making user documentation, available over the company intranet, to help users diagnose and solve their own simple problems.
        a</p>

    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "BigTeamProject",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>
