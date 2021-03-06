<template>
<transition name="hide">
    <header id='header-root'
            class='hideable'
            v-show='show'>

        <!-- rotating hamburger button -->
        <button class='hamburger-wrapper'
                :title='hamburgerMessage'
                :aria-label='hamburgerMessage'
                :class='{ rotated: showNav }'
                @click='hamburgerToggle'>
            <i class='fa fa-bars'/>
        </button>

        <div class='spacer'></div>

        <name :color='color'
                class='extra-pad'/>

    </header>
</transition>
</template>

<script lang='ts'>
import Vue from "vue";

import Name from '@/components/nav/Name.vue';

import { scrollEnabled } from '@/scripts/nav/ScrollControl';
import NavEventBus       from '@/scripts/nav/NavEventBus'; // FIXME give a better path, if possible
import Events            from '@/scripts/nav/Events';

import Swatch      from '@/style/ts/Swatch';
import Measurement from "@/style/ts/Measurement";
import { pxInStd } from "@/style/ts/StandardUnits";

export default Vue.extend({
    name: "HideableHeader",
    data() {
        return {
            previous: 0,
            show: true,
            color: Swatch.bright,
        };
    },
    props: {
        showNav: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        hamburgerMessage(): string {
            return this.showNav ? "Hide Navigation Bar" : "Show Navigation Bar"
        }
    },
    methods: {
        handleScroll() {
            const current = window.scrollY;

            const scrollingDown = current > this.previous;
            const scrollingUp = current < this.previous;

            const belowMinScroll = current < Measurement.minScroll * pxInStd();

            const headerShouldClose =
                this.show &&
                scrollingDown &&
                !belowMinScroll &&
                scrollEnabled();

            const headerShouldOpen =
                !this.show &&
                scrollingUp;

            if (headerShouldClose) {
                NavEventBus.$emit(Events.closeHeader);
            } else if (headerShouldOpen) {
                NavEventBus.$emit(Events.openHeader);
            }
            // else... already in the right state!

            this.previous = current;
        },
        hamburgerToggle() {
            NavEventBus.$emit(Events.toggleNav);
        },
        enable() {
            this.show = true;
        },
        disable() {
            this.show = false;
        },
        changeColor(color: Swatch) {
            this.color = color;
        },

    },
    mounted() {
        window.addEventListener(Events.scroll, this.handleScroll);
        NavEventBus.$on(Events.changeColor, this.changeColor);
        NavEventBus.$on(Events.closeHeader, this.disable);
        NavEventBus.$on(Events.openHeader, this.enable);
    },
    beforeDestroy() {
        window.removeEventListener(Events.scroll, this.handleScroll);
        NavEventBus.$off(Events.changeColor, this.changeColor);
        NavEventBus.$off(Events.closeHeader, this.disable);
        NavEventBus.$off(Events.openHeader, this.enable);
    },
    components: {
        'name': Name
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
    display: flex;
    top: 0;
    left: 0;
    z-index: $header-z;
}

.logo {
    padding: $hamburger-padding;
    padding-right: 2rem;
    margin: 0;
}

.extra-pad {
    padding-right: 1.5rem;
}

// hamburger
.hamburger-wrapper {
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

    transition: transform $nav-animation-time ease,
                color $nav-hover-animation-time ease;

    &:hover,
    &:focus  {
        color: $bright;
    }
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
