<template>
<transition name="hide">
    <header id='header-root'
            class='hideable'
            v-show='show'>

        <!-- rotating hamburger button -->
        <button class='hamburger-wrapper'
                :class='{ rotated: showNav}'
                @click='hamburgerToggle'>
            <i class='fa fa-bars'/>
        </button>

        <!-- logo TODO inlined svg so I can manipulate color and font-->
        <h1 class='logo'
            :style='{ color: color }'>
            Lief Swanson
        </h1>
    </header>
</transition>
</template>

<script lang='ts'>
import Vue from "vue";

import NavEventBus from '@/scripts/nav/NavEventBus'; // FIXME give a better path, if possible
import Events      from '@/scripts/nav/Events';
import Swatch      from '@/style/ts/Swatch';

export default Vue.extend({
    name: "HideableHeader",
    data() {
        return {
            previous: 0,
            show: true,
            color: Swatch.bright
        };
    },
    props: {
        showNav: {
            type: Boolean,
            require: true
        }
    },
    methods: {
        handleScroll() {
            let current = window.scrollY;

            let scrollingDown = current > this.previous;
            let scrollingUp = current < this.previous;

            if (this.show && scrollingDown) {
                this.show = false;
                NavEventBus.$emit(Events.toggleHeader);
            } else if (!this.show && scrollingUp) {
                this.show = true;
                NavEventBus.$emit(Events.toggleHeader);
            } // else... already in the right state!

            this.previous = current;
        },
        hamburgerToggle() {
            NavEventBus.$emit(Events.toggleNav);
        },

        changeColor(color: Swatch) { this.color = color; },

    },
    mounted() {
        window.addEventListener(Events.scroll, this.handleScroll);
        NavEventBus.$on(Events.changeColor, this.changeColor);
    },
    beforeDestroy() {
        window.removeEventListener(Events.scroll, this.handleScroll);

        NavEventBus.$off(Events.changeColor, this.changeColor);
    }
});
</script>

<style lang="scss" scoped>
@import "src/style/master.scss";

.hideable {
    background: $dark;
    height: $header-height;
    line-height: $header-height;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    text-align: right;
    z-index: $header-z;
}

.logo {
    padding: $hamburger-padding;
    padding-right: 2rem;
    line-height: normal;
    text-align: right;
    font-family: "Comfortaa", sans-serif;
    margin: 0;

    @include not-selectable;
}

// hamburger
.hamburger-wrapper {
    position: fixed;
    top: 0;
    left: 0;

    color: $light;
    background: none;
    border-style: none;
    cursor: pointer;


    width: $hamburger-size;
    height: $hamburger-size;
    margin: $hamburger-padding;
    font-size: $hamburger-size;
    line-height: 0;

    z-index: $hamburger-sideways-z;

    transition: all $nav-animation-time ease;
}

.rotated {
    transform: rotate(90deg);
}


// hide/show header
.hide-enter-active,
.hide-leave-active {
    transition: all $header-animation-time ease;
}
.hide-enter,
.hide-leave-to {
    transform: translateY(-$header-height);
}

</style>
