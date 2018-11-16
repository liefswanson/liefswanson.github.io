<template>
<project-template name='Tetris'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            For a class in computer graphics that I took as part of my
            <router-link class='p-link' exact to='/static/projects/sosy'>Software Systems degree</router-link>
            I built a game of tetris.
            Well sort of...
            It is more like a hybrid of Tetris and Candy Crush.
            Now before you ask, "how does that even work?"
            The answer is not very well.
            However, I didn't come up with the idea, I just followed the spec given to me.
        </p>


        <p class='p-text p-wide'>
            You can find the code on
            <a class='p-link' href='https://github.com/liefswanson/fruit-tetris'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            I had to implement both the game mechanics, and the rendering in OpenGL using glfw3 in C++.
            The only library I used other than glfw3 was the Eigen library, which was really handy for doing transforms.
        </p>

        <figure class='p-mid'>
            <img class='p-image'
                 src="/static/tetris/thumb.png"
                 alt="fruity-tetris">

            <figcaption class='p-note'>
                It was sort of like Tetris on Froot Loops.
            </figcaption>
        </figure>


        <p class='p-text p-wide'>
            You may have noticed that the Tetris pieces were multi-colored, that is because not only did making a full row break blocks, but you could also break blocks by aligning 4 or more of the same colour.
        </p>

        <p class='p-text p-wide'>
            However, the project did not end there.
            Come the next part of the project we were supposed to bring the board into the 3<sup>rd</sup> dimension, and add a crane arm to place pieces.
        </p>

        <figure class='p-mid'>
            <img class='p-image'
                 src="/static/tetris/arm.png"
                 alt="fruity-tetris">

            <figcaption class='p-note'>
                And thus it transformed into one of those arcade claw games
            </figcaption>
        </figure>


    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            I liked the process of building this game... but it wasn't exactly optimal.
            I came up with lots of quirky solutions to helping me debug, that were super useful as it helped me isolate when errors were coming from how I was interacting with OpenGL or when the errors were in my game logic.
            For instance, I made it so every frame of the game rendered in multi-colour in the console, so if I made a mistake in OpenGL I could see what was going on in the game still.
        </p>

        <p class='p-text p-wide'>
            However, looking back at it, much like with the other
            <router-link class='p-link' exact to="/projects/ray-tracer">project from this class</router-link>,
            I could have streamlined testing in a way to make my life so much easier.
            This was an assignment I actually ended up handing in a day late because of how inefficiently I was testing my code, and I could do much better were I to redo this project.
            I think that sort of experience means something.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            Most of the process of working with this assignment came down to liberal use of valgrind.
        </p>

        <p class='p-text p-wide'>
            I think the most interesting part of this project was actually the way I implemented row breaks, 4 of a kind breaks, and the moveable tetromino.
        </p>

        <p class='p-text p-wide'>
            Because I had two different ways that blocks could break, I decided the easiest way to handle this was with some set theory.
            I treated every cell as elements either present or absent in a set.
            I then went row by row and marked rows that needed to be removed.
            All the marked cells were kept on a separate invisible board, that could be thought of as a mask.
            After marking all rows that needed to go, I marked all 4 of a kinds that needed to go in another mask.
            I merged the two masks, and applied them as a subtraction to the original board, and shifted down blocks that were overtop of removed blocks.
        </p>

        <p class='p-text p-wide'>
            The moveable tetromino also had it's own board, but a smaller one, only 4&times;4.
            The tetromino was moved around the board, checking if a move was valid before applying the transformation to the moveable tetromino's board.
            Having a 4&times;4 board also had the benefit of making rotations super trivial.
            The piece just barely fit into the 4&times;4 board, so transposes were the same thing as rotations!
            It turns out abstracting the moving tetromino this way was really useful when we got to the second part of the project, because now the tetromino really was disconnected from the board and could move around freely until being placed.
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