<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Optimizing Gesture Keyboards for Clarity, Done Dirt Cheap
        </h1>
        <p class='p-wide p-text'>
            I had the opportunity to do a sort of self directed research project under the
            <v-link to="http://www.sfu.ca/dean-gradstudies/awards/undergraduate-awards/NSERC.html">Canadian NSERC USRA at SFU</v-link>.
            I used this opportunity to tackle a problem I deal with every day; the terrible error rate on gesture keyboards like
            <v-link to="https://www.microsoft.com/en-us/swiftkey?activetab=pivot_1%3aprimaryr2">SwiftKey</v-link>
            and
            <v-link to="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_CA">Gboard</v-link>.
        </p>

        <p class='p-note p-thin'>
            If you are unfamiliar with gesture keyboards, and trying to optimize them, I recommend checking out this
            <v-link to="https://www.youtube.com/watch?v=0PHjN4GjSi8">video</v-link>...
            or read the
            <v-link to='http://www.cs.columbia.edu/~brian/publications/optimizing_keyboards.html'>paper</v-link>
        </p>

        <p class='p-wide p-text'>
            Explaining all the specifics here would probably be too much to read, but the concept is pretty easy to cover.
            When a gesture keyboard tries to determine what word was being gestured for, it compares the gestures for each possible word, to the gesture given.
            The closest one is then chosen, after taking into consideration the user's history and preferences.
            The problem here is, many words have very similar gestures or sometimes identical gestures.
            I set out to fix this in the most obvious way I could think to.
        </p>

        <p class='p-wide p-text'>
            If you followed the link in my note at the top there, you would know about the main method already used in gesture keyboard clarity optimization.
            The biggest problem with the existing method, is it takes a <b>very</b> long time.
            If you take into consideration the number of words in the dictionary, square that, you are now in the ballpark of how many comparisons need to be done to rate a single keyboard for gesture clarity.
        </p>

        <p class='p-note p-thin'>
            In other words, scoring a single keyboard takes O(n<sup>2</sup>) time, which is as bad as using <v-link to='https://en.wikipedia.org/wiki/Bubble_sort'>bubble sort</v-link> on the entire dictionary, for every single keyboard.
        </p>

        <p class='p-wide p-text'>
            Getting around this restriction is pretty difficult, so instead I went about changing the goal.
            Rather than performing this analysis directly, I created a new <v-link to='https://en.wikipedia.org/wiki/Heuristic'>heuristic</v-link> that matched the old heuristic closely.
            Instead of comparing every word against every other word for each keyboard, we do this step once, analyzing the lexical structures of the words.
            Based on what parts of the words are similar, we can extract the features which must differ for gestures to be different.
            This reduces the time to evaluate a keyboard for its clarity down to the number of letters in the alphabet cubed.
        </p>

        <p class='p-note p-thin'>
            This actually makes the
            <v-link to='https://en.wikipedia.org/wiki/Asymptotic_computational_complexity'>asymptotic complexity</v-link>
            worse... if we have no way of comparing the number of letters in the alphabet to words in dictionary.
            However, in practice this theoretical problem is a non-starter.
        </p>

        <img src="/static/optimizing-keyboards/speed.png"
             alt="speed comparison graph"
             class='p-wide-grow p-image'>

        <p class='p-note p-thin-grow'>
            Rough comparison of the speed of my heuristic and the one made by Smith.
            The scale in this graph is logarithmic, like the
            <v-link to='https://en.wikipedia.org/wiki/Richter_magnitude_scale'>Richter scale</v-link>
            or
            <v-link to='https://en.wikipedia.org/wiki/Decibel'>Decibels</v-link>.
            For 3000 keyboards, with a dictionary of 8000 words, it took <b>12 hours</b> for my computer to evaluate using my version of Smith's method, and less than <b>20 seconds</b> using my method.

            <br> <br>
            The mysterious <v-link to='http://www.cs.columbia.edu/~brian/index.html'>Smith</v-link> mentioned here and in the graph is the the person that presents in that
            <v-link to="https://www.youtube.com/watch?v=0PHjN4GjSi8">video</v-link>
            and wrote the
            <v-link to='http://www.cs.columbia.edu/~brian/publications/optimizing_keyboards.html'>paper</v-link>!
        </p>

        <p class='p-wide p-text'>
            In the end, it turns out that my heuristic is pretty close to the analysis we would otherwise perform.
            Which means, that it is a good method for filtering out bad keyboards. Sometimes we may discard a good keyboard, but most of the time the keyboard wasn't worth considering.
            Moreover, throwing away a few good keyboards doesn't really matter, because there are lots and lots of keyboards.
            There are plenty of fish in the sea as it were.
        </p>

        <p class='p-note p-thin'>
            By lots and lots of keyboards I mean 26 factorial... 400,000 times more than the number of
            <v-link to='https://helios.gsfc.nasa.gov/qa_star.html#howmany'>stars in the observable universe</v-link>.
            There are infinitely more than that if we don't stick to the three row design of
            <v-link to=''>QWERTY</v-link>.
        </p>

        <img src='/static/optimizing-keyboards/correlation.png'
             alt='correlation graph'
             class='p-wide-grow p-image'>

        <p class='p-note p-thin-grow'>
            Correlation between my heuristic and my implementation of Smith's.
            Each data point is a keyboard, Y is the ranking according to Smith's, and X is the ranking according to mine.
            On both axes, a bigger number means the keyboard is better.
            A better ranking here doesn't say how much better a keyboard is, just that it is better.
            Just like when you say some sports team is the best in their league, you don't necessarily say by how much, just that they are the best team.
        </p>



        <p class='p-wide p-text'>
            I am working on publishing by the way, and making a keyboard that will do this optimization available via Google Play.
            I will update this page when I can provide links to those things!
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'OptimizingKeyboards',
    components: {
        'v-link': Link
    }
});
</script>


