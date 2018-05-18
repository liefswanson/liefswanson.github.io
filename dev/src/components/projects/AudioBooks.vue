<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            I Listen to a lot of Audio Books
        </h1>

        <p class='p-wide p-text'>
            I don't read that much, mostly because I have dyslexia and as such find it a bit exhausting.
            It takes me a while longer to read things than most people, and I can often get stuck reading words without actually processing what they mean.
            Because I am not one for inefficiency, but want to know about things people took the time to write down, I listen to audio books!
        </p>

        <p class='p-wide p-text'>
            For the most part I listen to non-fiction books.
            History, biographies, and anything genuinely informational are what I usually go for.
        </p>

        <div class='p-fill-row'></div>

        <v-carousel class='p-image p-mid-grow'
                    relative='/static/audio-books/'
                    :init="[
                        '6glasses.jpg',
                        'algorithms.jpg',
                        'atlas.jpg',
                        'marx.jpg',
                        'chomsky.jpg',
                        'etymologicon.jpg',
                        'genghis.jpg',
                        '5rings.jpg',
                        'hat.jpg',
                        'irrational.jpg',
                        'misbehaving.jpg',
                        '1984.jpg',
                        'pinker.jpg',
                        'plex.jpg',
                        'random.jpg',
                        'batman.jpg',
                        'scrum.jpg',
                        'snow.jpg',
                        'social.jpg',
                        'super.jpg',
                        'everything.jpg'
                    ]"/>

        <p class='p-thin-grow p-note'>
            They say you can't judge a book by its cover, but we can try can't we?
            Take a look at the covers of a few books I have listened to.
            I didn't enjoy all of them, but I do think every one of them is worth listening to.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'AudioBooks',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
