<template>
<project-template name='HDR'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            For a class in Media Arts for my
            <router-link class='p-link' exact to='/projects/sosy'>Software Systems degree</router-link>,
            I had to create an algorithm for combining several images into a single
            <a class='p-link' href="https://en.wikipedia.org/wiki/High-dynamic-range_imaging">HDR image</a>.
            We weren't given any equations for how to make it work, we were told just to play it by ear.
            We also had to give justification for why we chose the algorithm we did.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            For this assignment one of the requirements was that we come up with our own completely original algorithm for creating an HDR image.
            This meant we were not allowed to research existing algorithms until after we had completed the assignment.
            Some people did, but I didn't.
            So, I had to use some math to try and figure out a good way to get the a full range of exposures out of some mostly over/under exposed images.
        </p>

        <p class='p-wide p-text'>
            Unfortunately, I was never given permission to share my code online.
            So instead, I will show the resuts my code output!
        </p>
        <figure class='p-mid'>
            <prealloc class='p-image'
                      :img="{
                                path:'/static/hdr/thumb.png',
                                alt:'the final result from my HDR assignment',
                                width:388,
                                height:292
                            }"/>
            <figcaption class='p-note'>
                Here you can see the final result from my assignment!
            </figcaption>
        </figure>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I actually use HDR from time to time in my photography, so it was interesting to learn about how it is implemented.
            It gave me an opportunity to combine software and art, because the goal of the software I was making was art!
        </p>
        <p class='p-note p-thin'>
            Oh also... while we are on the topic of photography, don't forget to check out
            <router-link class='p-link' exact to='/projects/photography-2014-summer'>some of mine</router-link>.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            This assignment was pretty straight forward, we were given 3 images, and told to combine them to bring out a full range of exposures.
            Because we were working in Java, and not a language like matlab or python were a few things that I needed to do before I could start combining images.
            <ul>
                <li>Build a window to render the image in</li>
                <li>Add a file selector to pick source images</li>
                <li>Read all images into objects that can be drawn in a Java Swing window</li>
                <li>Add the ability to save the output</li>
            </ul>
        </p>

        <figure class='p-wide'>
            <v-carousel class='p-image'
                    relative='/static/hdr/'
                    :init="carouselSources"/>
            <figcaption class='p-note separate'>
                Here are the source images I used.
            </figcaption>
        </figure>

        <p class='p-wide p-text'>
            If you are familiar with this set of photos, you know that one of them is missing!
            However, these are the ones that I was given to work with.
            You can find the original set in the
            <a class='p-link' href='https://en.wikipedia.org/wiki/High-dynamic-range_imaging#HDR_processing'>Wikipedia article</a>.
        </p>

        <p class='p-wide p-text'>
            The interesting part of this assignment for me was coming up with an equation I could apply to the images that would work to combine them in general.
            I tried a few ideas, such as averaging, knowing they wouldn't work... but I wanted to see what features they lacked.
            Once I saw the boring washed out nature of the averaged image, I figured that there should be some form of dynamic weighting, based on the amount of information can be found from each pixel across the three images.
            For instance, a pixel might be almost completely black in 2 images, but green in the 1 image. The green pixel is thought to have more information, based on it having exposure closer to the middle of the range.
        </p>

        <p class='p-wide p-text'>
            I used a function similar to what is seen in gamma correction to weight the pixels from each image.
            The major difference was I looked at the average exposure across all three images and applied this function to each pixel's distance from the average exposure.
            This gave me a very flexible way of weighting the 3 images, though it did have some drawbacks. If you look in the images below, you may see something that looks like a lightning bolt arcing across the sky.
            This was caused by the way I did the weighting; because I was using a function that gets very steep right around the average exposure, lines of colour near the average exposure create these interesting artifacts.
        </p>

        <figure class='p-wide'>
            <v-carousel class='p-image'
                relative='/static/hdr/'
                :init="carouselOutputs"/>
            <figcaption class='p-note'>
                It took a few iterations to get the output image to look right.
            </figcaption>
        </figure>
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
  name: "HDR",
  data() {
      return {
          carouselSources: [
              {
                  path:'dark.jpg',
                  alt:'an under exposed image',
                  width:389,
                  height:292
              },
              {
                  path:'mid.jpg',
                  alt:'an image with low dynamic range',
                  width:389,
                  height:292
              },
              {
                  path:'bright.jpg',
                  alt:'an over exposed image',
                  width:389,
                  height:292
              }
          ] as PreallocatedImage[],
          carouselOutputs: [
              {
                  path:'1.jpg',
                  alt:'a washed out image resulting from averaging inputs',
                  width:389,
                  height:292
              },
              {
                  path:'2.jpg',
                  alt:'an hdr image with obvious artifacting, and no tonal mapping',
                  width:389,
                  height:292
              },
              {
                  path:'thumb.jpg',
                  alt:'an hdr image, without a tonal mapping',
                  width:389,
                  height:292
              }
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