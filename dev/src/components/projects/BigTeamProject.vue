<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        A Large Team Project for School
    </h1>

    <p class='p-wide p-text'>
        Anyone that has ever done a group project knows they can go pretty poorly.
        It is pretty common to get people that want to coast on your hard work.
        That was not the case here. People worked pretty hard, but I think we bit off more than we could chew...
    </p>

    <p class='p-thin p-note'>
        Unfortunately, the code is not on my GitHub. I may share it there eventually, but it isn't all that impressive.
        I think the experience is worth more than the resulting code.
    </p>

    <p class='p-wide p-text'>
        I think it is important to admit to the experiences you don't remember fondly.
        Often those experiences have much to teach.
        In this case, I learned a lot about how not to collaborate with a team of people.
        It is really easy to be ineffective in communication with other people, causing everyone to waste time.
    </p>

    <p class='p-wide p-text'>
        This assignment in particular was a software development project where we had an actual client.
        The client had a thing they wanted built, and we took their requirements, and tried to make them real.
        None of the requirements were known beforehand, and all the tasks were complex enough that we didn't really know how to effectively break them down so we could all work on them.
        The class wasn't just about how to write code, but also how to work with other people so that work gets done effectively.
    </p>

    <p class='p-thin p-note'>
        This is easily the hardest task in software development.
        Hence why we had a class in it.
        It is an infamous problem that has sunk more projects than anything else in the world of software.
        Check out a
        <a class='p-link' href='https://www.goodreads.com/book/show/19288230-scrum'>book</a>
        on this topic that I like very much.
    </p>

    <p class='p-wide p-text'>
        I think one of the things that was a mistake on our part was that we picked tools that were becoming popular in the industry, as opposed to the ones we thought would be the easiest to learn.
    </p>

    <p class='p-wide p-text'>
        By the end we had to learn how to use:
    </p>

    <ul class='p-wide p-list'>
        <li>JavaScript</li>
        <li>SCSS <span class='p-note'>and later stylus</span></li>
        <li>
            Vue
            <ul class='p-list'>
                <li>Vue Router</li>
                <li>VueX</li>
                <li>Veutify</li>
            </ul>
        </li>
        <li>SFU's Auth system</li>
        <li>
            Play Framework
            <ul class='p-list'>
                <li>EBean</li>
                <li>Jackson</li>
                <li>Play Router</li>
            </ul>
        </li>
    </ul>

    <p class='p-thin p-note'>
        Moreover, we learned all of those things in four months, while trying to figure out what our client actually wanted us to do... and each of us were taking other classes.
    </p>

    <p class='p-wide p-text'>
        I knew more than most about these things, as none of them are things you would likely come across in lower division computer science classes.
        Computer Science tends to be more focused on the theory, and at SFU the languages focused on most are C++ and Java.
    </p>

    <p class='p-wide p-text'>
        Ultimately, I think we did a poor job of finding a way for everyone to work on something.
        At first we tried specializing, and that didn't work all that well, due to our erratic student schedules.
        Often we ended up getting bottlenecked by other peoples' schedules.
        There was one thing I found worked though, and it has yet to let me down...
        <a class='p-link' href='https://en.wikipedia.org/wiki/Pair_programming'>pair programming</a>.
    </p>

    <p class='p-thin p-note'>
        I am a huge fan of pair programming, as it allows two people to work on literally the same thing.
        I find it often reduces stress and improves quality of work while increasing speed.
    </p>

    <p class='p-wide p-text'>
        In the end it was a good experience that I learned a great deal from.
        I ended up using a lot of the skills I learned out of necessity during that project here on this website you are looking at right now!
    </p>
</article>
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