<template>
<v-touch id='root'
         ref='root'
         @swiperight='enableNav'
         @swipeleft='disableNav'
         :swipe-options="{
             direction: 'horizontal'
         }">
    <hideable-header :showNav='showNav'/>
    <nav-bar :show='showNav'/>
    <main id='main-root'
          class='anim'
          :class='{ "push":  showNav }'
          :style='{ "color": color }'>
        <transition name='fade' mode='out-in'>
            <router-view class='main-router'/>
        </transition>
    </main>
</v-touch>
</template>

<script lang='ts'>
import Vue            from 'vue';
import * as Hammer    from 'hammerjs';

import NavBar         from "@/components/nav/NavBar.vue";
import HideableHeader from "@/components/nav/HideableHeader.vue";

import {
    makeNewFavicon,
    makeNewSelectionColor
} from '@/scripts/nav/DynamicColor';
import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events'

import Breakpoints from '@/style/ts/Breakpoints';
import Swatch      from '@/style/ts/Swatch';

export default Vue.extend({
    name: 'App',
    data() {
        return {
            showNav: false,
            previouslyOnTablet: false,
            color: Swatch.bright,
        }
    },
    watch: {
        $route(from, to) {
            window.scrollTo(0, 0);
        }
    },
    computed: {
        shouldPush(): boolean {
            return this.showNav && Breakpoints.onLaptopOrUp();
        },
    },
    methods: {
        disableNav(e?: HammerInput) {
            if(e !== undefined &&
               e.pointerType !== 'touch') {
                return;
            }
            this.showNav = false;
        },
        enableNav(e?: HammerInput) {
            if(e !== undefined &&
               e.pointerType !== 'touch') {
                return;
            }
            this.showNav = true;
            NavEventBus.$emit(Events.openHeader);
        },
        toggleNav()  {
            this.showNav = !this.showNav;
            if (this.showNav) {
                NavEventBus.$emit(Events.openHeader);
            }
        },

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
            makeNewFavicon(this.color);
            makeNewSelectionColor(this.color);
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
        (this.$refs.root as any).disableAll();
        (this.$refs.root as any).enable('swipe');
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
    font-family: "Open Sans", sans-serif;
    min-height: 100vh;
    user-select: auto !important;
    touch-action: pan-y pinch-zoom !important;
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
// purposely unscoped
// used for normalizing,
// and reusable classes,
// as vue requires this component always be loaded
@import '@/style/normalize.scss';
@import '@/style/unscoped.scss';
</style>
