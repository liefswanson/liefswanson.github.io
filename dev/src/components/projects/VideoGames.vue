<template>
<project-template name='VideoGames'>
    <template slot='intro'>
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

        <figure class='p-wide-grow'>
            <v-carousel class='p-image'
                        relative='/static/video-games/'
                        :init="imgs"/>

            <figcaption class='p-note'>
                Here are some of the games that really captured my imagination, either for their story, social aspects, and/or their incredible brain-engaging mechanics.
            </figcaption>
        </figure>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            All that is required from me is to pay attention to the design decisions and technical achievements inside games while I play them.
            I think it is important for anyone interested in software or design to pay close attention to the media they consume, so that they can learn from the polish of the implementation and way it is presented.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            To some people this may be confusing, as to why I would consider this one of my projects. Let me explain.
        </p>

        <p class='p-wide p-text'>
            I think that someone interested in UI design not taking the time to study video games is like a dairy farmer that doesn't drink milk, or an electrician that lives in a cave.
            There is a great deal to be learned about user engagement, user enjoyment, and effective UI from video games.
            Often things get tried out for the first time in earnest inside the domain of video games... because professional software is not willing to take the risks to try out new interaction models.
        </p>

        <p class='p-wide p-text'>
            For instance, the drop down console was a UI element that was essentially pioneered by the game Quake.
            It has since become very commonplace as part of the game developer's UI that is integrated by them for use in their own games.
            Some companies even leave it in for users to be able to play around with it.
            That might seem like an odd example, but in reality I think it is a very good one, because I have a dropdown console integrated into my desktop that I use <strong>every</strong> day.
            The prospect of a tool that I use every day on Linux may never have existed were it not for the concept being pioneered inside a video game first.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            Well, that is probably obvious!
            I play video games and watch for interesting innovations within those games.
            I don't just play games, I sort of study them.
        </p>

        <p class='p-wide p-text'>
            One of my favourite games to point to as an excellent example of game design is
            <a class='p-link' href="https://www.hellblade.com">Hellblade: Senua's Sacrifice</a>.
            The design is incredibly meticulous and makes use of a whole sense that other games just treat as filler... hearing.
            The game is quite literally not possible to complete without binaural audio... and your ability to relate to the main character would not be anywhere near as good if you could not hear exactly what she hears in the way she hears it.
            The game's camera is pulled in very tightly to enhance the cohesion between the audio and visuals.
            My senses come close to merging with those of the main character, even though I wasn't playing in VR.
            That combined with the detail put into portraying the subject matter makes Senua's Sacrifice something worth learning from.
        </p>

        <p class='p-wide p-text'>
            There are plenty of other things I have learned about design, and software implementation from looking at the games I play with a critical eye.
            However, this section would go on forever if I just started listing everything I can remember in one endless lecture.
        </p>
    </template>
</project-template>
</template>
<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";
import PreallocatedImage from '@/scripts/main/PreallocatedImage';

export default Vue.extend({
    name: "VideoGames",
    data(){
        return {
            imgs: [
                {
                    path: 'witcher3.jpg',
                    alt: 'art from The Witcher 3: Wild Hunt',
                    width: 960,
                    height: 540
                },
                {
                    path: 'hellblade.jpg',
                    alt: "art from Hellblade: Senua's Sacrifice",
                    width: 640,
                    height: 360
                },
                {
                    path: 'grimdawn.jpg',
                    alt: 'art from Grim Dawn',
                    width: 840,
                    height: 389
                },
                {
                    path: 'shogun2.jpg',
                    alt: 'art from Total War: Shogun 2',
                    width: 790,
                    height: 444
                },
                {
                    path: 'titans.jpg',
                    alt: 'art from Planetary Annihilation: Titans',
                    width: 864,
                    height: 486
                },
                {
                    path: 'kotor2.jpg',
                    alt: 'art from Knights of the Old Republic 2: The Sith Lords',
                    width: 900,
                    height: 416
                },
                {
                    path: 'borderlands.jpg',
                    alt: 'art from Borderlands 2',
                    width: 720,
                    height: 405
                },
                {
                    path: 'generals.jpg',
                    alt: 'art from Generals: Zero Hour',
                    width: 960,
                    height: 720
                },
                {
                    path: 'infamous.jpg',
                    alt: 'art from Infamous 2',
                    width: 1080,
                    height: 608
                },
                {
                    path: 'guildwars.jpg',
                    alt: 'art from Guild Wars',
                    width: 700,
                    height: 330
                },
                {
                    path: 'shadow.jpg',
                    alt: 'art from Shadow of the Colossus',
                    width: 800,
                    height: 450
                },
                {
                    path: 'minecraft.jpg',
                    alt: 'art from Minecraft',
                    width: 925,
                    height: 521
                },
                {
                    path: 'burnout.jpg',
                    alt: 'art from Burnout Revenge',
                    width: 960,
                    height: 540
                },
                {
                    path: 'gta.jpg',
                    alt: 'art from Grand Theft Auto: San Andreas',
                    width: 960,
                    height: 540
                }
            ] as PreallocatedImage[]
      }
  },
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>