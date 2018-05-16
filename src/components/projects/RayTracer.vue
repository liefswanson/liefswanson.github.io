<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            Implementing a Ray Tracer
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://github.com/liefswanson/raycast'>My GitHub<i class='p-icon fab fa-github'/></v-link>
        </p>

        <p class='p-wide p-text'>
            In a class about computer graphics I took for my
            <v-link local to='/static/projects/sosy'>Software Systems degree</v-link>
            I built a ray tracer from scratch.
            While it isn't exactly what one would call fully featured, it is pretty cool!
            It can do a lot of things:
        </p>

        <p class='p-thin p-note'>
            Ray tracers cool in theory, and even in practice.
            It is a shame that hardware specialized for ray tracing is lagging so far behind that for raster graphics.
        </p>

        <ul class='p-wide p-list'>
            <li>anti aliasing <span class='p-note'>with ray direction randomization to reduce artifacting</span></li>
            <li>reflect</li>
            <li>render spheres</li>
            <li>render checkered planes</li>
            <li>phong shading <span class='p-note'>ambient, diffuse, and specular</span></li>
            <li>bring my processor to its knees</li>
        </ul>

        <p class='p-wide p-text'>
            Unfortunately, I never implemented:
        </p>

        <ul class='p-wide p-list'>
            <li>refraction</li>
            <li>triangles</li>
            <li>multiple light sources</li>
            <li>any acceleration structures</li>
        </ul>

        <p class='p-wide p-text'>
            But just look at how nice the renders look anyway!
        </p>

        <img src="/static/ray-tracer/thumb.png"
             alt="render from my tracer"
             class='p-full p-image'>

        <p class='p-wide p-text'>
            This is one of those assignments I learned a great deal from, and plan to tackle again some time in the future.
            I have some really great ideas for where I can take it.
            Ideally, I think I would make it so that a scene could be read and exported as json, or some other similar format.
            I would want to do this so I could share the scene for distributed rendering!
            Then, I would open a bunch of connections to the different rendering delegates from a simple UI, randomize the order rays are being rendered in, and let the results come back in real time.
            I think it would be really cool to watch the scene render in slowly as speckles come to life in the scene.
        </p>

        <p class='p-thin p-note'>
            Maybe I just watch too many videos of
            <v-link to='https://www.youtube.com/watch?v=NuSER0NszwM'>cool path tracers</v-link>...
        </p>

        <p class='p-wide p-text'>
            One of the things I thought would be really cool about this, is it would be possible to implement the actual renderers differently as long as they followed a simple API.
            It could be possible to have a bunch of different computers all running different software take requests one pixel at a time and send back the results in real time.
        </p>

        <p class='p-thin p-note'>
            Would that cost a ridiculous amount of bandwidth? Probably Yes, but it also sounds so cool.
            Maybe utilizing
            <v-link to='http://zeromq.org/'>zeromq</v-link> would be a better bet than using sockets and sending json through them.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'HDR',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
