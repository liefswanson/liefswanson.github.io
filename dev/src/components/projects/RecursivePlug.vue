<template>
<project-template name='RecursivePlug'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            By this point, you are probably reasonably acquainted with me and my portfolio!
            If not, I recommend exploring some more after perusing my recursive self-advertising.
            I am at least mildly interesting, I swear.
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            Everything.
            My goal was to create a portfolio that speaks to my wide range of interests and abilities, without making me look full of myself... like I literally just did.
            The best way I could see to do that was to display my skills, instead of talk about them.
        </p>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            I don’t like to talk about myself that much.
            I prefer to talk about the things I am interested in.
            However, a portfolio is like a product page… my time, perspective, and knowledge are the products being sold, and as such those are what I need to talk about.
            It was a fulfilling challenge to express who I am through the interactions, functionality, visuals, and content of this portfolio.
        </p>
        <p class='p-text p-wide'>
            I also enjoyed the prospect of taking so many different things I have worked on and bringing them together in a single place.
            It is sort of motivating to be able to look back on even just a small slice of all the things I have worked on.
            Even the process of making my portfolio involved
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            Before starting the process of building this website I knew <strong>almost nothing</strong> about frontend web development.
            I had thrown together a portfolio using Angular before that, but it was by no means impressive.
            The most I had learned actually came from an 8 person group project that lasted an entire semester.
            I bumbled my way through learning the Vue.JS and then taught my team what I learned so that we could build the frontend of the application we were building in that class.
        </p>

        <p class='p-text p-wide'>
            <strong>From my previous forays into web development I have learned that:</strong>
            <ol class='p-list p-wide'>
                <li>I like the control over the user experience provided by single page applications</li>
                <li>while I can use JavaScript, I don't enjoy using the language. Most of the errors I would make were silly typos which just slowed me down. In addition, the lack of proper enums and interfaces is a real pain</li>
                <li>JQuery is a bit bloated for what it provides, given how easy it is to implement the most used features in pure JavaScript</li>
                <li>I really don't like style frameworks such as Bootstrap and Foundation. I find they get in my way more than they help... Mostly due to the JavaScript baggage they are bundled with.</li>
                <li>HTML and CSS are a pain due to the amount of code duplication involved</li>
            </ol>
        </p>



        <p class='p-text p-wide'>
            <strong>To solve all of these problems, I decided I would:</strong>
            <ol class='p-list p-wide'>
                <li>use Vue.JS to make the site a single page application</li>
                <li>use TypeScript, to give me enums, interfaces, and type checking all of which help me with typos and organizing code</li>
                <li>not use JQuery</li>
                <li>not use any style frameworks, instead implementing everything from scratch</li>
                <li>use SCSS and Vue.JS's SFC format to help reduce code duplication...</li>
            </ol>
        </p>



        <p class='p-text p-wide'>
            Once I set up my development environment I spent probably 2 Weeks writing my website from scratch.
            After that, I spent probably another week writing the content of the website.
            For someone else, that may take less time, but I am dyslexic, so I don't think it is unreasonable to take so long writing the content.
        </p>

        <p class='p-text p-wide'>
            I think the most interesting design constraint I imposed on myself was tying the primary colour to the navigation.
            There was a pleathora of things that had to be considered in order to implement it.
        </p>

        <ul class='p-list p-wide'>
            <li>The favicon had to change colour, so that involved creating a dynamic favicon in the header controlled by JavaScript</li>
            <li>The selection colour was implemented in a similar way, with a stylesheet dynamically generated in JavaScript</li>
            <li>My Resume, which is a pdf, had to match whatever colour I chose for it</li>
            <li>Most use of the primary colour could not be done directly in the static SCSS, because then the component would be the wrong colour if reused somewhere else</li>
            <li>I had to find 5 colours that fit well enough together without being so similar that people would not notice that the colour had changed</li>
            <li>Every colour chosen had to be readable both of dark and light backgrounds</li>
        </ul>

        <p class='p-note p-thin'>
            The idea of tying primary colour to navigation really interested me, but I knew I wouldn't see unless I implemented it myself.
            It is simply too hard to work the idea into a consistent brand identity.
        </p>

        <p class='p-text p-wide'>
            After that, I would say that implementing my own masonry style project grid was probably the second most difficult feature to implement in this project.
            It still isn't perfect, but it is fairly reasonably well built I think.
            I just wanted something where I could through create a wall of the things I was pleased to have worked on.
            The idea being that, I don't just do one thing and I don't want to be thought of as someone that is like that.
            Exploration of different fields of knowledge is important to me.
        </p>

        <p class='p-text p-wide'>
            One thing that quickly became apparent about the project grid is it would be nice to narrow down the search to things visiters were actually interested in.
            So, I tagged every project with the one or more of three relevant tags Code, Design, or Misc, and made it so the projects could be filtered to only show items that fell under a particular category.
            This way I could tailor the projects wall to: designers &amp; artists, engineers &amp; programmers, and acquaintances interested in what I do.
        </p>

        <p class='p-text p-wide'>
            On the design side of things, I saw this website as a good opportunity to display my work while creating an identity for the site.
            For instance, The design of the logo was something I worked pretty hard on.
            I wanted something that was recognizable from the favicon, and would survive the abuse of having 5 different possible primary colours.
            I also figured using
            <router-link class='p-link' exact to='/projects/my-font'>my own font</router-link>
            in the logo and header would set my website's identity apart.
        </p>

        <figure class='p-mid'>
            <v-carousel class='p-image'
                        relative="/static/recursive-plug/"
                        :init='logos'
                        />
            <figcaption class='p-note'>
                Honestly, I think the logo turned out pretty well.
                I may even end up reusing it on some physical branding at some point.
                It might look a little over the top, but I do like the memorability... and probably most importantly I have managed to look back on it several times and not want to redesign it!
            </figcaption>
        </figure>

        <p class='p-text p-wide'>
            However, that is not where the story ends.
            Remember how I said that I knew almost nothing about web design before this point?
            Well... there were definitely some silly mistakes that I made in this website that I didn't find out until later.
            All of these have since been fixed, because of an audit I performed myself during a class in web design for my
            <router-link class='p-link' exact to='/projects/siat'>BSc in interactive technology</router-link>
            at
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>.
            <ul class='p-list'>
                <li>There was a complete Lack of aria labels</li>
                <li>Clickable elements that were not either a &lt;button&gt; tag or &lt;a&gt; tag.</li>
                <li>&lt;a&gt; tags that were inside of &lt;button&gt; tags.</li>
                <li>The project filter buttons had a different functionality that was difficult for new users to understand.</li>
                <li>The project filter buttons also didn't have labels.</li>
                <li>The use of &lt;input&gt; tags in incorrect places, for convenience, hampering ability to navigate with a keyboard.</li>
                <li>Projects not being broken down into their different components, making them harder to skim<span class='p-note'>inro, what, why, and how</span>.</li>
                <li>&lt;img&gt; tags that were not contained inside properly captioned figures.</li>
                <li>Cards in the project grid needed a redesign, to make them feel less floaty.</li>
                <li>The contact section used a pretty lazy layout that didn't match the aesthetic of the rest of the site.</li>
                <li>
                    Images did not preallocate space, to prevent
                    <a class='p-link' href='https://css-tricks.com/content-jumping-avoid/'>jumpy content loading</a>.
                </li>
                <li>The ongoing section was a much less helpful featured section, which just lead users to the first project and confused them.</li>
            </ul>
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";
import Carousel from "@/components/util/Carousel.vue";
import PreallocatedImage from '@/scripts/main/PreallocatedImage';
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

export default Vue.extend({
name: "RecursivePlug",
data(){
    return {
        logos: [
            {
                path: 'orange.svg',
                alt: 'logo for the Projects section',
                width: 120,
                height: 120,
            },
            {
                path: 'pink.svg',
                alt: 'logo for the Ongoing section',
                width: 120,
                height: 120,
            },
            {
                path: 'green.svg',
                alt: 'logo for the Contact section',
                width: 120,
                height: 120,
            },
            {
                path: 'blue.svg',
                alt: 'logo for the Résumé section',
                width: 120,
                height: 120,
            },
            {
                path: 'red.svg',
                alt: 'logo for the About section',
                width: 120,
                height: 120,
            },
            {
                path: 'thumb.svg',
                alt: 'the default logo',
                width: 120,
                height: 120,
            }
        ] as PreallocatedImage[]
    }
},
components: {
    'project-template': ProjectTemplate,
    'v-carousel': Carousel,
    'prealloc': PreallocatedImageVue
}
});
</script>
