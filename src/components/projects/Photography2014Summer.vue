<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            Taking Photos in the Summer Time
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://www.flickr.com/photos/124866205@N05/albums/72157645984109166'>My Flickr<i class='p-icon fab fa-flickr'/></v-link>
        </p>

        <p class='p-wide p-text'>
            A while ago, I took a photography class as part of my
            <v-link local to='/projects/siat'>SIAT degree</v-link>
            at SFU.
            It was a great opportunity to make use of my DSLR.
            I don't get excuses to do photography that often, but I really enjoy it... and I even think my photography isn't half bad!
            I don't think I am quite at the level of being a photographer as my day job, but it has come in really handy whenever I need photos and can't find what I am looking for.
            It is like any skill, being able to do it yourself is valuable!
        </p>

        <v-carousel class='p-image p-wide-grow'
                 relative='/static/photography-2014-summer/'
                 :images="
                 [
                    'thumb.jpg',
                    'a.jpg',
                    'b.jpg',
                    'thumb.jpg',
                    'thumb.jpg',
                    'thumb.jpg',
                 ]"/>

        <p class='p-note p-thin-grow'>
            These are a sample of the photos I took during the class, I also take photos in my own time. However, I rarely seem to have the time to do the post processing required to make them really pop, and if I do, they are usually for someone else. As such I don't usually post them.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';


export default Vue.extend({
    name: 'WritingACompiler',
    components : {
        'v-link': Link,
        'v-carousel': Carousel

    }
});
</script>