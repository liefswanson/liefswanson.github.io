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
            For a class in photography in my
            <router-link exact to='/projects/siat'>Interactive Technology degree</router-link>
            I was given a project where I had to put together an album of my best work from the class, while improving on each piece.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>
        <p class='p-wide p-text'>
            I was both the photographer and photo editor.
            The goal was to create a diverse set of photos, touching at least briefly on every topic from the class.
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

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>
        <p class='p-text p-wide'>
            It is not often that I am put in a situation to use only my creative visual art skills.
            This project filled that niche, allowing me to focus only on the quality of the art, and not how it had to fit into a larger project.
            The only other times I get to do something like that is in my own spare time, when art has to compete with all the other things I am interested in.
        </p>

        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>
        <p class='p-text p-wide'>
            There were many considerations that went into every photo, but every photo had its own constraints.
        </p>
        <p class='p-text p-wide'>
            Usually when I look to do a photograph there are two ways I go about it.

        </p>
        <p class='p-text p-wide'>
            I start with a subject I find naturally and build an idea around it
        </p>
        <img src='/static/photography-2014-summer/reflect.jpg'
             alt='bright reflection of nature in a pond'
             class='p-wide p-image'>
        <p class='p-text p-wide'>
            I start with an idea and go out searching for a subject
        </p>
        <img src='/static/photography-2014-summer/abuse.jpg'
             alt='dark image of domestic abuse'
             class='p-wide p-image'>

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
