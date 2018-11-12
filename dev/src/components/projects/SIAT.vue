<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        School of Interactive Arts and Technology (SIAT) Undergrad at SFU
    </h1>

    <p class='p-wide p-highlight'>
        Check out the
        <a class='p-link' href='http://www.sfu.ca/students/calendar/2018/summer/programs/interactive-arts-and-technology/major/bachelor-of-arts.html'>Curriculum<i class='fas fa-graduation-cap p-icon'/>
        </a>
    </p>

    <p class='p-wide p-text'>
        While I am definitely better at computer science than I am at design,
        I did originally come to university for design.
        I also think it is really important to consider the user when making anything.
        While it is great to be able to implement something, it is critical that users like what you create, and know how to use it.
        Without that, there is no reason someone should use what you make.
        Your products should fill a niche, not make users hate their lives.
    </p>

    <p class='p-thin p-note'>
        I have a page about my other major,
        <router-link class='p-link' exact to='/projects/sosy'>SoSy</router-link>,
        as well.
    </p>

    <p class='p-wide p-text'>
        Here is an <b>incomplete</b> list of topics I have studied in my SIAT degree:
    </p>

    <ul class='p-wide p-list'>
        <li>Requirements gathering</li>
        <li>Graphic design</li>
        <li>Typography</li>
        <li>Interface design</li>
        <li>Sound design</li>
        <li>Information design</li>
        <li>User experience</li>
        <li>Material design</li>
        <li>Game design</li>
        <li>Film</li>
        <li>Photography</li>
        <li>3D modelling <span class='p-note'>and some animation</span></li>
        <li>Architecture</li>
    </ul>

    <p class='p-wide p-text'>
        One thing I really like about SIAT which I don't like about SoSy is how much more emphasis is placed on requirements gather.
        Many classes in my SIAT degree have focused on how to figure out what a user wants, while only one or two computer science classes I have taken even consider this.
    </p>

    <p class='p-thin p-note'>
        That is why I am a part of both degree programs.
    </p>

</article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SIAT',
    components: {
    }
});
</script>
