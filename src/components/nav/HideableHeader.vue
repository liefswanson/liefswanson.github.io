<template>
    <header id='header-root'>
        <!-- actual header -->
        <transition name="hide">
            <div class='hideable'
                 v-show='show'>

                <!-- rotating hamburger button
                     TODO find a way to fix hack,
                     currently use two transitions instead of one
                     mode='out-in' doesn't work here -->
                <transition name='rotate-in'>
                    <button class='hamburger-wrapper sideways'
                            @click='hamburgerToggle'
                            v-show='showNav'>
                        <i class='fa fa-bars'></i>
                    </button>
                </transition>
                <transition name='rotate-out'>
                    <button class='hamburger-wrapper upright'
                            @click='hamburgerToggle'
                            v-show='!showNav'>
                        <i class='fa fa-bars'></i>
                    </button>
                </transition>

                <!-- logo TODO inlined svg so I can manipulate color and font-->
                <h1 class='logo'
                    :style='{ color: color }'>
                    Lief Swanson
                </h1>
            </div>
        </transition>

    </header>
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
            } else if (!this.show && scrollingUp) {
                this.show = true;
            } // else... already in the right state!

            this.previous = current;
        },
        hamburgerToggle() {
            NavEventBus.$emit(Events.toggleNav);
        },

        changeColor(color: Swatch) { this.color = color; },

    },
    created() {
        window.addEventListener(Events.scroll, this.handleScroll);
        NavEventBus.$on(Events.changeColor, this.changeColor);
    },
    destroyed() {
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
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        text-align: right;
        z-index: $header-z;
    }

    .logo {
        padding: $hamburger-padding;
        padding-right: 1rem;
        text-align: right;
        vertical-align: middle;
        line-height: normal;
        margin: 0;

        @include not-selectable;
    }

    // hamburger
    .hamburger-wrapper {
        top: 0;
        left: 0;
        color: $light;
        background: none;
        border-style: none;

        position: fixed;

        width: $hamburger-size;
        height: $hamburger-size;
        margin: $hamburger-padding;

        @include clickable;
    }

    .fa-bars {
        font-size: $hamburger-size;
    }

    .sideways {
        transform: rotate(90deg);
        z-index: $hamburger-sideways-z;
    }

    .upright {
        z-index: $hamburger-upright-z;
    }

    // rotate hamburger
    .rotate-in-enter-active,
    .rotate-out-enter-active {
        transition: all $nav-animation-time ease;
    }

    .rotate-in-leave-active,
    .rotate-out-leave-active {
        transition: all 0;
    }

    .rotate-in-enter,
    .rotate-in-leave-to {
        transform: rotate(0deg);
    }

    .rotate-out-enter,
    .rotate-out-leave-to  {
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
