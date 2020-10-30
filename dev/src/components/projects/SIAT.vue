<template>
<project-template name='SIAT'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            While I am definitely better at computer science than I am at design,
            I did originally come to university for design.
            One of my bachelor's of science from
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>,
            is in design from the School of Interactive Arts and Technology (SIAT).
        </p>

        <p class='p-thin p-note'>
            I have a page about my other major,
            <router-link class='p-link' exact to='/projects/sosy'>Software Systems</router-link>,
            as well.
        </p>


        <p class='p-wide p-text'>
            If you are interested, check out the
            <a class='p-link' href='http://www.sfu.ca/students/calendar/2018/summer/programs/interactive-arts-and-technology/major/bachelor-of-arts.html'>curriculum<i class='fas fa-graduation-cap p-icon'/></a>
        </p>
    </template>

    <template slot='what'>
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
            Though that was not all I did!
            I think some of the greatest experiences I had had in SIAT are from the team projects I have been a part of.
            Most classes have team projects, and often people have very different skill sets.
            Figuring out who should work on what, and then having everyone get their nose to the grindstone until a project comes together is a fulfulling experience.
        </p>

        <p class='p-wide p-text'>
            Mind you team projects don't always work like that, sometimes you get teams that are comprised at least partially of people that have no intention of doing work.
            Finding ways to deal with those situations and still pull a project together is also a powerful experience.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I think it is really important to consider the user when making anything.
            While it is great to be able to implement something, it is critical that users like what you create, and know how to use it.
            Without that, there is no reason someone should use what you make.
            Your products should fill a niche, not make users hate their lives.
        </p>
        <p class='p-wide p-text'>
            One thing I really like about SIAT which I don't like about SoSy is how much more emphasis is placed on requirements gathering.
            Many classes in my SIAT degree have focused on how to figure out what a user wants, while only one or two computer science classes I have taken even consider this.
            That is why I took part in both degree programs.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            To get through SIAT I had to be willing to take on any challenge, even if I was unfamiliar with the field.
            That is right up my alley, because I actually like being wrong about things, and thus learning about something I didn't previously know about.
            SIAT has mostly been an exercise in doing exactly what I like doing, learning outside of my comfort zone.
            All I really felt I had to do is listen when people tell me I am wrong, and find solutions to the things I am doing wrong.
            It is actually pretty simple.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "SIAT",
  components: {
      'project-template': ProjectTemplate,
  }
});
</script>
