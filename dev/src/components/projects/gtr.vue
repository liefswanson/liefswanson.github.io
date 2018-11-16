<template>
<project-template name='gtr'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            During my
            <router-link class='p-link' exact to='/projects/writing-a-compiler'>class in Compilers</router-link>
            that I took as part of my
            <router-link class='p-link' exact to='/projects/sosy'>Software Systems degree</router-link>,
            I quickly realized I was going to spend a lot of time testing, so I built my own testing harness to meet my exact needs.
            Writing a compiler is a pretty cool experience, but compilers are actually kind of hard to test.
            Especially when the language is actively evolving month to month, as was the case with our iteratively-designed compiler.
        </p>
        <p class='p-text p-wide'>
            You can find the code on
            <a class='p-link' href='https://github.com/liefswanson/gtr'>My GitHub<i class='p-icon fab fa-github'/></a>
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            I designed and implemented the entire testing harness.
            I also shilled it to some of the other students taking the class, because I like sharing the stuff I create.
        </p>

        <p class='p-text p-wide'>
            There were several requirements I needed to meet for my test harness to be useful.
        </p>
        <ul class='p-wide p-list'>
            <li>The harness had to interact with several different tools
                <ul class='p-list'>
                    <li>My IDE</li>
                    <li>The compiler</li>
                    <li>My favourite text editor <span class='p-note'>for writing tests</span></li>
                    <li>The target VM</li>
                    <li>Wine <span class='p-note'>because the VM was an .exe and I work on Linux</span></li>
                </ul>
            </li>
            <li>Split each test into multiple phases
                <ul class='p-list'>
                    <li>Compilation</li>
                    <li>Running compiled code</li>
                    <li>Optimization</li>
                    <li>Running optimized code</li>
                </ul>
            </li>
            <li>Scale across multiple threads by spinning up multiple instances of the compiler, optimizer, or VM</li>
            <li>Add and manage tests effortlessly at a macro level... <span class='p-note'>I had lots of tests</span></li>
            <li>The compiled assembly couldn't be checked directly, only the resulting behaviour <span class='p-note'>the output code may change due to future features</span></li>
            <li>When something failed, I wanted to see a diff not a pass/fail</li>
            <li>The tests had to be able to ignore time stamps in the compiler log output</li>
        </ul>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            I was super happy with myself after having written this tool.
            It saved me an incredible amount of time, and I think was the single most important tool in my workflow right after my IDE.
        </p>

        <p class='p-wide p-text'>
            In the end it worked out really, really well.
            The test harness I built saved me tons of time.
            I remember talking to another person in the class, showing them how to use my test harness;
            they got pretty taken aback, because for 75% of the class, they had been testing everything by hand.
            The test harness I wrote quickly became an indispensable part of their work flow for the final project.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            The how might have been the easiest part of this.
            Certainly there were hiccups during development, but honestly I managed to hack it out in 2 nights.
            There were hardly any issues, and things were pretty well organized
        </p>
        <p class='p-text p-wide'>
            The only hiccup I can remember coming across was the VM didn't like having its
            <a class='p-link' href="https://www.computerhope.com/jargon/s/stderr.htm">stderr</a>
            watched, and would refuse to quit if it was watched.
            Luckily, it never output anything through stderr, so I just stopped watching the stderr.
        </p>
        <p class='p-text p-wide'>
            Oh also if you wrote code with infinite loops, the test harness would never time out... but that was a small issue it only forced me to turn off my laptop once...
            The solution to that problem was simple, just never write bad code!
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