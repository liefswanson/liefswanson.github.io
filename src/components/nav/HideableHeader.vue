<template>
    <header id='header-root'>
        <!-- keep content from being innaccessable behind header-->
        <div class=spacer></div>

        <!-- actual header -->
        <transition name="hide">
            <div class='hideable' 
                 v-show='show'>

                <!-- rotating button TODO isolate transition to only icon -->
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

                <!-- logo -->
                <h1 class='logo'>Lief Swanson</h1>
            </div>
        </transition>
    
    </header>
</template>

<script lang='ts'>
import Vue from "vue";
import { NavEventBus } from '../../NavEventBus'; // FIXME give a better path, if possible


export default Vue.extend({
    name: "HideableHeader",
    data() {
        return {
            previous: 0,
            show: true,
            showNav: false // FIXME: code duplication, may require vuex!
        };
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
            NavEventBus.$emit("toggle-nav-bar");
        },
        disable() { this.showNav = false;         },
        enable()  { this.showNav = true;          },
        toggle()  { this.showNav = !this.showNav; }

    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        
        NavEventBus.$on('close-nav-bar',  this.disable);
        NavEventBus.$on('open-nav-bar',   this.enable);
        NavEventBus.$on('toggle-nav-bar', this.toggle);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
        
        NavEventBus.$off('close-nav-bar',  this.disable);
        NavEventBus.$off('open-nav-bar',   this.enable);
        NavEventBus.$off('toggle-nav-bar', this.toggle);
    }
});
</script>

<style lang="scss" scoped>
@import "src/style/master.scss";

    .spacer {
        height: $header-height;
    }

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
        margin: 1rem;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: $secondary;
    }

    // hamburger
    .hamburger-wrapper {
        color: $light;
        text-align: middle;
        background: none;
        border-style: none;
        position: fixed;
        left: 0;
        top: 0;
        width: $hamburger-size;
        height: $hamburger-size;
        margin: $hamburger-padding;
        cursor: pointer;
    }

    .fa-bars {
        height: $hamburger-size;
        font-size: $hamburger-size;
        line-height: $hamburger-size;
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
