<template>
<div class='main-content'>
    <collapse title='Hello!'
              :initShow='true'>
        <p class='u-para'>
            My name is Lief Swanson.
            I am a <a class='a-link' title='Person with a wide range of knowledge or learning.' href='https://simple.wikipedia.org/wiki/Renaissance_man'>polymath</a>.
            I have knowledge of and aptitude for: software engineering, design, user interaction, science, math, visual art, history, politics, philosophy (especially ethics), teaching, and even a little creative writing.
            If I don't know much about a subject, it is because I am busy learning other subjects first.
        </p>

        <p class='u-para'>
            I live to solve problems, because every unsolved problem is an opportunity to learn something.
            I think in our modern information-dense world there is no valid excuse to avoid learning a wide variety of new things all the time.
        </p>
    </collapse>
    <collapse title='My Education'>
        <p class='u-para'>
            I went to <a class='a-link' title='Simon Fraser University' href='https://www.kde.org/'>SFU</a> and did two degrees concurrently: a Bachelor's of Science in Computer Science and a second Bachelor's of Science in Interactive Design.
        </p>

        <p class='u-para'>
            I am also currently trying to publish some self-directed research and I have volunteered in a few labs helping complete other peoples' research.
            Check out the <router-link class='a-link' exact to='/projects'>projects section</router-link> to see more on that!
        </p>
    </collapse>
    <collapse title='My Skills'>
        <p class='u-para'>
            I spend a lot of time on my computer, for both work and play.
            So as a necessity I have built up quite the arsenal of skills with a computer.
        </p>

        <p class='u-para'>
            I am always teaching myself new skills;
            be it a new programming language, a new design tool, or some little application or trick for
            <a class='a-link' href='https://www.kde.org/'>KDE</a>
            &
            <a class='a-link' href='https://www.archlinux.org/'>Arch Linux</a>.
            Here is an incomplete list of some of the languages and tools I have used frequently enough in the recent past to want to brag about it:
        </p>

        <div class='columns'>
            <div>
                <h2 class='list-name'>languages</h2>
                <ul class='list'>
                    <li v-for="item in
                        [
                            'Kotlin',
                            'Java',
                            'Python',
                            'English',
                            'C#',
                            'C',
                            'C++',
                            'Golang',
                            'Haskell',
                            'TypeScript',
                            'JavaScript',
                            'HTML & CSS',
                            'Sass & SCSS',
                            'MATLAB & Octave',
                            'SQL',
                            'Fish',
                            'Bash',
                            'LaTeX',
                            'Polish'
                        ]"
                        :key='item'>
                        <span class='item'>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class='list-name'>tools</h2>
                <ul class='list'>
                    <li v-for="item in
                        [
                            'Linux',
                            'Windows',
                            'Git',
                            'GNU coreutils',
                            'Make',
                            'CMake',
                            'Gradle',
                            'Ant',
                            'Webpack',
                            'IntelliJ',
                            'Visual Studio',
                            'VSCode & Atom',
                            'Eclipse',
                            'Emacs',
                            'Photoshop & GIMP',
                            'Illustrator & Inkscape',
                            'InDesign & Scribus',
                            'Lightroom & Darktable',
                            'Unity',
                            'FontForge',
                            'Acrobat',
                            'Audacity'
                        ]"
                        :key='item'>
                        <span class=item>{{item}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </collapse>
    <collapse title='My Hobbies'
              overscroll>
        <p class='u-para'>
            I love to swim, in order to relax and get some exercise.
            I am not much for land sports, but in the water I feel right at home.
            I can swim laps for literally hours, while I just think about things.
        </p>
        <p class='u-para'>
            I am pretty big on video games, I find game developers and the work they create inspiring.
            I think the amazing work they do is partly why I worked to obtain two bachelor's of science in interaction design and computer science.
            My top five games of all time are:


            <ol class='list emphasized'>
                <li>
                    Hellblade : Senua's Sacrifice
                    <i class='low'>by Ninja Theory</i>
                </li>
                <li>
                    The Witcher 3 : Wild Hunt
                    <i class='low'>by CD Projekt Red</i>
                </li>
                <li>
                    Total War : Shogun 2
                    <i class='low'>by Creative Assembly</i>
                </li>
                <li>
                    Grim Dawn
                    <i class='low'>by Crate Entertainment</i>
                </li>
                <li>
                    Minecraft (modded beyond all recognition)
                    <i class='low'>by Mojang and <strong>many</strong> modders</i>
                </li>
            </ol>
        </p>

        <p class='u-para'>
            I have dyslexia, so I can find reading for very long periods exhausting.
            However, that doesn't stop me from enjoying a good book!
            I have listened to a pretty good selection of audio books.
            My top five are nearly impossible to pick... but here are five really good ones that I never heard of before I decided to read them:


            <ol class='list emphasized'>
                <li>
                    The Etymologicon : A Circular Stroll Through the Hidden Connections of the English Language
                    <i class='low'>by Mark Forsyth</i>
                </li>
                <li>
                    A History of the World in 6 Glasses
                    <i class='low'>by Tom Standage</i>
                </li>
                <li>
                    Misbehaving : The Making of Behavioural Economics
                    <i class='low'>by Richard Thaler</i>
                </li>
                <li>
                    The Drunkard's Walk : How Randomness Rules Our Lives
                    <i class='low'>by Leonard Mlodinow</i>
                </li>
                <li>
                    The Half Has Never Been Told : Slavery and the Making of American Capitalism
                    <i class='low'>by Edward E. Baptist</i>
                </li>
            </ol>
        </p>

        <p class='u-para'>
            I also like movies, I won't give you a list of my top five...
            but my favourite movie of all time is <b class='high'>Cloud Atlas</b> <i class='low'>by The Wachowskis</i>.
            There is something about the way the story is told in combination with the reuse of actors, cinematography, and editing that I think makes it a true masterpiece...
            even if most people don't agree.
        </p>
    </collapse>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Collapsible from '@/components/util/Collapsible.vue';

export default Vue.extend({
    name: "About",
    watch: {
        $route(to, from) {
            window.scrollTo(0, 0);
        }
    },
    components: {
        'collapse': Collapsible
    },

});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.a-link {
    @include link($about-swatch);
}

.main-content {
    max-width: $small-size;
    margin: auto;
}

.columns {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include on-phone {
        grid-template-columns: 1fr;
    }
}

.list-name {
    padding: 1rem;
    padding-left: 0;
    padding-bottom: 0;
}

.list {
    padding-top: 1rem;
    padding-left: 2rem;
    color: $about-swatch;
    font-weight: bold;
}

.item {
    color: $dark;
    font-weight: normal;
    font-size: 1.1em;
}

.low {
    color: $light;
    font-weight: normal;
    font-size: 0.8em;
}

.high {
    color: $about-swatch;
}

.emphasized li {
    padding-bottom: 0.5rem;
}

</style>
