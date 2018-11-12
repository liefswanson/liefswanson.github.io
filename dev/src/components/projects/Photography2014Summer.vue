<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Taking Photos in the Summer Time
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <a class='p-link' href='https://www.flickr.com/photos/124866205@N05/albums/72157645984109166'>My Flickr<i class='p-icon fab fa-flickr'/></a>
        </p>

        <p class='p-wide p-text'>
            A while ago, I took a photography class as part of my
            <router-link class='p-link' exact to='/projects/siat'>SIAT degree</router-link>
            at SFU.
            It was a great opportunity to make use of my DSLR.
            I don't get excuses to do photography that often, but I really enjoy it... and I even think my photography isn't half bad!
            I don't think I am quite at the level of being a photographer as my day job, but it has come in really handy whenever I need photos and can't find what I am looking for.
            It is like any skill; being able to do it yourself is valuable.
        </p>

        <v-carousel class='p-image p-wide-grow'
                    relative='/static/photography-2014-summer/'
                    :init="[
                        'thumb.jpg',
                        'fern.jpg',
                        'building.jpg',
                        'flower.jpg',
                        'gun.jpg'
                    ]"/>

        <p class='p-note p-thin-grow'>
            These are just a sample of the photos I took during the class, I also take photos in my own time. However, I rarely seem to have the time to do the post processing required to make them really pop, and if I do, they are usually for someone else. As such I don't usually post them.
        </p>

        <p class='p-wide p-text'>
            The class itself was pretty interesting.
            Our teacher was a fashion photographer who had been working for various magazines for the better part of her life.
            Most of the things she taught us were things she uses regularly.
            It is surprising how far you can get on a handful of very simple techniques.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/util/Carousel.vue';


export default Vue.extend({
    name: 'Photography2014Summer',
    components : {
        'v-carousel': Carousel

    }
});
</script>
