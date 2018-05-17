<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        This Portfolio You are Currently Viewing
    </h1>

    <p class='p-wide p-highlight'>
        Check it out on
        <v-link to='https://github.com/liefswanson/liefswanson.github.io'>My GitHub<i class='p-icon fab fa-github'/></v-link>
    </p>

    <p class='p-wide p-text'>
        This portfolio is itself a portfolio piece.
        I spent a lot of time researching many different things to make this website
    </p>

    <ul class='p-wide p-list'>
        <li>Vue</li>
        <li>TypeScript</li>
        <li>Webpack</li>
        <li>SCSS</li>
        <li>CSS flex</li>
        <li>CSS grid</li>
        <li>Lot of other things...</li>
    </ul>

    <p class='p-thin p-note'>
        This wasn't my first time using most of these, but it was the first time I got the chance to really delve into them.
        This was my 3rd time writing a responsive website.
    </p>

    <p class='p-wide p-text'>
        This website does have some pretty cool features which I want to point out just in case you didn't notice.
    </p>

    <ul class='p-wide p-list'>
        <li>
            The primary colour changes dynamically
            <ul class='p-list'>
                <li>text highlighting</li>
                <li>color of my name</li>
                <li>primary colour inherited by text</li>
                <li>
                    the <b>favicon</b>
                    <span class='p-note'>as long as your browser's image cache plays nice</span>
                </li>
            </ul>
        </li>
        <li>
            The header and nav bar can hide
            <span class='p-note'>freeing up screen real estate while reading</span>
        </li>
        <li>You can use touch gestures,
            via <v-link to='https://www.npmjs.com/package/vue2-touch-events'>vue2-touch-events</v-link>,
            to open and close the nav bar</li>
        <li>The entire website is a single page app</li>
        <li>
            I wrote my own
            <ul class='p-list'>
                <li>variable height collapsible divs</li>
                <li>
                    custom
                    <v-link to='https://masonry.desandro.com/'>masonry</v-link> style layout
                </li>
                <li>image carousel</li>
                <li>media queries <span class='p-note'>in both SCSS and TypeScript</span></li>
                <li>Sticky ribbon and automatically hiding header</li>
            </ul>
        </li>
        <li>The site makes use of inline svgs and font-awesome</li>
        <li>I have custom fonts loaded from the google font library</li>
        <li>
            The pdf of my resume displays in page via
            <v-link to='https://github.com/mozilla/pdf.js'>pdfjs</v-link>
        </li>
    </ul>


    <v-carousel class='p-mid-incremental p-image'
                relative='/static/recursive-plug/'
                :init="[
                    'thumb.svg',
                    'orange.svg',
                    'blue.svg',
                    'pink.svg',
                    'green.svg',
                    'red.svg'
                ]"/>

    <p class='p-thin-grow p-note p-push-right'>
        It isn't perfect, but it is a pretty nice image carousel for my first attempt right?
        <br/>
        <br/>
        Also the logos arent bad!
        Maybe a bit hyperbolic, but they still look pretty good I think... and they are definitely recognizable.
    </p>

    <p class='p-wide p-text'>
        I did make a few concessions with my design decisions.
        The entire website is static, not because I don't know how to use a website backend, but because I didn't want to pay for hosting.
        GitHub will provide free static hosting and you can even use a custom domain name.
        I also ended up doing some strange things in the source to accomodate the design changing of having a dynamic primary colour.
    </p>

    <p class='p-thin p-note'>
        Such as dynamically updating a style tag and link tag in the website header.
    </p>

</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'ProjectEuler',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>