<template>
<project-template name='WhittingtonIT'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I worked for a few months in Brisbane Australia for a small IT company that serviced family doctors in the greater Brisbane area.
            Working there had some unique challenges, as most of the time I had to be self directed.
            The owner was ill, and has since passed away.
            I was hired specifically to cover for him while he underwent and recovered from an operation.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            Though, one shouldn't think that my tasks were limited to maintenance.
            While it is true that I spent plenty of time talking to office assistants while I unplugged and plugged stuff back in again,
            I also spent time making websites and writing code to automate tasks.
            Whittington IT was one of those businesses where they didn't turn down a job if they could do it.
            Sometimes a doctor needed a small website, and sometimes they needed something photoshopped.
            All of those things were within my ability, and thus I took them on.
        </p>

        <p class='p-wide p-text'>
            Some IT-related tasks were actually pretty difficult.
            I vividly remember working in an office on an urgent problem, only to have another office call me from across the city... during the time my boss was on sick leave and I was the only person available.
            I had to guide the receptionist on how to help me remotely diagnose a computer that would periodically crash.
            You haven't lived until you have tried to guide someone, that has never seen a terminal, on how to use the commandline to run a disk check over the phone.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            Working for Whittington IT involved working with many customers who were only accustom to my boss.
            There were definitely some growing pains, as I wasn't accustom to his clientele, nor the issues of theirs that he was in the position of repeatedly fixing.
            It was one of those things where you are thrown straight in, and learn on the job.
        </p>

        <p class='p-wide p-text'>
            With that in mind, I think I did reasonably well.
            Were I to do it again today though, I know there are many things I could be more proactive about.
            For instance, the setup at Whittington IT was pretty adhoc, mostly everything was noted down in my bosses head... not anywhere that I could look up.
            It would have been a great idea to pick his brain more in the short time I had before he went for his operation.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            The how of this was pretty straight forward actually.
            I think this sort of work comes down more to people skills than it does to technical ability.
            With time you get an intuition for how certain problems present themselves, and the fast ways to diagnose them.
            The real difficulty comes from the people that are freaking out because their system is down.
        </p>

        <p class='p-wide p-text'>
            It is very stressful to work a demanding job, such as being a doctor... and even worse when your tools don't work.
            I think my greatest asset in these sorts of situations is an ability to stay calm and talk people through difficult situations while I fix the problem.
            Keeping people apprised of the current situation goes a long way to making them feel they have more adjency is an otherwise out of control situation.
            Most of the time, that is all that is needed to give people peace of mind long enough to fix the problem.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "WhittingtonIT",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>