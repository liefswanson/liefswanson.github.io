<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            I Play Video Games
        </h1>

        <p class='p-wide p-text'>
            One of the things that actually got me interested in software development and user-centric design is video games.
            I am a sucker for a game that makes me think, or has a story capable of true escapism.
        </p>

        <p class='p-wide p-text'>
            I don't think I would have ever gone into design and software development if I hadn't been inspired by the amazing games people have made.
            Every once in a while, a game really just captivates me.
            I only hope that some of the things I make in the future can captivate imaginations to the same degree.
        </p>

        <p class='p-wide p-text'>
            Video games are an incredible medium with tons of untapped potential.
            I really look forward to seeing what new things get pioneered through it... or for it... in the future.
        </p>

        <v-carousel class='p-image p-wide-grow'
                    relative='/static/video-games/'
                    :init="[
                        'witcher3.jpg',
                        'grimdawn.jpg',
                        'shogun2.jpg',
                        'titans.jpg',
                        'kotor2.jpg',
                        'borderlands.jpg',
                        'generals.jpg',
                        'infamous.jpg',
                        'guildwars.jpg',
                        'shadow.jpg',
                        'minecraft.jpg',
                        'burnout.jpg',
                        'gta.jpg'
                    ]"/>

        <p class='p-thin-grow p-note'>
            Here are some of the games that really captured my imagination, either for their story, social aspects, and/or their incredible brain-engaging mechanics.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'AudioBooks',
    components: {
        'v-carousel': Carousel
    }
});
</script>
