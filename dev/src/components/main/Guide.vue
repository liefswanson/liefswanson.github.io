<template>
<div class='main-content'>
    <collapse title='Guide Intro'
              guide
              initShow>
        <p class='u-para'>
            This page contains my tone and voice guide, a set of rules that I used when writing the content for this site.
            While this assignment only has 2 projects as part of the criteria, I rewrote the entire site using this guide.
            The main thing that is I have not yet gathered what I consider enough images for all the projects I worked on.
        </p>
    </collapse>

    <collapse title='Voice'
              guide>

        <p class='u-para'>
            Always write in first person; third person hinders readability unnecessarily.
            Refer to myself as I, not “you”.
            I am not trying to boost the confidence of the reader by having them live vicariously through me, and referring to myself as “you” in a sort of ethereal sense may work against that goal.
        </p>

        <p class='u-para'>
            Present or past tense, never future tense.
            Future tense implies the possibility of never happening.
            Past tense is preferred over present tense, because present tense gives the impression that I am bad at finishing the things I start.
        </p>

        <p class='u-para'>
            Humour should be cheeky but not rude.
            Whenever the opportunity to incorporate some witty humour becomes apparent, I should seize it posthaste.
            A wasted joke opportunity is a tragic shame. In equal measure, forced jokes should be avoided.
        </p>

        <p class='u-para'>
            Keep it relevant! When / where I did something isn’t all that important, nor is who I did it with.
            What matters is why and and what I learned.
            Showing off that I know what I am talking about comes in the how section.
        </p>

        <p class='u-para'>
            All projects are accomplishments, and should be framed as such.
            It isn’t the project that is cool, it is me that is cool for having completed the project.
        </p>

        <p class='u-para'>
            The ultimate goal is to present myself as a polymath, renaissance man, or “strong generalist”.
            Anything not working directly toward this goal should likely be trimmed or delegated to an area of optional reading.
            However, the optional readings should not be neglected; they can be used to display my wide range of knowledge… because flatly claiming to be a renaissance man might make me come off as a prick…
        </p>

        <p class='u-para'>
            A strong vocabulary is encouraged, but words should be accessible.
            I write at a high reading level, not an obscure reading level.
        </p>
    </collapse>

    <collapse title='Tone'
              guide>
        <p class='u-para'>
            While it is generally not good to use present or future tense, they are acceptable in parts of the site where the core audience are people actually interested in me, and not just in hiring me.
            <strong>These places would include, but may not be limited to:</strong>
        </p>

        <ul class='list'>
            <li>The hobbies portion of the about page</li>
            <li>The ongoing projects section</li>
            <li>Some author's notes</li>
        </ul>

        <p class='u-para'>
            Not all projects are technical achievements, some are much more subtle than that.
            It is okay for a project to not be about the tools and the work, and more about the things that were done incorrectly.
            It is still important to illustrate growth as a person, not just technical prowess.
        </p>
    </collapse>

    <collapse title='Mechanics'
              guide
              overscroll>

        <p class='u-para'>
            Author’s notes are designed for anything that doesn’t fit into the flow of story a project write-up is trying to achieve.
            They might be important information for the curious mind, but they are not needed in order to walk through the whole story.
        </p>
        <p class='u-para'>
            Every project should have at least one picture.
            Graphs are not pictures.
            Everything must be considered from the perspective of the reader.
            Most readers don’t have my depth/breadth of knowledge, nor the inclination to tackle every interesting subject they are faced with.
            Even if they do, odds are they don’t have my exact background.
            If they do have my exact background, they wouldn’t need to read anything I write.
        </p>
        <p class='u-para'>
            <strong>Every project should have 5 main sections:</strong>
        </p>
        <ol class='list'>
            <li>The content of the card from the projects grid, for consistency of navigation</li>
            <li>An introduction</li>
            <li>what my role was</li>
            <li>why the project is important to me</li>
            <li>how I tackled the project</li>
        </ol>

        <p class='u-para'>
            Typically, these sections are ordered smallest to largest.
            An introduction should be able to be understood at a glance.
            The what and why sections should be able to be read and understood in about 20-30 seconds by an average reader.
            Likely, it would take me about the same amount of time, after having already read it a few times.
            It may be worth timing myself reading projects to make sure they can be taken in within a short enough amount of time.
            The how section can be much longer if needed, just make sure it is easily skipped. Don’t leave any questions about what or why unanswered by the time the reader gets to how.
        </p>

        <p class='u-para'>
            Triple and quadruple-checking grammar is really important.
            Grammar should be done in several separate passes, long after the content has been written.
            Getting a different person to help is highly recommended.
            It is okay to modify grammar while working on the content initially, but don’t aim for perfection —  it detracts from narrative cohesion, as it splits attention.
        </p>

        <p class='u-para'>
            Numbers should be in numerals, because it is hard to imagine numbers when they are spelled out in english.
        </p>

    </collapse>
</div>
</template>

<style lang="scss" scoped>
@import '@/style/master.scss';

.main-content {
    max-width: $small-size;
    margin: auto;
}

.list {
    margin-left: 2rem;
    margin-bottom: 2rem;
    color: $dark;
    font-size: 1.25rem;
}

.g-link { @include link($guide-swatch); }
</style>

<script lang="ts">
import Vue from 'vue';
import Collapsible from '@/components/util/Collapsible.vue';

export default Vue.extend({
    name: "Guide",
    components: {
        'collapse': Collapsible
    },

});
</script>