<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Implementing a Ray Tracer
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <a class='p-link' href='https://github.com/liefswanson/raycast'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>

        <p class='p-wide p-text'>
            In a class about computer graphics I took for my
            <router-link class='p-link' exact to='/projects/sosy'>Software Systems degree</router-link>
            I built a ray tracer from scratch.
            While it isn't exactly what one would call fully featured, it is pretty cool!
            It can do a lot of things:
        </p>

        <p class='p-thin p-note'>
            Ray tracers are cool in theory, and even in practice.
            It is a shame that hardware specialized for ray tracing is lagging so far behind that for raster graphics.
        </p>

        <ul class='p-wide p-list'>
            <li>anti aliasing <span class='p-note'>with ray direction randomization to reduce artifacting</span></li>
            <li>reflect</li>
            <li>render spheres</li>
            <li>render checkered planes</li>
            <li>Phong shading <span class='p-note'>ambient, diffuse, and specular</span></li>
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
            But just look at how nice the renders look!
        </p>

        <img src="/static/ray-tracer/thumb.png"
             alt="render from my tracer"
             class='p-full p-image'>

        <p class='p-wide p-text'>
            This is one of those assignments I learned a great deal from, and plan to tackle again some time in the future.
            I have some really great ideas for where I can take it.
            Ideally, I think I would make it so that a scene could be read and exported as JSON, or some other similar format.
            I would want to do this so I could share the scene for distributed rendering!
            Then, I would open a bunch of connections to the different rendering delegates from a simple UI, randomize the order rays are being rendered in, and let the results come back in real time.
            I think it would be really cool to watch the scene render in slowly as speckles come to life in the scene.
        </p>

        <p class='p-thin p-note'>
            Maybe I just watch too many videos of
            <a class='p-link' href='https://www.youtube.com/watch?v=NuSER0NszwM'>cool path tracers</a>...
        </p>

        <p class='p-wide p-text'>
            One of the things I thought would be really cool about this, is it would be possible to implement the actual renderers differently as long as they followed a simple API.
            It could be possible to have a bunch of different computers all running different software take requests one pixel at a time and send back the results in real time.
        </p>

        <p class='p-thin p-note'>
            Would that cost a ridiculous amount of bandwidth? Yes, probably, but it also sounds so cool.
            Maybe utilizing
            <a class='p-link' href='http://zeromq.org/'>ZeroMQ</a> would be a better bet than using sockets and sending JSON through them.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'HDR',
    components: {
        'v-carousel': Carousel
    }
});
</script>
