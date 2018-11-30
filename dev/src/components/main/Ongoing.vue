<template>
<section class='ongoing-root'>
    <h1 class='title p-title'>
        Some Projects I Have in the Works
    </h1>
    <p class='p-note'>
        I look forward to getting these to a point where they can each have their own page.
        <br>
        If any of these interest you, feel free to
        <router-link class='o-link' exact to='/contact'>contact</router-link>
        me about them!
        <br>
        I always welcome ideas and people to work with.
    </p>
    <upcoming name='Expanding my Research About Optimizing Gesture Keyboard Layouts'
              :img="{
                  path: '/static/optimizing-keyboards/thumb.jpg',
                  alt: 'picture of a mobile keyboard with a typing gesture drawn ontop of it.',
                  width: 346,
                  height: 196
              }"
              stamp='November 13<sup>th</sup> 2018'>
        I am expanding on the work I did
        <router-link class='o-link' exact to='/projects/optimizing-keyboards'>finding customized gesture typing layouts</router-link>,
        by publishing my finding and by integrating them into my own mobile keyboard based on the AOSP keyboard.
    </upcoming>
    <upcoming name='Turning my Automatic Sudoku Solver into an Android Application'
              :img="{
                  path: '/static/updates/sudoku-book.jpg',
                  alt: 'picture of a book of unsolved sudokus',
                  width: 640,
                  height: 480
              }"
              stamp='November 29<sup>th</sup> 2018'>
        I am working on integrating a camera and character recognition into an Android application along with
        <router-link class='o-link' exact to='projects/sudoku'>my automatic sudoku solver</router-link>.
        Take a picture and it solves itself, so you never have to again.
    </upcoming>
    <upcoming name='Teaching Myself Polish'
              :img="{
                  path: '/static/updates/poland.jpg',
                  alt: 'picture of a the Polish Flag',
                  width: 768,
                  height: 480
              }"
              stamp='November 29<sup>th</sup> 2018'>
        As of the time of writing this, I have a 110+ day Polish streak on
        <a class='o-link' href="https://www.duolingo.com">duolingo</a>
        doing 30+ minutes per day.
        Why Polish? One of my
        <router-link title='The Witcher 3' class='o-link' exact to='projects/video-games'>favourite video games</router-link>
        is made by a
        <a class='o-link' title='CDPR' href="https://en.cdprojektred.com">Polish development studio</a>,
        and I figured it is probably even more polished in Polish.
        So I figured if it interested me, I might as well learn a new natural language.
    </upcoming>
</section>
</template>

<script lang='ts'>
import Vue from 'vue';

import UpcomingItem from '@/components/util/UpcomingItem.vue';

export default Vue.extend({
    name: 'Updates',
    data () {
        return {
        }
    },
    components: {
        upcoming: UpcomingItem
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';
.ongoing-root {
    max-width: $medium-size;
    margin: auto;
    padding: 2rem;
    padding-top: 1rem;
}

.title {
    font-size: 1.75rem;
}

.o-link {
    @include link($ongoing-swatch);
}

</style>
