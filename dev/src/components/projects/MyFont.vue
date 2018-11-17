<template>
<project-template name='MyFont'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I designed my own geometric style font.
            While I don't really consider myself a typographer, I do consider myself a typography snob and a designer, so I had to try my hand at it.
            I actually used the font I am talking about in this project for the logo of my name in the top right.
        </p>

        <p class='p-note p-thin'>
            If you are unfamiliar with typography, I recommend watching
            <a class='p-link' href='https://www.imdb.com/title/tt0847817/'>Helvetica</a>,
            a great documentary which talks a little about the work that goes into making a font, as well as the significance Helvetica has in our world.
        </p>

        <p class='p-wide p-text'>
            You can find it on <a class='p-link' href='https://github.com/liefswanson/phibonacci'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I came up with the design constraints and designed every currently available glyph in my font Phibonacci.
            By design constraints, I mean that every measurement in the font strictly matches a measurement from the Fibonacci sequence.
            Why? Well I like math and design hence it was inevitable I would design something around the
            <a class='p-link' href='https://en.wikipedia.org/wiki/Golden_ratio#Golden_ratio_conjugate'>Golden Ratio</a>.
        </p>

        <p class='p-thin p-note'>
            Many people that like the golden ratio don't know it isn't the only
            <a class='p-link' href='https://www.youtube.com/watch?v=7lRgeTmxnlg'>metalic ratio</a>.
            The link provided is to a video all about the metalic ratios, by a very mathy youtube channel.
        </p>

        <figure class='p-mid-grow'>
            <v-carousel class='p-image'
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
        <figcaption class='p-note separate'>
            This is just a sampling of the glyphs I have made.
        </figcaption>
        </figure>

    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I wanted a geometric style font that was open source, and had many weights.
            I really like
            <a class='p-link' href="https://github.com/googlefonts/comfortaa">Comfortaa</a>,
            but last I checked it only has 3 weights.
        </p>

        <p class='p-thin p-note'>
            You may have noticed that I use Comfortaa on this site.
            It is in the navbar and the header elements.
        </p>

        <p class='p-wide p-text'>
            Comfortaa also lacks one thing that I wanted out of Phibonacci.
            Comfortaa, like most fonts, makes very slight adjustments to compensate for optical illusions humans are prone to seeing in text.
            These adjustments can become very apparent when the text is scaled up past a certain point.
            This effect gets amplified if the font is very thin, so I designed Phibonacci to intentionally not adjust for the little quirks of human perception.
            Phibonacci isn't really designed for swaths of text, but rather as a starting point to build logos around.
        </p>

        <p class='p-thin p-note'>
            If you want to know more about the sorts of things typographers do to adjust for the awkwardness of human vision you can see some examples in the
            <a class='p-link' href="http://designwithfontforge.com/en-US/Trusting_Your_Eyes.html">Fontforge documentation</a>.
        </p>

        <p class='p-wide p-text'>
            Currently, the font is not complete at any weight, but that is just because I only design the glyphs I need when I need them.
            If someone else wants to expand upon it, they can be my guest!
        </p>

    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            I don't have access to many of the tools professional font designers use on a daily basis, so I turned to the open-source world.
            It turns out there is this really cool font design tool, that I mention in an earlier sidenote,
            <a class='p-link' href='https://fontforge.github.io'>FontForge</a>
            and it is surprisingly powerful.
        </p>

        <p class='p-wide p-text'>
            The thing with designing a font is it requires time, patience, determination, and a consistent vision... even within the context of design where these virtues are staples.
            Fonts are a lot of work, and they often involve scrapping ideas.
            Phibonacci went through 4 iterations that I completely scrapped before uploading the current version to github... and many had more glyphs completed than the current one, but there are thousands of fonts that I dislike and never intend to use.
            There are far fewer fonts out there that I would consider using.
        </p>

        <p class='p-wide p-text'>
            After the last scrapping of Phibonacci, I relaxed the design constraint of always following the Fibonnaci sequence with every measurement.
            I still make every measurement contain a Fibonacci number, but as you might have noticed with the letter "n", I don't force the measurement to be between the same two lines every time.
        </p>

    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "MyFont",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>
