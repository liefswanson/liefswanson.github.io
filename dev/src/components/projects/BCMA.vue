<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Working for the BCMA
        </h1>

        <p class='p-wide p-text'>
            As one of my co-ops at SFU, I worked for the British Columbia Medical Association <span class='p-note'>(BCMA)</span>.
            They have since changed their name to
            <v-link to='https://www.doctorsofbc.ca/'>Doctors of BC</v-link>.
            It is sort of like a doctor's union. The place where I worked was their main office.
        </p>

        <p class='p-wide p-text'>
            I worked under contract, covering both day-to-day and long-term IT tasks.
            At the time of my employment, dozens of employees had been displaced by a renovation. They all either worked from home, or worked from inside other departments they were not familiar with.
            It was my job to make sure everything went smoothly.
        </p>

        <p class='p-thin p-note'>
            It was no small task. The extra stress on the printers alone caused all kinds of problems that needed to be addressed.
            One wall had to be rewired because the printer was causing the  two-decade-old wiring to give out.
        </p>

        <p class='p-wide p-text'>
            I found plenty of opportunities to flex my skillsets.
            At the time, some of the servers in the office were being swapped over to Linux.
            I had the second most experience with Linux of any of the staff other than the person I worked under.
            User documentation for in-house tools needed to be updated as well, so I got to work using my experience in design to make new documentation.
        </p>

        <p class='p-wide p-text'>
            Ultimately though, I think the biggest part of the job was interacting with people daily who required help to keep their jobs going smoothly.
            People would expect me to fix things so that they could keep doing their job, and make sure that the problem wouldn't come back to slow them down again.
            Learning to deal with stressed-out people on a daily basis was a pretty good experience.
            Dealing with people is something that I think is a very necessary skill, and also a hard one to acquire.
        </p>

        <p class='p-thin p-note'>
            There is an old adage that people who work in the food service industry need to be very good at dealing with stressed-out people:
            People are at their worst when they are very hungry...
            Having your computer stop working also seems to bring out the worst in people.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'BCMA',
    components: {
        'v-link': Link,
    }
});
</script>
