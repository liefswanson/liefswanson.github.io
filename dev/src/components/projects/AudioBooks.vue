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
                        :init="books"/>
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
import PreallocatedImage from '@/scripts/main/PreallocatedImage';
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

export default Vue.extend({
  name: "AudioBooks",
  data() {
      return {
          books: [
              {
                  path: '6glasses.jpg',
                  alt: 'cover of "The History of The World In 6 Glasses" by Tom Standage',
                  width: 500,
                  height: 500
              },
              {
                  path: 'algorithms.jpg',
                  alt: 'cover of "Algorithms to Live By: The Computer Science of Human Decisions" by Brian Christian and Tom Griffiths',
                  width: 500,
                  height: 500
              },
              {
                  path: 'atlas.jpg',
                  alt: 'cover of "Atlas Shrugged" by Ayn Rand',
                  width: 500,
                  height: 500
              },
              {
                  path: 'marx.jpg',
                  alt: 'cover of "The Communist Manifesto" by Karl Marx and Friedrich Engels',
                  width: 500,
                  height: 500
              },
              {
                  path: 'chomsky.jpg',
                  alt: 'cover of "Understanding Power: The Indispensable Chomsky" edited by Peter R Mitchell and John Schoeffel',
                  width: 500,
                  height: 500
              },
              {
                  path: 'etymologicon.jpg',
                  alt: 'cover of "The Etymologicon: A Circular Stroll Through the Hidden Connections of the English Language" by Mark Forsyth',
                  width: 500,
                  height: 500
              },
              {
                  path: 'genghis.jpg',
                  alt: 'cover of "Ghenghis Khan and the Making of the Modern World" by Jack Weatherford',
                  width: 500,
                  height: 500
              },
              {
                  path: '5rings.jpg',
                  alt: 'cover of "The Book of the Five Rings" by Miyamoto Musashi and edited by Kenji Tokitsu',
                  width: 500,
                  height: 500
              },
              {
                  path: 'social.jpg',
                  alt: 'cover of "Social Engineering: The Art of Human Hacking" by Christopher Hadnagy',
                  width: 500,
                  height: 500
              },
              {
                  path: 'hat.jpg',
                  alt: 'cover of "The Man Who Mistook His Wife for a Hat and Other Clinical Tales" by Oliver Sacks',
                  width: 500,
                  height: 500
              },
              {
                  path: 'irrational.jpg',
                  alt: 'cover of "Predictably Irrational: The Hidden Forces That Shape Our Decisions" by Dan Ariely',
                  width: 500,
                  height: 500
              },
              {
                  path: 'misbehaving.jpg',
                  alt: 'cover of "Misbehaving: The making of Behaviour Economics" by Richard H. Thaler',
                  width: 500,
                  height: 500
              },
              {
                  path: '1984.jpg',
                  alt: 'cover of "1984" by George Orwell',
                  width: 500,
                  height: 500
              },
              {
                  path: 'pinker.jpg',
                  alt: 'cover of "Words and Rules" by Steven Pinker',
                  width: 500,
                  height: 500
              },
              {
                  path: 'plex.jpg',
                  alt: 'cover of "Into the Plex: How Google Thinks, Works, and Shapes Our Lives" by Steven Levy',
                  width: 500,
                  height: 500
              },
              {
                  path: 'random.jpg',
                  alt: 'cover of "The Drunkard\'s Walk: How Randomness Rules Our Lives" by Leonard Mlodinow',
                  width: 500,
                  height: 500
              },
              {
                  path: 'batman.jpg',
                  alt: 'cover of "Batman and Psychology: A Dark and Stormy Knight" by Travis Langley',
                  width: 500,
                  height: 500
              },
              {
                  path: 'scrum.jpg',
                  alt: 'cover of "Scrum: The Art of Doing Twice the Work in Half the Time" by Jeff Sutherland',
                  width: 500,
                  height: 500
              },
              {
                  path: 'snow.jpg',
                  alt: 'cover of "Snow Crash" by Neal Stephenson',
                  width: 500,
                  height: 500
              },
              {
                  path: 'super.jpg',
                  alt: 'cover of "Superintelligence: Paths, Dangers, Strategies" by Nick Bostrom',
                  width: 500,
                  height: 500
              },
              {
                  path: 'everything.jpg',
                  alt: 'cover of "The Theory of Everything: The Origin and Fate of the Universe" by Steven W. Hawking',
                  width: 500,
                  height: 500
              },

          ] as PreallocatedImage[]
      }
  },
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel,
      'prealloc': PreallocatedImageVue
  }
});
</script>
