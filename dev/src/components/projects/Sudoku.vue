<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            Automatic Sudoku Solver
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://github.com/liefswanson/auto-sudoku'>My GitHub<i class='p-icon fab fa-github'/></v-link>
        </p>

        <p class='p-text p-wide'>
            I decided I wanted to learn the relatively new programming language
            <v-link to='https://kotlinlang.org'>Kotlin</v-link>,
            because I had heard good things about it.
            Given my experience learning new programming languages in the past, I have found it's best to have a goal.
            My goal for learning Kotlin was to make something that could do sudoku puzzles for me.
        </p>

        <p class='p-text p-wide'>
            I actually do like sudoku puzzles, but I am way too slow at them.
            I also found that the way I solve them was very algorithmic...
            It seemed like a great opportunity to pointlessly automate something.
            I joke, but it was a lot of fun.
        </p>

        <p class='p-text p-wide'>
            The program itself doesn't use too many fancy techniques to solve puzzles... mainly because I am not very good at sudoku puzzles!
            I only wanted to add techniques that I know how to use really well.
            So, I limited solving to use of finding singles <span class='p-note'>both hidden and naked</span> and guessing.
            The guessing is pretty cool though, because it is done recursively the way a
            <v-link to='https://en.wikipedia.org/wiki/Depth-first_search'>depth first search</v-link>
            would be.
        </p>

        <p class='p-thin p-note'>
            While the solving techniques aren't all that impressive, it does actually solve using a thread pool, and isn't limited to 9x9 puzzles.
            In theory it will work on puzzles of unlimited size, but I artificially limited it to 36x36 puzzles.
        </p>

        <p class='p-wide p-text'>
            Even just using such simple techniques, it solves expert puzzles in the time it takes to blink, which I was pleased by.
            There are some plans for the future as well.
            Hopefully, I get the time to hook it up to an android app that can use character recognition through the camera.
            This way I could take a picture of a sudoku puzzle, and have it solve right then and there.
        </p>

        <p class='p-thin p-note'>
            Sure it is totally useless, but in the best possible way.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'Sudoku',
    components: {
        'v-link': Link,
    }
});
</script>