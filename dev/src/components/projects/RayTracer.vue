<template>
<project-template name='RayTracer'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            In a class about computer graphics I took for my
            <router-link class='p-link' exact to='/projects/sosy'>Software Systems degree</router-link>
            I built a ray tracer from scratch.
        </p>

        <p class='p-text p-wide'>
            You can find the code on
            <a class='p-link' href='https://github.com/liefswanson/raycast'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            My job was to make a ray tracer that could:
        </p>
        <ul class='p-wide p-list'>
            <li>apply anti aliasing <span class='p-note'>with ray direction randomization to reduce artifacting</span></li>
            <li>apply reflections</li>
            <li>render spheres</li>
            <li>render checkered planes</li>
            <li>Phong shading <span class='p-note'>ambient, diffuse, and specular</span></li>
            <li>bring my processor to its knees</li>
        </ul>

        <p class='p-wide p-text'>
            Unfortunately, I didn't implement all the optional features:
        </p>
        <ul class='p-wide p-list'>
            <li>refraction</li>
            <li>triangles</li>
            <li>multiple light sources</li>
            <li>any acceleration structures</li>
        </ul>



        <figure class='p-wide'>
            <prealloc class='p-image'
                      :img="{
                                path: '/static/ray-tracer/thumb.jpg',
                                alt: 'a render from my ray tracer',
                                width: 624,
                                height: 351
                            }"/>
            <figcaption class='p-note'>
                ... but just look how pretty that render is!
            </figcaption>
        </figure>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            I think the biggest thing that I learned from this project was how not to write C++.
            I don't find C++ to be a particularly hard language, but I definitely went the wrong way about writing this program.
            It was just small enough that I thought I could get away with bad software development practices, and I sort of did, but it was not a fun experience!
        </p>

        <p class='p-note p-thin'>
            This project was not the only thing I wrote in C++ for this class, I also wrote a very strange version of tetris.
        </p>

        <p class='p-wide p-text'>
            While I did well on the project in terms of marks, I still consider it a failure on my part... but that isn't a bad thing.
            There are few things that can help one learn faster than failure, and while my marks did not reflect failure, the effort to pay off sure felt like failure!
        </p>

        <p class='p-text p-wide'>
            Without projects like this, were I barely made it out by the skin of my teeth, I don't think I would spent so much time teaching myself how to write code that I could understand years later if I had to.
        </p>

        <p class='p-wide p-text'>
            Another reason I like this project was it taught me a fair amount about building C++ projects.
            I familiarized myself with a handful of build tools, because it was my first time developing C++ outside of Visual Studio.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            Honestly, this assignment was done mostly through brute force.
            In the time since completing this project, I have become a much lazier developer... in a good way, let me explain!
            I do everything in a way that lets me be lazy about fixing things later, rather than working so hard to find where bugs are.
        </p>

        <p class='p-text p-wide'>
            Everything in this assignment required lots and lots of testing, but I did so much of the testing manually... when I never should have.
            It wasn't obvious to me at the time that so much of the testing could be automated, but now it is pretty clear.
            It is very difficult to imagine a 3D space that you don't even get to view until a few hundred lines of code in.
            Better testing practices would have mitigated this pain a great deal.
        </p>

    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";
import PreallocatedImage from '@/scripts/main/PreallocatedImage';
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

export default Vue.extend({
  name: "RayTracer",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel,
      'prealloc': PreallocatedImageVue
  }
});
</script>
