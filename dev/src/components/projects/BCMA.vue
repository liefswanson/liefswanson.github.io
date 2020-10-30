<template>
<project-template name='BCMA'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            As one of my
            <a class='p-link' title='Essentially an internship organized through the university' href='http://www.sfu.ca/coop.html'>co-ops</a>
            at
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>,
            I worked IT for the British Columbia Medical Association <span class='p-note'>(BCMA)</span>.
            They have since changed their name to
            <a class='p-link' href='https://www.doctorsofbc.ca/'>Doctors of BC</a>.
            It is sort of like a doctor's union.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I worked under contract, covering both day-to-day and long-term IT tasks.
            At the time of my employment, over 30 of approximately 100 employees had been displaced by a renovation. They all either worked from home, or worked from inside other departments they were not familiar with.
            It was my job to make sure everything went smoothly, and I had some help from other people in the department, but primarily that is why I was hired was to deal with the new stuff that cropped up.
        </p>
        <p class='p-wide p-text'>
            There were all sorts of problems you might not expect, such as having all our available printers break in a cascade because 50 employees were all printing from 3 printers instead of 6.
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

        <p class='p-thin p-note'>
            Difficult and sometimes thankless, but I still find it fulfilling.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            I worked under the loose supervision of 3 seasoned IT professionals, so that made things pretty easy; making the occasional mistake was not a huge problem.
            I think the hardest part was figuring out how to use the down-time to preempt future issues.
            It tends to be that problems that need to be solved comes in waves.
            I think that is mostly because problems take time to fix, and the odds of another problem occuring only increases the longer it takes to fix something.
        </p>

        <p class='p-thin p-note'>
            It also doesn't help when something is overlooked before pushing out an update, or when something unexpected happened on the weekend which messes up everyone's monday.
        </p>

        <p class='p-wide p-text'>
            One of the things I did with my down time was making user documentation, available over the company intranet, to help users diagnose and solve their own simple problems.
            This was a good use of the down time I think.
        </p>

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
  }
});
</script>
