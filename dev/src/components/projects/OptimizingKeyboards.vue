<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Optimizing Gesture Keyboards for Clarity, Done Dirt Cheap
        </h1>
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
            <v-link to='https://www.youtube.com/watch?v=obAlmLLD0O0'>gesture typing</v-link>
            is in apps like
            <v-link to='https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin'>Gboard</v-link>
            and
            <v-link to='https://play.google.com/store/apps/details?id=com.touchtype.swiftkey'>SwiftKey</v-link>.
            I use gesture typing regularly, because it offers speed while not restricting vocabulary the way predictive input methods do.
            I decided I would improve this shortcoming of gesture typing by finding a method for optimizing keyboard layouts specifically to reduce error rates.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-wide p-text'>
            I had the project ideas, did the research into existing work, created the theory &amp; algorithms, and implemented the software required to test a new method of optimizing keyboard layouts for gesture clarity.
            This new method is designed to be extremely fast by comparison to existing methods, because it is intended to run on a phone and use an individual user’s vocabulary, so a keyboard layout is found for <strong>you</strong> not for the language you speak.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-wide p-text'>

        </p>

        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>


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

<style lang="scss" scoped>
.strike {
    text-decoration: line-through;
}
</style>
