<template>
<div class='main-content'>
    <collapse title='About Me'
              initShow
              about>
        <p class='u-para'>
            Hi!
            My name is Lief Swanson.
        </p>
        <p class='u-para'>
            I am a
            <router-link class='a-link' exact to='/projects/sosy'>software engineer</router-link>
            and
            <router-link class='a-link' exact to='/projects/siat'>designer</router-link>
            but my interests don't end there.

            I also have knowledge of and aptitude for
            <router-link class='a-link' exact to='/projects/cog-sci-lab'>science</router-link>,
            <router-link class='a-link' exact to='/projects/project-euler'>math</router-link>,
            <router-link class='a-link' exact to='/projects/recursive-plug'>user interaction</router-link>,
            <router-link class='a-link' exact to='/projects/photography-2014-summer'>photography</router-link>,
            <router-link class='a-link' exact to='/projects/teachers-assistant'>teaching</router-link>,
            history, philosophy (mostly ethics), and a few other disparate subjects.
            I like learning and problem solving for their own sakes, but I also see them as a means to improving the lives of individuals.
        </p>

        <p class='u-para'>
            My variety of interests is part of a life-long journey to emulate one of my heroes
            <a class='a-link' href='https://en.wikipedia.org/wiki/Leonardo_da_Vinci'>Leonardo da Vinci</a>.
            With any luck, I will end up even a fraction as learned, well-rounded, inquisitive, and tenacious as he was.
            His ability to pull knowledge from separate fields into cohesive solutions was astounding, and something I think is under utilized in the modern world's emphasis on specialization.
        </p>

        <p class='u-para'>
            Not everything in my life is problem solving and learning; I am an understanding and friendly person who really values good conversations with passionate people.
            I like to work closely alongside others who can help me grow, and are also looking to become better versions of themselves.
            I find my best work comes from collaboration; even going so far as to be a big fan of
            <a class='a-link' title='A software development technique where two people work from the same computer at the same time in order to come up with better solutions and implementations than either would alone given twice the time.' href='https://en.wikipedia.org/wiki/Pair_programming'>pair programming</a>.
        </p>
    </collapse>

    <collapse title='My Education'
              about>
        <p class='u-para'>
            I went to <a class='a-link' title='Simon Fraser University' href='https://www.sfu.ca'>SFU</a> and did two degrees concurrently: a Bachelor's of Science in
            <router-link class='a-link' exact to='/projects/sosy'>Software Systems</router-link>
            and a second Bachelor's of Science in
            <router-link class='a-link' exact to='/projects/siat'>Interactive Technologies</router-link>.
        </p>

        <p class='u-para'>
            I studied both, because it made perfect sense to me.
            They are closely related fields, but seldom do the two meet within one person.
            I think that software implementation and interaction design are two sides of the same coin, and it doesn't make sense for one to be ignorant of the other.
            They both work toward the same goal of solving difficult problems to make people's lives easier.
        </p>

        <p class='u-para'>
            I am also currently working toward publishing some
            <router-link class='a-link' exact to='/projects/optimizing-keyboards'>self-directed research</router-link>
            and I have volunteered in a few labs helping complete
            <router-link class='a-link' exact to='/projects/cog-sci-lab'>other peoples' research</router-link>.
        </p>
    </collapse>
    <collapse title='My Skills'
              about>
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
              overscroll
              about>
        <p class='u-para'>
            I love to swim, in order to relax and get some exercise.
            I am not much for land sports, but in the water I feel right at home.
            I can swim laps for literally hours, while I just think about things.
        </p>
        <p class='u-para'>
            I am pretty big on video games, I find game developers and the work they create inspiring.
            There is actually a fair amount to be learned from video games, when viewed through the right lens; I consider many of the
            <router-link class='a-link' exact to='/projects/video-games'>games I have played</router-link>
            to be a valuable part of my own experience in software and user interaction.
            I think the amazing work they do is partly why I worked to obtain two bachelor's of science in interaction design and computer science.
            My top five games of all time are:
        </p>

        <ol class='list emphasized'>
            <li>
                Hellblade : Senua's Sacrifice
                <em class='low'>by Ninja Theory</em>
            </li>
            <li>
                The Witcher 3 : Wild Hunt
                <em class='low'>by CD Projekt Red</em>
            </li>
            <li>
                Total War : Shogun 2
                <em class='low'>by Creative Assembly</em>
            </li>
            <li>
                Grim Dawn
                <em class='low'>by Crate Entertainment</em>
            </li>
            <li>
                Minecraft (modded beyond all recognition)
                <em class='low'>by Mojang and <strong>many</strong> modders</em>
            </li>
        </ol>

        <p class='u-para'>
            I have
            <a class='a-link' href="https://en.wikipedia.org/wiki/Dyslexia">dyslexia</a>,
            so I can find reading for very long periods exhausting.
            However, that doesn't stop me from enjoying a good book!
            I have listened to
            <router-link class='a-link' exact to='/projects/audio-books'>many audio books</router-link>.
            My top five are nearly impossible to pick... but here are five really good ones that I never heard of before I decided to read them:
        </p>

        <ol class='list emphasized'>
            <li>
                The Etymologicon : A Circular Stroll Through the Hidden Connections of the English Language
                <em class='low'>by Mark Forsyth</em>
            </li>
            <li>
                A History of the World in 6 Glasses
                <em class='low'>by Tom Standage</em>
            </li>
            <li>
                Misbehaving : The Making of Behavioural Economics
                <em class='low'>by Richard Thaler</em>
            </li>
            <li>
                The Drunkard's Walk : How Randomness Rules Our Lives
                <em class='low'>by Leonard Mlodinow</em>
            </li>
            <li>
                The Half Has Never Been Told : Slavery and the Making of American Capitalism
                <em class='low'>by Edward E. Baptist</em>
            </li>
        </ol>

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
    font-size: 1.25rem;
    color: $about-swatch;
    font-weight: bold;
    margin-bottom: 2rem;
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
