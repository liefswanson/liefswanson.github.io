<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        Software Systems (SoSy) Undergrad at SFU
    </h1>

    <p class='p-wide p-highlight'>
        Check out the
        <a class='p-link' href='http://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems/curriculum.html'>Curriculum<i class='fas fa-graduation-cap p-icon'/>
        </a>
    </p>

    <p class='p-wide p-text'>
        Software Systems is like the applied version of computing science.
        At SFU both are offered, but I took Software Systems because I wanted to have more experience actually making software!
        I am actually pretty good at computing science theory, and have taken some interesting courses in it.
        However, I find I am more interested in making things that people want to use than anything else.
    </p>

    <p class='p-wide p-text'>
        I chose Software Systems for that exact reason.
        When I first came to SFU, I actually came for my other major.
        I didn't even know that programming existed.
        I had no concept of what programming even was.
        However, in first year I was required to take a course in Python as part of my other major
        <router-link exact to='/projects/siat'>SIAT</router-link>.
    </p>

    <p class='p-wide p-text'>
        It quickly dawned on me that if I wanted to go to school for design, I should probably also learn how to implement the things I wanted to design.
        So, I went into a double major.
        I haven't regretted it at all.
    </p>

    <p class='p-wide p-text'>
        Here is an <b>incomplete</b> list of the topics I have studied in my SoSy degree:
    </p>

    <ul class='p-wide p-list'>
        <li>Computational complexity <span class='p-note'>and algorithm analysis</span></li>
        <li>Computational geometry</li>
        <li>Compilers
            <span class='p-note'>which you can see
                <router-link exact to='/static/projects/writing-a-compiler'>here</router-link>
            </span>
        </li>
        <li>Graphics</li>
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
        <li>Hardware design</li>
        <li>Technical writing</li>
        <li>Requirements gathering</li>
    </ul>

    <p class='p-thin p-note'>
        More importantly though, I think the best part of being at SFU has been the people that I have met.
        Many of them introduced me to things I didn't even know existed.
        The classes are fine, but definitely the people have taught me more.
    </p>

</article>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SoSy',
    components: {
    }
});
</script>
