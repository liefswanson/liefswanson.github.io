<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            My Own Font (WIP)
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://github.com/liefswanson/phibonacci'>My GitHub<i class='p-icon fab fa-github'/></v-link>
        </p>

        <p class='p-wide p-text'>
            I wouldn't consider myself a typographer, but I do really like typography.
            I find that most fonts don't scale up very well, making them sort of awkward in logos.
            This is actually intentional, as most fonts attempt to adjust for optical illusions, by applying the opposite effects.
            So, I have been working slowly but surely on my own Bauhaus style font, I even used some of the glyphs to make the logo for this website.
        </p>

        <p class='p-wide p-text'>
            I use an open source porgram called
            <v-link to='https://fontforge.github.io'>fontforge</v-link>
            to make the glyphs, and sometimes I use
            <v-link to='https://inkscape.org'>inkscape</v-link>
            to turn the glyphs into svgs if I want to style them a little.
            I did exactly that when making the svg used for my name in the top right.
            I considered making it the font itself, but that would require I build a webfont, and it would also mean I couldn't play with the kerning and details as easily.
            I wanted it to match the logo I put as the <v-link to='https://en.wikipedia.org/wiki/Favicon'>favicon</v-link>.
        </p>

        <p class='p-note p-thin'>
            If you are unfamiliar with typography I recommend watching
            <v-link to='https://www.imdb.com/title/tt0847817/'>Helvetica</v-link>
            A great documentary which talks a little about the work that goes into making a font, as well as the significance Helvetica has in our world.
        </p>

        <p class='p-text p-wide'>
            The motif I chose for this font was the Fibonacci sequence.
            I am a big math geek, so I thought I would go old school european and use only measurements which followed the golden ratio aka
            <v-link to='https://en.wikipedia.org/wiki/Golden_ratio#Golden_ratio_conjugate'>phi</v-link>
        </p>

        <p class='p-thin p-note'>
            Check out
            <v-link to='https://www.youtube.com/watch?v=7lRgeTmxnlg'>this video</v-link>
            about the metalic ratios, by a youtube channel I really like called Numberphile.
        </p>

        <v-carousel class='p-image p-wide-grow'
                    relative='/static/font/'
                    :init="[
                        'b.png',
                        'q.png',
                        'e.png',
                        'e2.png',
                        'f.png',
                        'f2.png',
                        't.png',
                        'u.png',
                        'big-s.png',
                    ]"/>

        <p class='p-thin-grow p-note'>
            These are just a few of the glyphs from two of the four weights of the font.
            As I said, the font is a long way off being finished, but in the end it will have four weights and cover at least all of ASCII.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'Font',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
