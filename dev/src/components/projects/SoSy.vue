<template>
<project-template name='SoSy'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            One of my bachelor's of science from
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>
            was in Computer Science, with a focus on Software Systems.
            In it I learned about the theory and practice of designing software and manipulating computers.
        </p>

        <p class='p-wide p-text'>
            If you want, you can check out the
            <a class='p-link' href='http://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems/curriculum.html'>Curriculum<i class='fas fa-graduation-cap p-icon'/>
            </a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            Software Systems is like the applied version of computing science.
            At SFU both are offered, but I took Software Systems because I wanted to have more experience actually making software!
            I am actually pretty good at computing science theory, and have taken some interesting courses in it.
            However, I find I am more interested in making things that people want to use than anything else.
        </p>

        <p class='p-thin p-note'>
            I chose Software Systems for that exact reason.
            When I first came to SFU, I actually came for my other major.
            I didn't even know that programming existed;
            I had no concept of what programming even was.
            However, in first year I was required to take a computing science course in Python as part of my other major
            <router-link exact to='/projects/siat'>SIAT</router-link>.
        </p>

        <p class='p-wide p-text'>
            Here is an <b>incomplete</b> list of the topics I have studied in my SoSy degree:
        </p>

        <ul class='p-wide p-list'>
            <li>Computational complexity <span class='p-note'>and algorithm analysis</span></li>
            <li>Computational geometry</li>
            <li>Compilers
                <span class='p-note'>which you can see
                    <router-link class='p-link' exact to='/static/projects/writing-a-compiler'>here</router-link>
                </span>
            </li>
            <li>Graphics
                <ul class='p-list'>
                    <li>
                        Raster graphics and
                        <router-link class='p-link' exact to='/projects/tetris'>writing a game in openGL</router-link>
                    </li>
                    <li>
                        <router-link class='p-link' exact to='/projects/ray-tracer'>Implementing a ray tracer</router-link>
                    </li>
                </ul>
            </li>
            <li>Design patterns</li>
            <li>Data Structures</li>
            <li>Databases</li>
            <li>Object oriented programming</li>
            <li>Functional programming</li>
            <li>Networking</li>
            <li>
                Algorithms for:
                <ul class='p-list'>
                    <li>Compression</li>
                    <li>Media manipulation</li>
                    <li>Dynamic Programming</li>
                    <li>Sorting</li>
                    <li>Pathfinding</li>
                    <li>NP Hard problems</li>
                    <li>Geometry problems</li>
                </ul>
            </li>
            <li>Operating systems</li>
            <li>Quality assurance</li>
            <li>Logic circuits</li>
            <li>Technical writing</li>
            <li>Requirements gathering</li>
        </ul>

        <p class='p-thin p-note'>
            More importantly though, I think the best part of being at SFU has been the people that I have met.
            Many of them introduced me to things I didn't even know existed.
            The classes are fine, but definitely the people have taught me more.
        </p>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            Computer science has been a window into many other fields for me.
            Many of the best things in computer science were taken unapologetically from other disciplines.
            That sort of willingness to learn from other fields fits the way I view the world quite well.
        </p>
        <p class='p-text p-wide'>
            I think that I found the job that I most enjoy in software engineering... I honestly can't stop nerding out about it.
            I am also found of many other fields, but the nice thing about software engineering is it is a means to many ends.
            The ability to manipulate a computer to do what you want is an extraordinarily valuable skill, and I am glad to have spent the time discovering it.
            As I said, before my first semester of university, I had no concept of what went into making software so to me this degree was important... without it I may have never discovered software engineering.
        </p>
        <p class='p-note p-thin'>
            That is also what I like about design, design is also a means to many ends.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            Lots of perseverance.
            I think getting the hang of computer science was one of the hardest things I have ever done.
            I have always liked solving problems, but computer science and software development are on a different level to what I was accustom to before that point.
            Everything I had ever tackled before that point was easy to visualize, and I am primarily a visual thinker.
            Computer logic is not easy to visualize, at least I don't think so.
            It took a lot of work to get to the point that I felt thinking about my code was second nature.
        </p>
        <p class='p-text p-wide'>
            There are so many things that are counter-intuitive about computer science... even the math that sits at its backbone is counter-intuitive.
            I always found calculus and geometry to be easy to pick up, because I can <strong>see</strong> them.
            Discrete math, computer logic, and statistics are a different beast, in that they are inherently hard to visualize.
            I had to learn how to use my tools to aid my visual thinking processes, without that I would never have made it.
        </p>
    </template>
</project-template>
</template>


<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "SoSy",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>
