<template>
<project-template name='WritingACompiler'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            For my Software Systems degree at
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>,
            I took a course in compilers.
            The course was a great deal of work; we started with a minimally functional compiler, written in Java, targeting the source language Pika and we were expected to continually build upon it as the class progressed.
        </p>

        <p class='p-note p-thin'>
            The language the compiler actually compiled was one designed specifically for the course, as was our target architecture.
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            On the first day of class, our professor let us know that compilers courses are often considered the hardest courses in a computer science curriculum, regardless of what university the course is being taught at.
            He then let us know that his class was even harder than most compilers courses.
            He expected us to write every feature from scratch; no libraries were allowed, and every project was going to build on the previous project.
        </p>
        <p class='p-thin p-note'>
            Moreover, the iteration of the class I took was the only time the professor had students write an optimizer along with the compiler.
        </p>

        <p class='p-wide p-text'>
            Every student was expected to implement a wide range of functionality into our Pika compilers.
            I did finish every feature but most students did not complete a large portion of their compiler, as is common in that class; it is a demanding course.
        </p>
        <p class='p-wide p-text'>
            <strong>Features of Pika:</strong>
        </p>

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

        <p class='p-note p-thin'>
            The language Pika is named after this adorable
            <a class='p-link' href="https://www.google.ca/search?q=pika&tbm=isch">rabbit-esque animal</a>.
            Some people think the pika is the inspiration behind pikachu.
            However this is untrue; ぴかぴか (pika-pika) is an onomatopoeia for sparkle in Japanese, and チューチュー (chu-chu) is an onomatopoeia for a squeaking mouse.
            The combination of these two sounds turns out be the real origin of pikachu as the
            <a class='p-link' href="https://www.polygon.com/2018/6/4/17425162/pikachu-design-interview-creation">artist has stated</a>.
            Basically, pikachu is a sparkling squeaky mouse.
        </p>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            This course stood out from others at university. It gave us the opportunity to follow real development practices.
            Code style really mattered, as poorly written code is harder to debug, and this compiler had to be supported through the entirety of the course.
            It was not a project that was done in a few days and then never touched again.
            In the process of writing this compiler, I got lots of practice maintaining, organizing, and testing my own code.
        </p>
        <p class='p-thin p-note'>
            The only other time I had a class that actually emulated real software development practices was a
            <router-link class='p-link' exact to='/projects/big-team-project'>semester-long 8-person project</router-link>
            where we had a real client.
        </p>

        <p class='p-text p-wide'>
            By the end of the class I had added over 15,000 lines of code to the compiler, taking it from around 3,000 lines to somewhere in the range of 18,000
            <span class='p-note'>(not including any lines that were removed)</span>.
            While that isn't a huge project, by enterprise standards, it is sizeable enough for one person; I wasn't able to remember every line I had written.
            Which meant that I had to rely on writing good understandable code, rather than brute forcing my way through a
            <a class='p-link' href="https://sourcemaking.com/antipatterns/spaghetti-code">wall of spaghetti</a>.
        </p>
        <p class='p-note p-thin'>
            I think it was this class that helped me teach students about writing better code when
            <router-link class='p-link' exact to='/projects/teachers-assistant'>I was a TA</router-link>.
            On a partially related note... if you want to see some real spaghetti code, check out the
            <a class='p-link' title='International Obfuscated C Code Contest' href="https://en.wikipedia.org/wiki/International_Obfuscated_C_Code_Contest">IOCCC</a>
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            The prospect of writing so many features from scratch immediately told me that I needed a better way of testing.
            <a class='p-link' href="https://junit.org/junit5/">JUnit</a>
            is fine, if you are testing Java, but I wasn't only testing Java, I was testing Java that would write assembly for a virtual machine that didn't exist outside of this course.
            I needed a
            <a class='p-link' href='https://en.wikipedia.org/wiki/Test_harness'>testing harness</a>
            that would test the compiler, then the programs it output, and then the optimizer, and then the optimized programs the optimizer output.
            The only way I could see to do this was to
            <router-link class='p-link' exact to='/projects/gtr'>write my own</router-link>.
        </p>
        <p class='p-thin p-note'>
            What's more is I work on
            <router-link class='p-link' exact to='/projects/arch-linux'>Linux</router-link>
            whenever I can, because I have a much better workflow there, and I prefer it for ethical reasons.
            The target virtual machine was a windows binary, so that is just another thing I had to make my tool take care of for me.
        </p>

        <p class='p-wide p-text'>
            Once I had a testing harness down, I started working one language feature at a time.
            I was trying to do my best to follow a sort of agile-like approach, working on features such that they can be quickly seen and tested, rather than trying to work on sections of code that would be best to do in a perfect world where I can make no mistakes.
        </p>
        <p class='p-thin p-note'>
            Agile was the right call, as we didn't know the requirements of each part of the project until we got to it.
            The language is different every semester, as the professor decides which language features to include as we go.
        </p>

        <p class='p-wide p-text'>
            With every new language feature, I would implement everything required for a simplified version of feature and nothing more.
            Once I was confident I could get meaningful assembly out of the related language feature, I started adding tests around the feature, and building it up to pass those tests.
            I would write several small files in the source language Pika, and then write equivalent programs in Python.
            I took the output from the other program, and used it as the expected test result for my Pika program.
            In other words every test was based on functionality and not the output assembly, keeping my tests robust and correct.
        </p>
        <p class='p-thin p-note'>
            Luckily, as optimization should never change the output of a program, all I had to do to test optimized programs was make sure they had the exact same output as the unoptimized ones.
        </p>
    </template>
</project-template>
 </template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";

export default Vue.extend({
  name: "OptimizingKeyboards",
  components: {
      'project-template': ProjectTemplate
  }
});
</script>