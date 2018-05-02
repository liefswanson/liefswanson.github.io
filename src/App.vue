<template>
    <div id='root'
         v-touch:swipe.right='enableNav'
         v-touch:swipe.left='disableNav'>
        <hideable-header :showNav='showNav'/>
        <nav-bar :show='showNav'/>
        <main id='main-root' class='anim' :class='{ "push": showNav }'>
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

export default Vue.extend({
    name: 'App',
    data() {
        return {
            showNav: false,
            previouslyOnTablet: false
        }
    },
    computed: {
        shouldPush(): boolean {
            return this.showNav && Breakpoints.onLaptopOrUp();
        }
    },
    methods: {
        disableNav() { this.showNav = false; },
        enableNav()  { this.showNav = true;},
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
        swapFavicon(color: Swatch) {
            const tag = 'link';
            const id  = 'dynamic-favicon';
            const rel = 'icon';

            let pathId = color.slice(1);
            let path   = 'static/logo-' + pathId + '.png';

            console.log(path);

            let link  = document.createElement(tag);
            link.id   = id;
            link.rel  = rel;
            link.href = path;

            let old  = document.getElementById(id) as HTMLElement;
            if (old) {
                document.head.removeChild(old);
            }

            document.head.appendChild(link);
        }

    },
    created() {
        // needs to be set before navItems are created and mounted
        NavEventBus.$on(Events.changeColor, this.swapFavicon);
    },
    mounted() {
        NavEventBus.$on(Events.closeNav,  this.disableNav);
        NavEventBus.$on(Events.openNav,   this.enableNav);
        NavEventBus.$on(Events.toggleNav, this.toggleNav);


        window.addEventListener(Events.resize, this.enableNavIfBigger);

        this.defaultNavState();
    },
    destroyed() {
        NavEventBus.$off(Events.closeNav,  this.disableNav);
        NavEventBus.$off(Events.openNav,   this.enableNav);
        NavEventBus.$off(Events.toggleNav, this.toggleNav);

        NavEventBus.$off(Events.changeColor, this.swapFavicon);

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
        font-family: Arial, Helvetica, sans-serif;
        min-height: 100vh;
    }

    #main-root {
        padding-top: $header-height;


    }

    .anim {
        transition: margin-left $nav-animation-time ease;
    }

    .push {
        @include on-laptop-or-up {
            margin-left: $nav-width;
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
        background: $light;
       	text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    .main-content {
        padding: 2rem;
        color: $bright;
    }

</style>
