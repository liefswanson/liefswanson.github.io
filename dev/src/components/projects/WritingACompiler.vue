<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Writing A Compiler, the Hard Way
        </h1>

        <p class='p-wide p-text'>
            For my undergrad degree in Software Systems at SFU, I took a course in compilers.
            The course was a really great, in my opnion.
            I took it with <v-link to='https://www.sfu.ca/computing/people/faculty/thomasshermer.html'>Tom Shermer</v-link>, who is one of those professors that will make you work because he knows it will cause you to learn things.
        </p>

        <p class='p-wide p-text'>
            All the projects in the course were connected.
            They were one long project, brok en into several parts.
            In other words, each project relied on the previous project being completed, much like implementing real software, which is something I haven't often seen in classes.
        </p>

        <p class='p-note p-thin'>
            The only time I experienced this outside of one of Tom's classes was in a
            <v-link local to='/projects/big-team-project'>semester long team project</v-link>
            where we had a real client.
        </p>

        <p class='p-wide p-text'>
            For this class, we were targetting a simple stack machine with a several dozen commands.
            The virtual stack machine we used was designed by Tom, and made specifically for teaching students compilers without having to simultaneously worry about the hardware.
        </p>

        <p class='p-wide p-text'>
            The language we were compiling was called Pika.
            The compiler was all written without the help of external libraries.
            We weren't even allowed to use a
            <v-link to='https://en.wikipedia.org/wiki/Regular_expression'>regular expressions</v-link> unless we wrote the libraries from scratch.
            All we had were Java's core libraries and a minimally functional compiler Tom started us with.
            By the end it had surprisingly many features:
        </p>

        <p class='p-note p-thin'>
            A pika is an adorable
            <v-link to='https://www.google.ca/search?q=pika&tbm=isch'>rabbit-esque animal</v-link>
            that may have been the idea behind pikachu
        </p>

        <ul class='p-wide p-list'>
            <li>
                Supported first-class data-types
                <ul class='p-list'>
                    <li>Booleans</li>
                    <li>8bit Characters</li>
                    <li>Strings</li>
                    <li>32bit Integers</li>
                    <li>32bit Floats</li>
                    <li>64bit Rationals <span class='p-note'>composed of two 32bit Integers</span></li>
                    <li>Higher Order Functions</li>
                    <li>Arrays <span class='p-note'>composed of any type here including arrays</span></li>
                </ul>
            </li>
            <li>
                All data-typos had type inference, and casting was allowed within a strict hierarchy
            </li>
            <li>
                Functions <span class='p-note'>able to use static variables in outer scopes and stack variables</span>
            </li>
            <li>
                Manually managed dynamic memory
            </li>
            <li>
                Rationals were automatically reduced to
                <v-link to='https://en.wikipedia.org/wiki/Greatest_common_divisor'>gcd</v-link>
                form
            </li>
            <li>
                An Optimizer which could do all the following optimizations.
                <ul class='p-list'>
                    <li>peephole</li>
                    <li>string deduplication</li>
                    <li>
                        trimming of unreferenced code via
                        <v-link to='https://en.wikipedia.org/wiki/Basic_block'>basic blocks</v-link>
                    </li>
                    <li>basic block reordering to reduce jumps</li>
                    <li>some <b>very</b> basic constant variable replacement</li>
                </ul>
            </li>
            <li>
                It was possible to do following with every numeric data-type
                <ul class='p-list'>
                    <li>addition</li>
                    <li>subtraction</li>
                    <li>multiplication</li>
                    <li>division</li>
                    <li>value comparisons</li>
                </ul>
            </li>
            <li>
                Statements had binding by use of a
                <v-link to='https://en.wikipedia.org/wiki/Recursive_descent_parser'>recursive descent parser</v-link>
                just like
                <v-link to='https://en.wikipedia.org/wiki/Order_of_operations'>BEDMAS or PEMDAS</v-link>
            </li>
            <li>
                It also contained some basic control structures
                <ul class='p-list'>
                    <li>if/else statements <span class='p-note'>no else if</span></li>
                    <li>while loops</li>
                    <li>for loops and foreach loops</li>
                </ul>
            </li>
            <li>
                Finally, it had some built in routines which could be performed on arrays
                <ul class='p-list'>
                    <li>map</li>
                    <li>filter</li>
                    <li>fold and reduce <span class='p-note'>left and right</span></li>
                </ul>
            </li>
        </ul>

        <p class='p-note p-thin'>
            Wow that is a lot of things for one semester right?
            I ended up writing enough code to create a net of 15-18k lines for this class.
            That is excluding any removed lines.
            That is just how much bigger the compiler was by the end.
            <br>
            <br>
            That is a lot of work to test while doing other classes.
            That is why I wrote my own
            <v-link local to='/projects/gtr'>testing harness</v-link>
            to help me. It came in very handy; two evenings well spent.
        </p>

        <p class='p-wide p-text'>
            When the minimal compiler was given to us, it could do addition and subtraction.
            It also had some unused code for helping with symbol tables and scopes, which we had to hook up.
        </p>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'WritingACompiler',
    components : {
        'v-link': Link
    }
});
</script>