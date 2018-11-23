<template>
<project-template name='Photography2014Summer'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            For a class in digital photography that I took as part of my BSc in
            <router-link class='p-link' exact to='/projects/siat'>Interactive Technology</router-link>,
            I was given a project where I had to put together an album of my best work from the class, while improving on each piece.
        </p>
        <p class='p-text p-wide'>
            You can find the album on
            <a class='p-link' href='https://www.flickr.com/photos/124866205@N05/albums/72157645984109166'>My Flickr<i class='p-icon fab fa-flickr'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            My goal was to produce a photo album that I would be happy to put in a portfolio.
            I was both the photographer and photo editor.
            I had to come up with the subjects to photograph, plan the best ways to get good photos of those subjects, and then work on accentuating the qualities I wanted to focus on through digital editing.
        </p>
        <figure class='p-wide-grow'>
            <v-carousel class='p-image p-wide-grow'
                        relative='/static/photography-2014-summer/'
                        :init="imgs"/>
            <figcaption class='p-note separate'>
                These are just a sample of the photos from the album.
            </figcaption>
        </figure>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            It is not often that I am put in a situation to use only my creative visual art skills.
            This project filled that niche, allowing me to focus only on the quality of the art, and not how it functioned within some other context.
            The only other times I get to do something like that is in my own spare time, when art has to compete with all the other things I am interested in...
            or when I am paid to take photos, which rarely leaves as much room for creativity.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            There were many considerations that went into every photo, but every photo had its own constraints.
            Usually when I look to do a photograph there are two ways I go about it.
        </p>
        <p class='p-text p-wide'>
            I start with a subject I find naturally and build an idea around it...
        </p>
        <figure class='p-wide-grow'>
            <prealloc class='p-image'
                      :img="{
                                path: '/static/photography-2014-summer/reflect.jpg',
                                alt: 'a picture of bright reflection of nature, amongst a piece of wood, in a pond',
                                width: 640,
                                height: 427
                            }"/>
            <figcaption class='p-note'>
                Here I literally found a stump sticking out of a pond, and just happened to catch the reflection of a yellow rhododendron in the background.
                It just felt like the right shot as soon as I saw it.
                I thought it was very interesting that something rotting in still water could be so visually alive.
            </figcaption>
        </figure>

        <p class='p-text p-wide'>
            ... or I start with an idea and go out searching for a subject.
        </p>

        <figure class='p-wide-grow'>
            <prealloc class='p-image'
                      :img="{
                                path:'/static/photography-2014-summer/abuse.jpg',
                                alt:'a dim lit image depicting an actress portraying a domestic abuse victim',
                                width:1024,
                                height:733
                            }"/>
            <figcaption class='p-note'>
                I wanted to do something that made people think.
                I remembered seeing ads about raising awareness around domestic violence, in a magazine years before, and wanted to pay homage to that.
                It just so happened a friend of mine was thinking of getting into movie makeup as a profession; she made the perfect subject and she got to show off her skills, a win for everyone.
           </figcaption>
        </figure>


        <p class='p-wide p-text'>
            When it comes to deciding when to take a photo, I don't wait for the perfect shot.
            Everything has a cost and a benefit associated with it, it just so happens that photography usually has very low cost associated with every individual photo.
            It doesn't matter if some bad photos are taken, as long as you don't miss opportunities to take photos.
            Every idea is valid, up until it is time to edit.
            Editing has much higher cost for much less benefit, so this is when it becomes important to narrow down selection.
        </p>
        <p class='p-note p-thin'>
            Moreover, it is better to have more photographs to pick from, so you aren't stuck editing a photo that is less than you hoped for.
        </p>

        <p class='p-wide p-text'>
            Lighting is probably my greatest nemesis when it comes to editing photos.
            It is what I have the hardest time fixing after the fact, and I think that is true for most people.
            That is why I try to use as many practical effects to try many different kinds of lighting when I have the opportunity, and I try to schedule outdoor shooting only around the
            <a class='p-link' href="https://en.wikipedia.org/wiki/Golden_hour_(photography)">golden hours</a>.
        </p>
        <p class='p-thin p-note'>
            Many a
            <a class='p-link' href="https://en.wikipedia.org/wiki/Rube_Goldberg_machine">rube-goldbergian</a>
            contraption has been built by me in poorly lit rooms, trying to get the lighting the way I want it...
            only to be taken down to build a new one in a different poorly lit room.
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
    name: "Photography2014Summer",
    data() {
        return {
            imgs: [
                {
                    path: 'building.jpg',
                    alt: 'a Wes Anderson-esque picture of a looming post office',
                    width: 640,
                    height: 465
                },
                {
                    path: 'flower.jpg',
                    alt: 'a close-up picture of a crisp pink and white flower',
                    width: 640,
                    height: 485
                },
                {
                    path: 'gun.jpg',
                    alt: 'a picture of a dirty hand grasping at a flintlock pistol',
                    width: 640,
                    height: 429
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