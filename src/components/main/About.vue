<template>
<div class='main-content'>
    <collapse title='The Short Version'
              :initShow='true'>
        <p class='u-para'>
            Hello! My name is Lief Swanson.
            I am a student of software engineering and user centric design.
            I am nearly finished a double major at SFU for both of these disciplines.
        </p>

        <p class='u-para'>
            One thing people often note about me is I am an information sponge.
            I try to learn things no matter what I am doing, and I have a knack for applying the knowledge I collect in novel ways.
        </p>

        <p class='u-para'>
            I live to solve problems.
            It's even better when there is a reason I am solving the problem!
            Ultimately my goal is to make things that people enjoy using.
            I hope to do just that as long as I can through design and software engineering.
        </p>
    </collapse>
    <collapse title='My Education'>
        <p class='u-para'>
            I have been going to SFU (Simon Fraser University) for about eight years.
            The reason it has been so long is in addition to a couple of set backs in my personal life, and I am going for two degrees.
            I'm working away at a BSc from a program called SoSy (Software Systems) and a BA in a program called IAT (Interactive Arts and Technology).

        </p>

        <p class='u-para'>
            I don't like to think of myself as just a software engineer or a UX/UI designer, but rather as mashup of the two.
            Though, to be fair my skills probably lie a little closer to the computer science side of things.
        </p>

        <p class='u-para'>
            I am also working on publishing some self-directed research and I have volunteered in a few labs helping complete other peoples' research.
        </p>
    </collapse>
    <collapse title='My Skills'>
        <p class='u-para'>
            I spend a lot of time on my computer, for both work and play.
            So as a necessity I have built up quite the arsenal of skills with a computer.
        </p>

        <p class='u-para'>
            I am always teaching myself new skills;
            be it a new programming language, a new design tool, or some little application or trick for KDE & Arch Linux.
            Here is an incomplete list of some of the tools I have used frequently enough in the recent past to be comfortable with:
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
                            'LaTeX'
                        ]"
                        :key='item'>
                        <div class='item'>{{item}}</div>
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
                        <div class=item>{{item}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </collapse>
    <collapse title='My Hobbies'>
        <p class='u-para'>
            Swimming is a thing I love to do in order to relax and get some exercise.
            I am not much for land sports, but in the water I feel right at home.
            I can swim laps for literally hours, while I just think about things.
        </p>
        <p class='u-para'>
            I am pretty big on video games, especially ones that provide an intellectual challenge or a story worthy of escapism.
            My top five games of all time are:


            <ol class='list emphasized'>
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
                    <i class='low'>by Mojang and <b>many</b> modders</i>
                </li>
                <li>
                    Planetary Annihilation : Titans
                    <i class='low'>by Uber Entertainment</i>
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
            I also like movies, TV shows, and YouTube videos;
            sometimes even bad ones! I won't give you a list of my top five...
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

.main-content {
    max-width: $small-size;
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
