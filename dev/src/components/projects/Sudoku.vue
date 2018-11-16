<template>
<project-template name='Sudoku'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I decided I wanted to learn the relatively new programming language
            <a class='p-link' href='https://kotlinlang.org'>Kotlin</a>,
            and in my experience the easiest way to learn a new language is to have a good project.
            My project was to build a program that could solve sudokus for me, so I never had to again.
        </p>
        <p class='p-thin p-note'>
            Sure it is totally useless, but in the best possible way.
        </p>
        <p class='p-text p-wide'>
            You can find the code on
            <a class='p-link' href='https://github.com/liefswanson/auto-sudoku'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I implemented the entire application.
            Currently it runs from the command-line, but the logic is sound.
            I have tested it against sudokus that are labeled as the hardest possible difficulty... and it solves them so fast I have never bothered timing it.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            Every excuse to learn something is something I feel good about.
            What's even better is it was a fun project to do in my spare time.
        </p>
        <p class='p-wide p-text'>
            What's more is there are so many other little projects I can envision tying into this one, and all of them will be great opportunities to learn new things.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            The program itself doesn't use too many fancy techniques to solve puzzles... mainly because I am not very good at Sudoku puzzles!
            I only wanted to add techniques that I know how to use really well.
            So, I limited solving to use of finding singles <span class='p-note'>both hidden and naked</span> and guessing.
            The guessing is pretty cool though, because it is done recursively the way a
            <a class='p-link' href='https://en.wikipedia.org/wiki/Depth-first_search'>depth-first search</a>
            would be.
        </p>

        <p class='p-thin p-note'>
            While the solving techniques aren't all that impressive, it does actually solve using a thread pool, and isn't limited to 9x9 puzzles.
            In theory it will work on puzzles of unlimited size, but I artificially limited it to 36x36 puzzles.
        </p>

        <p class='p-wide p-text'>
            Even just using such simple techniques, it solves expert puzzles in the time it takes to blink, which I was pleased by.
            There are some plans for the future as well.
            Hopefully I get the time to hook it up to an Android app that can use character recognition through the camera.
            This way I could take a picture of a Sudoku puzzle, and have it solve right then and there.
        </p>
    </template>
</project-template>
</template>


<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "Tetris",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>