<template>
<project-template name='OptimizingKeyboards'>
    <template slot='intro'>
        <div class='p-wide p-text'>
            <p class='strike'>
                <strong>Sort fir the tips; my keyboard is adding yup.</strong>
            </p>
            <p>
                <strong>Sorry for the typos; my keyboard is acting up.</strong>
            </p>
        </div>

        <p class='p-wide p-text'>
            If the above looks familiar to you, then you know how unreliable
            <a class='p-link' href='https://www.youtube.com/watch?v=obAlmLLD0O0'>gesture typing</a>
            is, in apps like
            <a class='p-link' href='https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin'>Gboard</a>
            and
            <a class='p-link' href='https://www.microsoft.com/en-us/swiftkey'>SwiftKey</a>.
            To try and solve this problem, I developed a new method, from scratch, for evaluating how likely it is that typos would occur on a given keyboard while gesture typing.
        </p>

        <p class='p-thin p-note'>
            I use gesture typing almost exclusively on my mobile devices; it improves typing speed without crippling vocabulary the way predictive methods do.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            I had the project ideas, did the research into existing work, created new algorithms &amp; theory, and implemented the software.
            All of this was for the purpose of testing a new method of optimizing keyboard layouts for gesture clarity.
            This new method is designed to be extremely fast by comparison to existing methods, because it is intended to run on a phone and use an individual user’s vocabulary, so a keyboard layout is found for <strong>you</strong> not for the language you speak.
        </p>

        <p class='p-note p-thin'>
            Gesture clarity is a term defined in a
            <a class='p-link' href='https://dl.acm.org/authorize.cfm?key=N97906'>paper</a>,
            by Smith, Bi, and Zhai.
            This paper details an approach for calculating gesture clarity that I was trying to improve upon.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            This project was done under the
            <a class='p-link' href='http://www.sfu.ca/dean-gradstudies/awards/undergraduate-awards/NSERC.html'>NSERC USRA at SFU</a>.
            I was given free reign to do any project that interested me.
            I had dozens of ideas, and had to quickly narrow things down to a single idea that was achievable in one semester.
            The process of repeated refinement was an extremely freeing experience.
            I like taking something all the way from a very ethereal idea right through to implementation.
            Typically, I am only ever given the opportunity to do a very narrowly defined task, but this was quite a different experience, and I much preferred it.
        </p>

        <p class='p-thin p-note'>
            The NSERC USRA grant is done with a professor sponsoring an undergrad student.
            Some students participate in their sponsor's work... but my sponsor
            <a class='p-link' href='https://www.sfu.ca/computing/people/faculty/binaybhattacharya.html'>Binay Bhattarachya</a>
            gave me free reign.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            There were several stages to implementing my idea for finding better keyboard layouts for gesture typing.
            First I narrowed down one solid idea, instead of 20 possibly viable ones.
            Then I broke my idea down into a sequence of steps that would result in the outcome I wanted.
            Next I proved the theoretical validity of as many steps as I could using careful mathematical proofs.
            Finally, I needed to prove empricially the validity of my idea with an implementation and some hard data.
        </p>
        <p class='p-wide p-text'>
            In the end, I chose to look at the way words are constructed.
            Using similarities in the structures of words I figured out which keys should be physically separate from one another on in any given keyboard layout.
        </p>
        <p class='p-wide p-text'>
            I did this by comparing every pair of words using the
            <a class='p-link' href='https://en.wikipedia.org/wiki/Needleman–Wunsch_algorithm'>Needleman-Wunsch algorithm</a>.
            This allowed me to isolate particular similar structures found in pairs of words.
            I did not use Needleman-Wunsch to calculate
            <a class='p-link' href="https://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein distance</a>
            I just wanted the words aligned to find common structures.
        </p>
        <p class='p-thin p-note'>
            Needleman-Wunsch was originally designed for comparing protein sequences, but it also works well as a component of spell check!
        </p>
        <p class='p-wide p-text'>
            Those structures could be represented by a few simple geometric structures, requiring only line-line intersection, and point-point distance in the
            <a class='p-link' href="https://en.wikipedia.org/wiki/Cartesian_coordinate_system">Cartesian plane</a>.
            Using these structures, it is possible to approximate how likely a typo is to occur given a particular keyboard and vocabulary.
        </p>
        <p class='p-wide p-text'>
            Once approximations for how error prone-ness of keyboard layouts are found,
            <a class='p-link' href="https://en.wikipedia.org/wiki/Gradient_descent">gradient descent</a>
            or other optimization techniques can be applied.
        </p>
        <p class='p-wide p-text'>
            The reason this technique is so much faster than other techniques is it does not require simulating inputs given a particular keyboard layout.
            The simulation of inputs creates a huge amount of work to do in evaluating each keyboard layout.
            My technique avoids this problem, by doing most of the input simulation using weaker, keyboard-agnostic preprocessing methods.
            This weaker form of input simulation is done using the comparison of similar word structures.
            As it turns out there are not many unique geometric structures that arise from word similarities, meaning many of ambiguities from similar gestures can be treated as identical.
            These weaker input simulations can then be generalized over any given keyboard layout, and only a few cheap measurements need to be done for each keyboard.
        </p>
        <p class='p-thin p-note'>
            Even better, if we use gradient descent, most of the work of estimating a keyboard layout's clarity is already done, because it is very similar to a keyboard we already evaluated.
            This is much less straightforward to do in older methods... but theoretically possible.
        </p>
        <p class='p-wide p-text'>
            Once the preprocessing is done, my method takes
            <a class='p-link' href="https://en.wikipedia.org/wiki/Big_O_notation">O(alphabet_size<sup>3</sup>)</a>
            time to evaluate the clarity of a keyboard layout, where as older methods take
            O(dictionary_size<sup>2</sup>)
            time.
            While theoretically this is worse
            <a class='p-link' href="https://en.wikipedia.org/wiki/Computational_complexity_theory">computational complexity</a>,
            in practice it is much faster; alphabets are <strong>significantly</strong> smaller than dictionaries... except in languages like Chinese, which gesture typing doesn't work for anyway!
        </p>
        <p class='p-thin p-note'>
            While it is true that my preprocessing takes O(dictionary_size<sup>2</sup>), the preprocessing only needs to be done once, not for every keyboard.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";

export default Vue.extend({
  name: "OptimizingKeyboards",
  components: {
      'project-template': ProjectTemplate
  }
});
</script>

