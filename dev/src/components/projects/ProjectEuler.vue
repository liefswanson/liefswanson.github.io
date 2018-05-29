<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        Math Problems and Programming Languages
    </h1>

    <p class='p-highlight p-wide'>
        Check it out on
        <v-link to='https://github.com/liefswanson/projectEuler'>My GitHub<i class='p-icon fab fa-github'/></v-link>...
        but don't use my solutions to cheat!
    </p>


    <p class='p-wide p-text'>
        If you haven't ever looked at Project Euler, you should.
        It is a set of math problems designed to be just computationally complex enough that you probably want to use a computer to help you solve them.
        The cool thing about this is it gives you a reason to learn new programming languages.
    </p>

    <p class='p-thin p-note'>
        Honestly though, most project Euler problems are about 5 lines of Haskell.
        If you want to learn Haskell, I recommend using Project Euler for practice.
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

    <p class='p-wide p-text'>
        The really nice thing about project Euler is it gives the freedom to try interesting solutions as well.
        For instance, I solved the problem to find all the prime numbers below N using a strange implementation of the
        <v-link to='https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes'>Sieve of Eratosthenes</v-link>.
        In my version, I used an infinite sum of
        <v-link to='https://en.wikipedia.org/wiki/Generating_function'>generating functions</v-link>
        to avoid using the modulo operator... as an arbitrary restriction that I thought was pretty fun.
    </p>

    <p class='p-thin p-note'>
        The generating functions represented each prime number, where every index contained 0 unless it was a multiple of the prime.
        Building these generating functions lazily and incrementally, I avoided the modulo and division entirely.
    </p>

    <p class='p-wide p-text'>
        I have also done some other parts of similar problems sets.
        There is a really good set of problems that gets ported around from one language to the next called
        <v-link to='http://www.ic.unicamp.br/~meidanis/courses/mc336/2006s2/funcional/L-99_Ninety-Nine_Lisp_Problems.html'>L-99</v-link>,
        <span class='p-note'>which focuses on Lisp</span>.
        I have done about half of each
        H-99 <span class='p-note'>(Haskell)</span>,
        P-99 <span class='p-note'>(Prolog)</span>,
        and S-99 <span class='p-note'>(Scala)</span>.
    </p>

</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'ProjectEuler',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
