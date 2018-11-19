<template>
<project-template name='ArchLinux'>
    <template slot='intro'>
        <p class='p-wide p-text'>
            I am in the approximately 1.5% to 2% of people that use Linux as their primary operating system on their desktop/laptop.
            I personally use the spin of Linux called
            <a class='p-link' href='https://www.archlinux.org/'>Arch Linux</a>.
            There are a couple of reasons for this, primary among them is the extra flexibility &amp; freedom it affords me in day to day tasks.
            Though, tt doesn't come without work though, as few things in Arch Linux come preconfigured.
            Using Arch Linux every day has become a pretty great learning experience about how software is packaged and deployed.
        </p>
    </template>

    <template slot='what'>
        <p class='p-wide p-text'>
            Arch Linux's main difference to other Linux distributions is that it is rolling release and quick to adopt new standards, and as such it is always up to date... but it might break stuff.
            I use Arch Linux almost exclusively for personal computing, and as such I have had to learn a few things in order to function reliably.
        </p>

        <ul class='p-wide p-list'>
            <li>I've had to be very organized in the way I customize my computer, so that if something breaks it can be fixed easily</li>
            <li>I've become <strong>very</strong> comfortable with the commandline</li>
            <li>I've, on occassion, had to identify and fix many cryptic errors... typically in commercially supported products.</li>
            <li>
                I've become very good at utilizing documentation
                <em class='p-note'>
                    Arch Linux has
                    <a class='p-link' href="https://wiki.archlinux.org">awesome documentation</a>
                </em>
            </li>
        </ul>

        <p class='p-thin p-note'>
            Getting better at using written documentation has been really good for me, especially considering I have
            <a class='p-link' href="https://en.wikipedia.org/wiki/Dyslexia">dyslexia</a>.
        </p>
    </template>

    <template slot='why'>
        <p class='p-wide p-text'>
            I think my time spent in Linux has been really informative, teaching me all sorts of things about computers that I never knew... or even knew enough to ask about when I used Windows as my primary operating system.
        </p>

        <p class='p-wide p-text'>
            Overall, I think it has been another good learning experience that has empowered me with new knowledge and skills I would not have otherwise acquired.
        </p>

        <p class='p-wide p-text'>
            Using Linux has even been an experience in UX and UI design.
            The desktop environment I use is called KDE, and it is extremely powerful but... poorly configured out of the box.
            I spent a long time creating an environment for myself that optimized my own workflow, without creating something other people couldn't use if they had to... and people have had to use my computer before.
        </p>

        <p class='p-wide p-text'>
            I even set up my own touch gestures on my laptop.
            Which, turned out to be pretty funny.
            When Windows 10 came around and I first used it... I realized Windows UI team had settled on the exact same gestures doing the exact same things in Windows as I had setup in KDE.
        </p>

        <p class='p-thin p-note'>
            I will gladly admit I was impressed with myself, coming up with the same set of interactions in a matter of hours that took a team months or years of user testing to settle on.
        </p>
    </template>

    <template slot='how'>
        <p class='p-wide p-text'>
            Using Linux isn't all that hard actually.
            It just involves having some
            <a class='p-link' href="https://en.wikipedia.org/wiki/Neuroplasticity">neural plasticity</a>.
            I often put myself in situations where I am forced to learn new tools, and it is always hard but I always come out more skilled and capable of learning yet more new things.
        </p>
        <p class='p-thin p-note'>
            For instance, while I was learning Linux I also taught myself dvorak, Emacs, git, and C++ all at the same time... because I am not one to miss an opportunity for growth.
        </p>

        <p class='p-wide p-text'>
            I think the biggest asset toward learning to use Linux was getting better at using documentation, and being willing to make mistakes.
            I still make mistakes when working with my computer, and I think everyone does regardless of what operating system they use, the difference being that I have learned to cope with mistakes and quickly recover from them.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";

export default Vue.extend({
  name: "ArchLinux",
  components: {
      'project-template': ProjectTemplate,
      'v-carousel': Carousel
  }
});
</script>