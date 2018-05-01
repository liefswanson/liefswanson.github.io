<template>
    <div id='root'
         v-touch:swipe.right='enableNav'
         v-touch:swipe.left='disableNav'>
        <hideable-header :showNav='showNav'/>
        <nav-bar :show='showNav'/>
        <main id='main-root' class='push'>
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

export default Vue.extend({
    name: 'App',
    data() {
        return {
            showNav: false,
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
        },
        enableNavIfBigger() {
            if (Breakpoints.onLaptopOrUp()) {
                NavEventBus.$emit(Events.openNav);
            }
        }

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
        background: $light;
       	text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    .main-content {
        padding: 2rem;
    }

</style>
