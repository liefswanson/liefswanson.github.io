<template>
<project-template name='CogSciLab'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I volunteered, in my spare time, at the
            <a class='p-link' href='https://cslabsfu.wordpress.com/'>Cognitive Science Lab</a>
            at SFU.
            We focused our efforts on learning about human attention allocation, and how it relates to mastery of a task.
            How did we do that? By reviewing thousands of
            <a class='p-link' href="https://starcraft2.com">StarCraft 2</a>
            games.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            My job in the lab mostly revolved around something I am quite good at... code review!
            There were many people writing scripts to analyze data we had, but they didn't really know much about writing code that other people could read... or even that they could read for that matter.
            I do know a fair bit about that! So I helped people write better code, and I helped them debug the bad code that they learned their lessons from.
        </p>

        <p class='p-wide p-text'>
            The data we used for analysis was StarCraft 2 replays!
            The replays were from players of all skill levels, from some of the worst in the world, to some of the best.
        </p>

        <p class='p-wide p-text'>
            There was some work that I spear headed, rather than just assisting in.
            Mostly, I worked on ways to visualize and explain the data we had, because revising our theories about human attention allocation to fit our data is a thing that innevitably had to happen, as with all good science.
            It also came down to me in a fair few cases to relay explanations of our results to other lab participants.
            Usually a grad student would talk to me about what we were seeing in our analysis, and I would explain it to 5 other people in the lab.
            As such, I had a pretty good grasp of the analysis of our results, and that put me in a position to explain things to passers-by when we showed our work at conferences.
        </p>

        <p class='p-wide p-text'>
            I also have a
            <router-link class='p-link' exact to='/projects/bcma'>background in IT</router-link>...
            which came in handy when some of our computers, which had important newly collected data on them broke down.
        </p>

        <p class='p-wide p-text'>
            Lastly, I manned some in person lab studies, with real human participants, helping set up experiments and ensure our studies followed our ethics requirements.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I learned a great deal about how scientific experiments are conducted.
            Everyone in that lab was there to learn, and they wanted to find answers to really hard problems.
            It was just a good environment to be in, where I feel like I benefitted from the new experiences I had.
            The way problems are approached in these sorts of fields is different than computer science, and I think it was worth it to experience that.
        </p>

        <p class='p-wide p-text'>
            One of the cool unexplained findings we found in that data was experts can look at a screen for the amount of time it takes to blink, before moving on.
            It was previously thought impossible to gather information from looking at something for such a short period of time, but certainly they must be getting something from it... or they wouldn't be playing StarCraft for money on international stages.
            This might mean that at some point, experts become so quick at pattern recognition that they don't actually need to consciously know what they just looked at to gather information from it.
        </p>

        <p class='p-note p-thin'>
            Think about the last time you were driving.
            Similar things can happen where you make decisions about how to interact with others on the road, and you may not have even considered why.
        </p>

        <p class='p-wide p-text'>
            In the end though, I think the most valuable thing about volunteering in the lab was the conversations I had with intelligent scientifically minded people.
            If a topic is even slightly related to cognitive science, be assured it is a topic of discussion in that lab.
            I learned a fair amount about a field I didn't know much about, in only a few weeks, by simply listening to what others were talking about and chiming in when I could.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            Making time for volunteer work can be difficult with a full course load, especially when you commute to school like I did.
            I found the easiest way to stay on track was to stay in constant contact with other people in the lab.
            It is much easier to stay in the loop when you often see other people working on the same stuff.
        </p>

        <p class='p-wide p-text'>
            It also helped that we had weekly meetings, as that had everyone in our lab there at the same time.
            While I don't think meetings are always necessary, I do think a regularly scheduled standup meeting is really useful.
        </p>

        <p class='p-wide p-text'>
            As for the actual work itself, that mostly came down to doing stuff I was already well versed in... but was not limited to it.
            There were definitely areas that I ended up asking for help;
            I ended up getting help applying such as some of the more advanced statistical methods we employed, and I also looked for help making sure I understood the lab study protocols.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "Photography2014Summer",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>
