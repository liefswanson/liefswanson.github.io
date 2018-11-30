<template>
<project-template name='BigTeamProject'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            Anyone that has ever done a group project knows it is pretty common to get people that want to coast on your hard work.
            That was not the case here. People worked pretty hard, but I think we bit off more than we could chew...
        </p>

        <p class='p-wide p-text'>
            This assignment in particular was a software development project where we had an actual client.
            The client was from SFU's security desk, and they wanted an application built which would help them keep track of hours that employees and volunteers worked so they could replace their lack of a system known as the pile of papers on the boss' desk.
            None of the requirements were known beforehand, and all the tasks were complex enough that we didn't really know how to effectively break them down so we could all work on them.
            The class wasn't just about how to write code, but also how to work with other people so that work gets done effectively.
        </p>

        <p class='p-wide p-text'>
            In the end it was a useful experience that I learned a great deal from.
            I ended up using a lot of the skills I learned out of necessity during that project to
            <router-link class='p-link' exact to='/projects/recursive-plug'>build this website</router-link>
            you are looking at right now!
        </p>

        <p class='p-thin p-note'>
            Unfortunately, the code is not on my GitHub. I may share it there eventually, but it isn't all that impressive.
            I think the experience is worth more than the resulting code.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I knew more than most about the tools we ended up using in this class, you wouldn't likely come across the tools we used in lower division computer science classes.
            Most people were pretty far out of their comfort zone in our team, I think.
            Which is why I ended up teaching the other people in our team how to use the tools we were working with.
        </p>

        <p class='p-thin p-note'>
            Apparently I did a pretty good job of that, because by the end of the class the professor asked if I wanted to
            <router-link class='p-link' exact to='/projects/teachers-assistant'>TA for another one of his classes</router-link>.
        </p>

        <p class='p-wide p-text'>
            I also single handedly built our semi-interactive UI prototype so we could get feedback from the user on our ideas for how interaction in their application would work.
        </p>

        <p class='p-thin p-note'>
            It was a codeless prototype using
            <a class='p-link' href='https://pencil.evolus.vn'>pencil</a>.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I think it is important to admit to the experiences you don't remember fondly.
            Often those experiences have much to teach.
            Actually, I am of the opinion that failure and learning are nearly synonymous; success does not teach very much.
            In this case, I learned a lot about how to collaborate with a team of people.
            Yes... that means that is where I think I failed the hardest.
            It is really easy to be ineffective in communication with other people, causing everyone to waste time.
        </p>

        <p class='p-thin p-note'>
            This is easily the hardest task in software development.
            It is an infamous problem that has sunk more projects than anything else in the world of software.
            Check out a
            <a class='p-link' href='https://www.goodreads.com/book/show/19288230-scrum'>book</a>
            on this topic that I like very much.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            I think the only thing that kept us on track at all was that we were forced to use a light form of
            <a class='p-link' href="https://www.scrum.org/resources/what-is-scrum">scrum</a>
            during our project.
            We were forced to have weekly meetings, and we were also forced to keep track of things on our own gitlab issue tracker.
        </p>

        <p class='p-wide p-text'>
            We unfortunately did not do a very good job of organizing, and I think this came down partly to us relying too much on applications like
            <a class='p-link' href="https://slack.com">slack</a>.
            There is a lot of urgency that is lost when communicating asynchronously, and the forum like discussions were a far worse way of organizing than just creating issues in our team issue tracker.
            When our whole team met in person, more work definitely got done, as well as when I would meet online in video calls with my teammate.
            We sort of grouped ourselves in the buddy system, and not all team members kept to it, but my buddy and I did, and that kept us reasonably focused and organized... at least between the two of us.
        </p>

        <p class='p-thin p-note'>
            While apps like slack preport to improve team efficiency, I think that is not really true...
            In theory they sound great, but communication in a style similar to texting is pretty inefficient.
            Worse yet, notifications are a huge productivity killer; every time you receive a notification it pulls you out of what you are doing, and it takes time to get back to up and running.
        </p>

        <p class='p-wide p-text'>
            Ultimately, I think we did a poor job of finding a way for everyone to work on something.
            At first we tried specializing, and that didn't work all that well, due to our erratic student schedules.
            Often, we ended up getting bottlenecked by one another's schedules.
            There was one thing I found worked though, and it has yet to let me down...
            <a class='p-link' href='https://en.wikipedia.org/wiki/Pair_programming'>pair programming</a>.
        </p>

        <p class='p-thin p-note'>
            I am a huge fan of pair programming, as it allows two people to work on literally the same thing.
            I find it often reduces stress and improves quality of work while increasing speed.
        </p>

        <p class='p-wide p-text'>
            I think another mistake on our part was we picked tools that were becoming popular in the industry, as opposed to the ones we thought would be the easiest to learn.
            This had the effect of making me learn more, but it also made our product suffer.
        </p>

        <p class='p-wide p-text'>
            <strong>By the end we had to learn how to use:</strong>
        </p>
        <ul class='p-wide p-list'>
            <li>JavaScript</li>
            <li>SCSS <span class='p-note'>and later stylus</span></li>
            <li>
                <a class='p-link' href="https://vuejs.org">Vue.js</a>
                <ul class='p-list'>
                    <li>Vue Router</li>
                    <li>VueX</li>
                    <li>Veutify</li>
                </ul>
            </li>
            <li>SFU's Auth system</li>
            <li>
                <a class='p-link' href="https://www.playframework.com">Play Framework</a>
                <ul class='p-list'>
                    <li>EBean</li>
                    <li>Jackson</li>
                    <li>Play Router</li>
                </ul>
            </li>
        </ul>

        <p class='p-wide p-text'>
            Moreover, we learned all of those things in four months, while trying to figure out what our client actually wanted us to do... and each of us were taking other classes.
            So, was it really a failure?
            Yes, I think so... but that is okay; I definitely learned from it and that is what school is for.
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
      'v-carousel': Carousel
  }
});
</script>