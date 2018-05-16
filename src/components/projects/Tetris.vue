<template>
    <article class='p-article-grid'>
        <h1 class='p-wide'>
            A Crazy Version of Tetris in OpenGL
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://github.com/liefswanson/fruit-tetris'>My GitHub<i class='p-icon fab fa-github'/></v-link>
        </p>

        <p class='p-wide p-text'>
            For a class in computer graphics that I took as part of my
            <v-link local to='/static/projects/sosy'>Software Systems degree</v-link>
            I built a game of tetris.
            Well sort of...
            It is more like a hybrid of Tetris and Candy Crush.
            Now before you ask, "how does that even work?"
            The answer is not very well.
            However, I didn't come up with the idea, I just followed the spec given to me.
        </p>

        <div class='p-fill-row'></div>

        <img class='p-thin-grow p-image'
             src="/static/tetris/thumb.png"
             alt="fruity-tetris">

        <div class='p-fill-row'></div>

        <p class='p-wide-grow p-text'>
            Now that doesn't look like much, but I assure you it was some work to write...
            It was made entirely in OpenGL using glfw3 in C++.
        </p>

        <p class='p-wide p-text'>
            The way the game works with the same rules as tetris, with one addition.
            You may have noticed that the pieces are multi-coloured. This is because it also works sort of like Candy Crush.
            If 4 of the same colour end up connecting, they will break, leaving the pieces around them floating even if they are unconnected to the rest of the pieces.
        </p>

        <p class='p-wide p-text'>
            This game actually does have some cool features from an implementation perspective:
        </p>

        <ul class='p-wide p-list'>
            <li>To debug the rendering, I created a cool colourized pretty string of the board that would output to stdout each frame.</li>
            <li>Every single block shares the <b>exact</b> same model</li>
            <li>All checks to see if blocks were destroyed are done in a batch process
                <ul class='p-list'>
                    <li>this allows color breaks and row breaks to happen in the same action</li>
                    <li>to achieve this, I created the ability to diff the board</li>
                </ul>
            </li>
            <li>It was required that the colors could shift left and right on the pieces while they are falling</li>
            <li>The tetris piece is maintained outside the board, in a 4x4 grid and is then patched into the board before render</li>
        </ul>

        <p class='p-thin p-note'>
            I am not sure what possessed me to use the same model for every object.
            It was pretty complicated attaching the exact same model to every block and swapping out the shader when each needed to be rendered.
        </p>

        <p class='p-wide p-text'>
            Later on in the same course, we took that same board, turned it into a 3d board, and added a sort of crane arm.
            The game at this point isn't really a game, but it does force the use of a perspective camera and the arm needs to do local rotations on two points.
        </p>

        <div class='p-fill-row'></div>

        <img class='p-thin-grow p-image'
             src="/static/tetris/arm.png"
             alt="fruity-tetris">

        <div class='p-fill-row'></div>

        <p class='p-wide p-text'>
            That is pretty much it!
            I think if I was to write this code again though, there would be some big changes.
            I am certain were I to write it again, it could be done much more elegantly than it was.
            I also think I would likely use more than one model, but I am not sure the best way to treat multiple models as a single model for batch rendering.
        </p>

        <p class='p-thin p-note'>
            I also mode a
            <v-link to='/static/projects/ray-tracer'>ray tracer</v-link>
            for this same class, you should check that out, it made a very pretty picture.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'HDR',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
