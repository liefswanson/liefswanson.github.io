<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            Implementing HDR Instead of Just Using It
        </h1>


        <p class='p-wide p-text'>
            For a class in Media Arts, for my
            <v-link local to='/static/projects/sosy'>Software Systems degree</v-link>
            I had to do some photo manipulation.
            It wasn't anything terribly difficult, just implementing our own spin on HDR.
            We weren't given any equations for how to make it work, we were told just to play it by ear.
            We also had to give justification for why we chose the algorithm we did.
        </p>

        <p class='p-wide p-text'>
            I found this assignment pretty interesting, because I actually use HDR from time to time in my photography.
            Unfortunately, I never got permission to share my solution to this assignment online.
            Instead, I will just show some of the results...
        </p>

        <p class='p-note p-thin'>
            Oh Also... while we are on the topic of photography don't forget to check out
            <v-link to='https://www.flickr.com/photos/124866205@N05/albums/72157645984109166'>My Flickr</v-link>
        </p>

        <p class='p-wide p-text'>
            Before I can do that though, I need to show you what I was working with.
            Below you will find the three images I used while implementing my own HDR algorithm.
            To my understanding, these are the "traditional" set of images used when testing HDR.
        </p>

        <p class='p-thin p-note'>
            Actually, that is only partly true, one is missing from the set we were given in class!
            You can see if you check out the
            <v-link to='https://en.wikipedia.org/wiki/High-dynamic-range_imaging#HDR_processing'>Wikipedia article</v-link>.
        </p>

        <img src='/static/hdr/dark.png'
             alt='dark'
             class='p-thin-grow p-image'>

        <img src='/static/hdr/med.png'
             alt='medium'
             class='p-thin-grow p-image'>


        <img src='/static/hdr/light.png'
             alt='light'
             class='p-thin-grow p-image'>

        <p class='p-wide p-text'>
            The main challenge here was not so much reading in the images. That part is pretty straight forward.
            We were working in Java, and as anyone will tell you, there are a lot of things the Java standard library can do.
            Certainly there are also a lot of things it can't do... but that aside, it does have the ability to read JPEGs, and that is the thing I cared about.
        </p>

        <p class='p-wide p-text'>
            The big problem was trying to get an equation that would map the 3 exposures well to some kind of happy middle ground of all the exposures.
            Below you can see some of the stages I went through trying to make it work, as well as what I settled on.
        </p>

        <v-carousel class='p-image p-wide-grow'
                    relative='/static/hdr/'
                    :init="[
                        '1.png',
                        '2.png',
                        'thumb.png',
                    ]"/>

        <p class='p-note p-thin-grow'>
            That second one with the lightning bolt going through the sky is pretty cool hey?
            You can see a reverse effect in the one I finally went with, if you look closely enough.
            Those resulted from the equation I chose, it was a little to sharp near the average brightness value in the image.
            <br/>
            <br/>
            Those were pretty much impossible to get rid of without completely rethinking the custom equation I was using to weight the brightnesses of each image into the final one.
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


