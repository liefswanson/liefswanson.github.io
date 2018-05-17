<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Automated Feature Testing
        </h1>

        <p class='p-highlight p-wide'>
            Check it out on
            <v-link to='https://github.com/liefswanson/gtr'>My GitHub<i class='p-icon fab fa-github'/></v-link>
        </p>

        <p class='p-text p-wide'>
            During my
            <v-link local to='/projects/writing-a-compiler'>class in Compilers</v-link>,
            that I took as part of my
            <v-link local to='/projects/sosy'>Software Systems degree</v-link>
            I quickly realized I was going to spend a lot of time testing.
            The projects in that class were all about iteratively building up a compiler and optimizer.
            Writing a compiler is a pretty cool experience, but compilers are actually kind of hard to test;
            there is a lot of state involved in the process of building up and using an
            <v-link to='https://en.wikipedia.org/wiki/Abstract_syntax_tree'>abstract syntax tree</v-link>.
            Which means it is hard to test the internals effectively.
            Especially when the language is actively evolving month to month, as was the case with our iteratively designed compiler.
        </p>

        <p class='p-thin p-note'>
            You may not believe me that compilers are hard to unit test, but I assure you they are.
            Languages are very complex constructs.
            <v-link to='https://www.reddit.com/r/javascript/comments/4oxtgk/javascript_developers_be_warned_about_this_crazy/'>Here</v-link>
            is one of my favourite bugs, that was found in V8.
            <br/>
            <br/>
            V8 is the
            <v-link to='https://en.wikipedia.org/wiki/Just-in-time_compilation'>JIT</v-link>
            used in google chrome and nodejs
        </p>

        <p class='p-text p-wide'>
            I decided I would make things easier on myself, by building a testing harness designed around my development process.
            JUNIT and similar frameworks are great for testing code in your project, but given there were some specific problems that I wanted to circumvent.
            JUNIT would have a pretty big problem with each of them.
        </p>

        <ul class='p-wide p-list'>
            <li>The target code ran in a custom vm</li>
            <li>I wanted to write source files, not strings inside JUNIT tests</li>
            <li>The compiled output can't be checked directly <span class='p-note'>the output code may change in a future version without invalidating the program</span></li>
            <li>When something fails, I wanted to know very concisely how it differed from my expectation</li>
        </ul>

        <p class='p-wide p-text'>
            JUNIT would struggle with <b>all</b> of these requirements.
            So, I decided to handle each and every one of the problems myself.
            In the end my test harness would need to help me:
        </p>

        <ul class='p-wide p-list'>
            <li>split each test into multiple phases
                <ul class='p-list'>
                    <li>compilation</li>
                    <li>running compiled code</li>
                    <li>optimization</li>
                    <li>running optimized code</li>
                </ul>
            </li>
            <li>make new tests automatically opening the source of the test in my preferred editor</li>
            <li>run lots and lots of tests in parrallel</li>
            <li>diff test results, only showing me what changed and how</li>
            <li>easily change the expected results of a test <span class='p-note'>in case the language spec changed</span></li>
            <li>interface easily with other commandline utilities like wine
                <span class='p-note'>
                    The vm was built to work in windows, but I work in
                    <v-link to='/projects/arch-linux'>linux</v-link>
                </span>
            </li>
        </ul>

        <p class='p-wide p-text'>
            While I was at it, I wanted to learn a new language, so I wrote the harness in
            <v-link to='https://golang.org/'>Golang</v-link>.
            Having a reason to learn a tool always makes things go more smoothly.
            Golang was a good choice because of the ease with which it can be multi-threaded.
            Also, Golang writes sort of like a scripting languages, and normally I would do this sort of work in a scripting language like Python or Fish.
        </p>

        <p class='p-thin p-note'>
            Also Golang having a built in package for dealing with commandline arguments made life much easier.
        </p>

        <p class='p-wide p-text'>
            In the end it worked out really really well.
            The test harness I built saved me tons of time.
            I remember talking to another person in the class, showing them how to use my test harness;
            they got pretty taken a back, because for 75% of the class, they had been testing everything by hand.
            The test harness I wrote quickly became an indispensible part of their work flow for the final project.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'gtr',
    components: {
        'v-link': Link,
    }
});
</script>
