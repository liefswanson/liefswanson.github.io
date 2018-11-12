<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Writing A Compiler, the Hard Way
        </h1>

        <p class='p-wide p-text'>
            For my Software Systems degree at
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>,
            I took a course in compilers.
            The course was a great deal of work; we started with a minimally functional compiler, written in Java, and we were expected to continually build upon it as the class progressed.
        </p>

        <p class='p-note p-thin'>
            The language the compiler actually compiled was one designed specifically for the course, as was our target architecture.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>
        <p class='p-wide p-text'>
            In addition to the work of my other classes, and studying for the tests in this class, every student was expected to implement a wide range of functionality into our compilers.
            Most students did not complete a large portion of their compiler, as is common in that class; it is a demanding course.
        </p>
        <p class='p-wide p-text'>
            <strong>Unlike most other students, I did implement every feature:</strong>
        <ul class='p-wide p-list'>
            <li>
                Supported first-class data-types:
                <ul class='p-list'>
                    <li>Booleans</li>
                    <li>8-bit Characters</li>
                    <li>Strings</li>
                    <li>32-bit Integers</li>
                    <li>32-bit Floats</li>
                    <li>64-bit Rationals <span class='p-note'>composed of two 32-bit Integers</span></li>
                    <li>Higher Order Functions</li>
                    <li>Arrays <span class='p-note'>composed of any type here including arrays</span></li>
                </ul>
            </li>
            <li>
                All data-types had type inference, and casting was allowed within a strict hierarchy
            </li>
            <li>
                Scopes
            </li>
            <li>
                Functions <span class='p-note'>able to use static variables in outer scopes and stack variables in the current scope</span>
            </li>
            <li>
                Manually managed dynamic memory
            </li>
            <li>
                Rationals were automatically reduced to
                <a class='p-link' href='https://en.wikipedia.org/wiki/Greatest_common_divisor'>gcd</a>
                form
            </li>
            <li>
                An Optimizer which could do all the following optimizations:
                <ul class='p-list'>
                    <li>peephole</li>
                    <li>string deduplication</li>
                    <li>
                        trimming of unreferenced code via
                        <a class='p-link' href='https://en.wikipedia.org/wiki/Basic_block'>basic blocks</a>
                    </li>
                    <li>basic block reordering and duplicating <span class='p-note'>to reduce jumps</span></li>
                    <li>some <b>very</b> basic constant variable replacement</li>
                </ul>
            </li>
            <li>
                It was possible to do the following with every numeric data-type:
                <ul class='p-list'>
                    <li>addition</li>
                    <li>subtraction</li>
                    <li>multiplication</li>
                    <li>division</li>
                    <li>value comparisons <span class='p-note'>&lt;, &gt;, &lt;=, &gt;=, ==, !=</span></li>
                </ul>
            </li>
            <li>
                Statements had binding by use of a
                <a class='p-link' href='https://en.wikipedia.org/wiki/Recursive_descent_parser'>recursive descent parser</a>
                just like
                <a class='p-link' href='https://en.wikipedia.org/wiki/Order_of_operations'>BEDMAS or PEMDAS</a>
            </li>
            <li>
                It also contained some basic control structures:
                <ul class='p-list'>
                    <li>if/else statements <span class='p-note'>did not have "else if"</span></li>
                    <li>while loops</li>
                    <li>for loops and foreach loops</li>
                </ul>
            </li>
            <li>
                Finally, it had some built in routines which could be performed on arrays:
                <ul class='p-list'>
                    <li>map</li>
                    <li>filter</li>
                    <li>fold and reduce <span class='p-note'>left and right</span></li>
                </ul>
            </li>
        </ul>
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>
        <p class='p-text p-wide'>
            Unlike other courses at university, this course gave us the opportunity to follow real development practices.
            Code style really mattered, as poorly written code is harder to debug, and this compiler had to be supported through the entirety of the course.
            It was not a project that was done in a few days and then never touched again.
            In the process of writing this compiler, I got lots of practice maintaining, organizing, and testing my own code.
        </p>

        <p class='p-thin p-note'>
            The only other time I had a class that actually emulated real software development practices was a semester long 8-person project where we had a real client.
        </p>

        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>

        <p class='p-text p-wide'>
            On the first day of class, our professor let us know that compilers courses are often considered the hardest courses in a computer science major, regardless of what university the course is being taught at.
            He then let us know that his class was even harder than most compilers courses.
            He expected us to write every feature from scratch; no libraries were allowed, and every project was going to build on the previous project.
        </p>
        <p class='p-text p-wide'>
            The prospect of writing so many features from scratch immediately told me that I needed a better way of testing.
            JUnit is fine, if you are testing Java, but I wasn't only testing Java, I was testing Java that would write assembly for a virtual machine that didn't exist outside of this course.
            I needed a test suite that would test the compiler, then the program's it output, and then the optimizer, and then the optimized programs it output.
            The only way I could see to do this was to <router-link class='p-link' exact to='/projects/gtr'>write my own</router-link>.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'WritingACompiler',
    components : {
    }
});
</script>
