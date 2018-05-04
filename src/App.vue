<template>
    <div id='root'
         v-touch:swipe.right='enableNav'
         v-touch:swipe.left='disableNav'>
        <hideable-header :showNav='showNav'/>
        <nav-bar :show='showNav'/>
        <main id='main-root'
              class='anim'
              :class='{ "push":  showNav }'
              :style='{ "color": color }'>
            <router-view class='main-router'/>
        </main>
    </div>
</template>

<script lang='ts'>
import Vue            from 'vue';
import NavBar         from "@/components/nav/NavBar.vue";
import HideableHeader from "@/components/nav/HideableHeader.vue";

import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events'

import Breakpoints from '@/style/ts/Breakpoints';
import Swatch      from '@/style/ts/Swatch';

const faviconId  = 'dynamic-favicon';

function makeNewFavicon(color: Swatch) {
    const tag = 'link';
    const rel = 'icon';

    let pathId = color.slice(1);
    let path   = 'static/logo-' + pathId + '.png';

    let link  = document.createElement(tag);
    link.id   = faviconId;
    link.rel  = rel;
    link.href = path;

    return link;
}

function swapFavicon(color: Swatch) {
    let link = makeNewFavicon(color);
    let old  = document.getElementById(faviconId) as HTMLElement;

    if (old) {
        document.head.removeChild(old);
    }

    document.head.appendChild(link);
}

export default Vue.extend({
    name: 'App',
    data() {
        return {
            showNav: false,
            previouslyOnTablet: false,
            color: Swatch.bright
        }
    },
    computed: {
        shouldPush(): boolean {
            return this.showNav && Breakpoints.onLaptopOrUp();
        }
    },
    methods: {
        disableNav() { this.showNav = false; },
        enableNav()  { this.showNav = true; },
        toggleNav()  { this.showNav = !this.showNav; },

        defaultNavState() {
            if (Breakpoints.onLaptopOrUp()) {
                NavEventBus.$emit(Events.openNav);
            } else {
                NavEventBus.$emit(Events.closeNav);
            }

            this.previouslyOnTablet = Breakpoints.onTabletOrDown();
        },

        enableNavIfBigger() {
            if (Breakpoints.onLaptopOrUp() &&
                this.previouslyOnTablet) {

                NavEventBus.$emit(Events.openNav);
            }

            this.previouslyOnTablet = Breakpoints.onTabletOrDown();
        },

        changeColor(color: Swatch) {
            this.color = color;
            swapFavicon(color);
        },

    },
    created() {
        // needs to be set before navItems are created and mounted
        NavEventBus.$on(Events.changeColor, this.changeColor);
    },
    mounted() {
        NavEventBus.$on(Events.closeNav,  this.disableNav);
        NavEventBus.$on(Events.openNav,   this.enableNav);
        NavEventBus.$on(Events.toggleNav, this.toggleNav);


        window.addEventListener(Events.resize, this.enableNavIfBigger);

        this.defaultNavState();
    },
    beforeDestroy() {
        NavEventBus.$off(Events.changeColor, this.changeColor);

        NavEventBus.$off(Events.closeNav,  this.disableNav);
        NavEventBus.$off(Events.openNav,   this.enableNav);
        NavEventBus.$off(Events.toggleNav, this.toggleNav);

        window.removeEventListener(Events.resize, this.enableNavIfBigger);
    },
    components: {
        "nav-bar": NavBar,
        "hideable-header" : HideableHeader
    },
});
</script>

<style lang='scss' scoped>
@import '@/style/master.scss';

    #root {
        font-family: 'Open Sans', sans-serif;
        min-height: 100vh;
    }

    #main-root {
        padding-top: $header-height;
        //min-height: 100vh;
        max-width: 100vw;
    }

    .anim {
        transition: all $nav-animation-time ease;
    }

    .push {
        @include on-laptop-or-up {
            padding-left: $nav-width;
        }
    }

</style>

<style lang='scss'>
// NOTICE: ONLY UNSCOPED STYLES
// used for normalizing,
// and reusable classes
@import '@/style/normalize.scss';
@import '@/style/master.scss';

    * {
        padding: 0;
        margin: 0;
    }

    button:focus {
        outline: none;
    }

    body {
        background: $bright;
       	text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    .main-content {
        padding: 2rem;
    }

</style>
