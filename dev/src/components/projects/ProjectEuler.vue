<template>
<project-template name='ProjectEuler'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            I use online problem sets to practice solving math problems, my knowledge of algorithms, and my knowledge of programming tools.
        </p>

        <p class='p-wide p-text'>
            Compared to how many problems there are, I haven't made it that far.
            However, I have used the problems to practice all these languages:
        </p>

        <ul class='p-wide p-list'>
            <li>Python</li>
            <li>Haskell</li>
            <li>C#</li>
            <li>C</li>
            <li>Golang</li>
            <li>D</li>
        </ul>

        <p class='p-text p-wide'>
            You can find the code on
            <a class='p-link' href='https://github.com/liefswanson/projectEuler'>My GitHub<i class='p-icon fab fa-github'/></a>...
            but don't use my solutions to cheat!
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            In order to teach myself things, I seek out problems online to improve my skills.
            One such problem set is
            <a class='p-link' href="https://projecteuler.net">Project Euler</a>.
        </p>

        <p class='p-wide p-text'>
            I have also done some other parts of semi-similar problems sets.
            There is a really good set of problems that gets ported around from one language to the next called
            <a class='p-link' href='http://www.ic.unicamp.br/~meidanis/courses/mc336/2006s2/funcional/L-99_Ninety-Nine_Lisp_Problems.html'>L-99</a>,
            <span class='p-note'>which focuses on Lisp</span>.
            I have done about half of each
            H-99 <span class='p-note'>(Haskell)</span>,
            P-99 <span class='p-note'>(Prolog)</span>,
            and S-99 <span class='p-note'>(Scala)</span>.
        </p>

        <p class='p-wide p-text'>
            More recently I have tried my hand at
            <a href="https://www.hackerrank.com">HackerRank</a>
            and that has also been a good experience... but I find the problems are mostly focused on tackling interviews, rather than expanding knowledge of code and algorithms in general.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I pride myself on not allowing myself to become reliant on a particular language or framework.
            Sometimes the easiest way to practice many different tools is by trying new ones out on a focused set of problems.
        </p>

        <p class='p-thin p-note'>
            Becoming too reliant on a particular tool actually has a term in software engineering.
            It is called the
            <a class='p-link' href="https://sourcemaking.com/antipatterns/golden-hammer">golden hammer</a>
        </p>

        <p class='p-wide p-text'>
            Compared to how many problems there are, I haven't made it that far in Project Euler, and some other similar problem sets.
            However, I have used the problems to practice all these languages:
        </p>

        <ul class='p-wide p-list'>
            <li>Python</li>
            <li>Haskell</li>
            <li>C#</li>
            <li>C</li>
            <li>Golang</li>
            <li>D</li>
        </ul>

        <p class='p-wide p-text'>
            I really like opportunities to learn things, and even better if I can learn multiple things at once.
            So, I think using
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            Just like learning anything, solving math problems while learning new programming languages is all about finding spare time and then making mistakes until you get stuff right!
        </p>

        <p class='p-wide p-text'>
            Though, there is some more to solving Project Euler problems than just finding a quick solution, in my opinion.
            Because I use it as an opportunity to learn other stuff, I like to take my time and play around with novel ways of solving problems.
        </p>

        <p class='p-wide p-text'>
            For instance,
            <a class='p-link' href="https://projecteuler.net/problem=3">one problem</a>
            involved implementing a prime sieve, which I did without ever using the modulo operator.
            Instead I used a summation over an infinite set of generating functions that represented the divisibility of each number with a particular prime.
        </p>

        <p class='p-wide p-text'>
            In
            <a class='p-link' href="https://projecteuler.net/problem=18">another problem</a>
            There is a simple trick to solving this problem, but I honestly didn't see it at first... instead noticing that finding the minimum path of a similar graph was equivalent to finding a maximum path in this graph.
            To solve this problem, instead of using the trick, I inverted the graph and applied A*.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "ProjectEuler",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>