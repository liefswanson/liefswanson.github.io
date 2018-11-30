<template>
<div class='main-content'>
    <collapse title='Citations Intro'
              citation
              initShow>
        <p class='u-para'>
            This page contains a list of citations for use in IAT339.
            This page does not exist in the production site at
            <a class='c-link' href='https://www.lief.info'>lief.info</a>.
        </p>
        <p class='u-para'>
            You can find the source for my website in the <a class='c-link' href='https://github.com/liefswanson/liefswanson.github.io/tree/iat339'>github repository</a>.
        </p>
        <p class='u-para'>
            Many of the images on this site came from websites like
            <a class='c-link' href="www.pexels.com">pexels</a>,
            <a class='c-link' href="www.unsplash.com">unsplash</a>,
            and
            <a class='c-link' href="www.pixabay.com">pixabay</a>.
            Some of the images have since been removed... I am not sure if this meant they were uploaded in violation of copyright, or as some of these stock photo sites are supported by paid stock photo companies... maybe they were removed so that future people looking would be given a paid alternative suggestion.
        </p>
        <p class='u-para'>
            You can also find links to prerendered pages of the site here, to give something to run through total validator.
            These prerendered pages are not meant to be used, just validated.
            They don't work as none of the javascript is packaged with them, so they are completely non-functional.
            There are 5 main classes of validation problems I have not been able to fix.
        </p>
        <ol class='p-list'>
            <li>The url for google fonts contains an invalid url character by design.</li>
            <li>Tags inserted by webpack (such as style and script tags) contain type attributes, which is no longer needed in the current html standard... but doesn't hurt anything at all.</li>
            <li>H1 elements are not technically top level, because they can't be given the way vue treats templates.</li>
            <li>Because my css is generated from scss, many vendor prefixes are injected that validators don't recognize.</li>
            <li>Vue injects a span with id="warning-container" before the body element once it starts, allowing it to display warnings, this will actually cause the W3C validator to stop reading the HTML, so I manually removed these in my prerendered versions.</li>
        </ol>

    </collapse>

    <collapse title='Pictures'
              citation>
        <ul class='cite-list'>
            <v-cite title='Team Project Thumbnail'
                  link='https://www.pexels.com/photo/people-notes-meeting-team-7095/'
                  description='Free stock photo.'>
                <a class='c-link' href="http://startupstockphotos.com">startupstockphotos.com</a>
            </v-cite>

            <v-cite title='Teaching Assistant Thumbnail'
                  link='https://digileaders.com/wp-content/uploads/2017/04/pexels-photo-40120.jpeg'
                  description='Free stock photo.'>
                <a class='c-link' href="https://www.pexels.com">pexels.com</a>
                No longer in library, but was item 40120.
            </v-cite>

            <v-cite title='Doctors Of BC Thumbnail'
                  link='https://www.pexels.com/photo/blue-and-silver-stetoscope-40568/'
                  description='Free stock photo.'>
                <a class='c-link' href="https://pixabay.com/en/users/DarkoStojanovic-638422/">DarkoStojanovic</a>
                via
                <a class='c-link' href="https://pixabay.com/">https://pixabay.com</a>
            </v-cite>

            <v-cite title='Sudoku Solver Thumbnail'
                  link='https://en.wikipedia.org/wiki/Sudoku#/media/File:Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg'
                  description='Wikipedia Commons photo.'>
                <a class='c-link' href="https://en.wikipedia.org/w/index.php?title=Sudoku&action=history">One of these fine Wikipedia Contributors</a>
            </v-cite>

            <v-cite title='Project Euler Thumbnail'
                  link='https://en.wikipedia.org/wiki/Leonhard_Euler#/media/File:Leonhard_Euler.jpg'
                  description='Wikipedia Commons photo, of famous painting by Jakob Emanuel Handmann.'>
                <a class='c-link' href="https://en.wikipedia.org/wiki/Jakob_Emanuel_Handmann">Jakob Emanuel Handmann</a>
            </v-cite>

            <v-cite title='Cognitive Science Thumbnail'
                  link='https://www.pexels.com'
                  description='Free stock photo.'>
                pexels, but since removed
                <a class='c-link' href="https://linguistics.utah.edu/_images/cognitive-science.jpg">alt</a>
            </v-cite>

            <v-cite title='Cognitive Science Thumbnail'
                  link='https://www.pexels.com'
                  description='Free stock photo.'>
                pexels, but since removed
                <a class='c-link' href="https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2016/10/pexels-photo-442150.jpeg?resize=400%2C250&ssl=1">alt</a>
            </v-cite>

            <v-cite title='Computer Science Thumbnail'
                  link='https://pixabay.com/en/code-coding-web-development-944499/'
                  description='Free stock photo.'>
                <a class='c-link' href="https://pixabay.com/en/users/lmonk72-731125/">Lawrence Monk</a>
            </v-cite>

            <v-cite title='Arch Linux Thumbnail'
                    link='https://www.archlinux.org/art/'
                    description='Trademark of Arch Linux, permitted for press use, derived work, forks, parody, and advocacy. NOT FOR COMMERCIAL USE.'>
                <a class='c-link' href="https://www.archlinux.org">Arch Linux Organization and Community</a>
            </v-cite>

            <v-cite title='Audiobooks Thumbnail'
                    link='https://www.pexels.com/photo/black-smartphone-and-headphones-on-a-desk-6318/'
                    description='Free stock photo.'>
                <a class='c-link' href="https://www.pexels.com/@kaboompics">kaboompics.com</a>
            </v-cite>

            <v-cite title='SIAT Thumbnail'
                    link='https://www.pexels.com/photo/arts-build-close-up-commerce-273230/'
                    description='Free stock photo.'>
                <a class='c-link' href="https://pixabay.com/en/users/picjumbo_com-2130229/">picjumbo.com</a>
            </v-cite>

            <v-cite title='Video Games Thumbnail'
                    link='https://www.lief.info/static/video-games/thumb.jpg'
                    description='Taken in game while playing the Witcher 3.'>
                <a class='c-link' href="https://en.cdprojektred.com">CDPR</a>
            </v-cite>

            <v-cite title='Audio Book covers'
                    link='https://www.audible.ca'
                    description='Taken from a selection of Audio Books that I bought on Audible.ca.'>
                Various authors, references in images.
            </v-cite>

            <v-cite title='Video Game Promotional Art'
                    link='https://www.lief.info/static/video-games/thumb.jpg'
                    description='Taken from The promotional Art of many games.'>
                Various authors, references in images.
            </v-cite>

            <v-cite title='HDR source images'
                    link='https://en.wikipedia.org/wiki/High-dynamic-range_imaging#HDR_processing'
                    description='Wikipedia commons, often used for testing HDR algorithms.'>
                Unknown
            </v-cite>

            <v-cite title='Ongoing - Sudoku Book'
                    link='https://pixabay.com/en/leisure-puzzles-sudoku-pencil-3371229/'
                    description='Free stock photo.'>
                <a class='c-link' href="https://pixabay.com/en/users/Gellinger-201217/">Gerhard Gellinger</a>
            </v-cite>

            <v-cite title='Ongoing - Polish Flag'
                    link='https://en.wikipedia.org/wiki/Flag_of_Poland#/media/File:Flag_of_Poland_(with_coat_of_arms).svg'
                    description="Wikipedia Commons, but the content depicted is a National Flag.">
                many designers for the <a class='c-link' href='https://www.premier.gov.pl/en.html'>Government of Poland</a>
            </v-cite>

            <v-cite title='Everything Else'
                    link='https://www.lief.info'
                    description="I made everything else. Some are from old projects, but some of it was made specifically for the site.">
                Me
            </v-cite>
        </ul>
    </collapse>

    <collapse title='Fonts & Icons'
              citation>
        <ul class='cite-list'>
            <v-cite title='Comfortaa'
                  link='https://fonts.google.com/specimen/Comfortaa'
                  description='A geometric font I use for the top level elements in the visual hierarchy.'>
                <a class='c-link' href='https://www.fontsquirrel.com/fonts/list/foundry/johan-aakerlund'>Johan Aakerland</a> via <a class="c-link" href='http://www.cyreal.org'>Cyreal</a>
            </v-cite>

            <v-cite title='Open Sans'
                  link='https://fonts.google.com/specimen/Open+Sans'
                  description='A classic sturdy sans-serif font I use for text meant to be read, as opposed to visually anchor elements.'>
                <a class='c-link' href='https://www.monotype.com/people/steve-matteson/'>Steve Matteson</a>
            </v-cite>

            <v-cite title='Font Awesome (Free Version)'
                  link='https://github.com/FortAwesome/Font-Awesome'
                  description='A commonly used set of icons. I use it in order to anchor my choice of icons to those that are used across a good part of the internet.'>
                  <a class='c-link' href='https://fontawesome.com'>The Font Awesome Team</a>
            </v-cite>

            <v-cite title='Phibonacci'
                  link='https://github.com/liefswanson/phibonacci'
                  description='A partially complete geometric font I made and open sourced. Used in both the favicon and logo.'>
                Me
            </v-cite>
        </ul>
    </collapse>

    <collapse title='Libraries & Code'
              citation>
        <ul class='cite-list'>
            <v-cite title='Vue.js 2.0'
                  link='https://vuejs.org'
                  description="A single page app framework similar to Facebook's React and Google's Angular. Comes packed with so many libraries I don't think I could cite them all...">
                <a class='c-link' href="https://vuejs.org/v2/guide/team.html">The VueJS Team</a>
                and
                <a class='c-link' href="https://github.com/vuejs">The Open Source VueJS Community</a>
            </v-cite>

            <v-cite title='Hammer.js'
                  link='https://hammerjs.github.io'
                  description='A gesture detection library, that I use to allow swiping out the nav bar on mobile.'>
                <a class='c-link' href="https://github.com/jtangelder">Jorik Tangelder</a>
                and
                <a class='c-link' href='https://github.com/hammerjs/hammer.js/'>The Open Source HammerJS Community</a>
            </v-cite>

            <v-cite title='Vue-Touch "next"'
                  link='https://github.com/vuejs/vue-touch/tree/next'
                  description='A wrapper for Hammer.js meant to work with Vue.js.'>
                <a class='c-link' href="https://github.com/LinusBorg">Thorsten Lünborg</a>
            </v-cite>

            <v-cite title='PDF.js'
                  link='https://mozilla.github.io/pdf.js/'
                  description='A library for rendering PDFs as HTML and CSS'>
                <a class='c-link' href="https://www.mozilla.org">The Mozilla Organization</a>
                and
                <a class='c-link' href="https://github.com/mozilla/pdf.js">The Open Source PDF.js Community</a>
            </v-cite>

            <v-cite title='Vue-PDF'
                  link='https://github.com/FranckFreiburger/vue-pdf'
                  description='A wrapper for PDF.js meant to work with Vue.js.'>
                <a class='c-link' href="https://github.com/FranckFreiburger">Franck Freilburger</a>
            </v-cite>

            <v-cite title='CSS Grid Masonry Clone'
                  link='https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb'
                  description='Some code I referenced while implementing my own version of Masonry, used in the projects grid.'>
                <a class='c-link' href="https://medium.com/@andybarefoot">Andy Barefoot</a>
            </v-cite>

            <v-cite title='Dynamically Updating Favicon'
                  link='https://gist.github.com/mathiasbynens/428626'
                  description='A gist I referenced when implementing my own dynamically updating favicon.'>
                <a class='c-link' href="https://github.com/mathiasbynens">Mathias Bynens</a>
            </v-cite>
        </ul>
    </collapse>

    <collapse title='Validator Links'
              citation
              overscroll>
        <ul class='p-list'>
            <li>
                <a class='c-link' href="static/manual-renders/projects.html">projects</a>
                <ul class='p-list'>
                    <li>
                        <a class='c-link' href="static/manual-renders/projects/photography.html">photography</a>
                    </li>
                    <li>
                        <a class='c-link' href="static/manual-renders/projects/recursive-plug.html">making my webiste</a>
                    </li>
                </ul>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/ongoing.html">ongoing</a>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/contact.html">contact</a>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/resume.html">resume</a>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/about.html">about</a>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/citations.html">citations</a>
            </li>
            <li>
                <a class='c-link' href="static/manual-renders/guide.html">tone and voice guide</a>
            </li>
            <li>
                You can find more in the
                <a class='c-link' href='static/manual-renders'>prerenders folder</a>
                and
                <a class='c-link' href='static/css'>css folder</a>.
            </li>
        </ul>
    </collapse>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Collapsible from '@/components/util/Collapsible.vue';
import Citation from '@/components/util/Citation.vue';


export default Vue.extend({
    name: "Citations",
    components: {
        'collapse': Collapsible,
        'v-cite' : Citation
    },
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';
.main-content {
    max-width: $small-size;
    margin: auto;
}

.cite-list {
    list-style: none;
}
</style>


