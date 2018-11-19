<template>
<project-template name='AudioBooks'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I don't read that much, mostly because I have dyslexia and as such find it a bit exhausting.
            It takes me a while longer to read things than most people, and I can often get stuck reading words without actually processing what they mean.
            Because I am not one for inefficiency, but want to know about things people took the time to write down, I listen to audio books!
        </p>

        <p class='p-wide p-text'>
            For the most part I listen to non-fiction books.
            History, biographies, and anything genuinely informational are what I usually go for.
        </p>

        <figure class='p-mid-grow'>
            <v-carousel class='p-image'
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
            <figcaption class='p-note'>
                They say you can't judge a book by its cover, but we can try can't we?
                Take a look at the covers of a few books I have listened to.
                I didn't enjoy all of them, but I do think every one of them is worth listening to.
            </figcaption>
        </figure>

    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            Listening as many interesting audiobooks as I can get my hands on, so that I can learn thing from many diverse perspectives.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            Some people might be confused why I would put this under my projects, but let me explain, I have a good reason.
        </p>

        <p class='p-wide p-text'>
            Everyone has curve balls that life throws at them.
            One of the ones thrown at me is being dyslexic in a world and profession dominated by text information.
        </p>

        <p class='p-wide p-text'>
            Some people take set backs as a reason to avoid something, but I think the fact I still do my best to engage with books in a the best way I have found despite being a slow reader shows I am not adverse to challenges.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            I commmuted to school for years, and my commute was roughly an hour long each way.
            That created plenty of time to listen to things.

        </p>

        <p class='p-wide p-text'>
            <strong>I had a few options for things to do on my commute:</strong>
        </p>
        <ul class='p-list p-wide'>
            <li>sit in silence</li>
            <li>listen to the same songs played in an order that maximizes profit on the radio</li>
            <li>listen to a list of songs I was in control of, and would then be tempted to control whenever the car was stopped</li>
            <li>listen to the news, which I already get more than enough exposure to</li>
            <li>listen to podcasts</li>
            <li>listen to audiobooks</li>
        </ul>

        <p class='p-wide p-text'>
            To me the the choice is obvious there.
            Podcasts and audiobooks are the only things on that list that are really going to teach me things.
            So for me, it made perfect sense to fill the time with either podcasts or audiobooks, and honestly it is easier to find good informative books than informative podcasts.
        </p>

        <p class='p-wide p-text'>
            I also got into the habit of listening for a little while before bed, as it doesn't need to involve a screen, just the audio, so I find it easier to unwind to.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "AudioBooks",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>