<template>
    <div>
        <transition name='rotate-in'>
            <button class='hamburger-wrapper sideways' 
                    @click='toggle'
                    v-if='show'>
                    <i class='fa fa-bars' ></i>
            </button>
        </transition>
        <transition name='rotate-out'>
            <button class='hamburger-wrapper upright'
                    @click='toggle'
                    v-if='!show'>
                    <i class='fa fa-bars' ></i>
            </button>
        </transition>

        <transition name='fade'>
            <div class='blinder' 
                 v-if='show'  
                 @click='disable' 
                 v-touch:swipe.left='disable'>
            </div>
        </transition>

        <transition name="slide">
            <nav class='nav-bar' 
                 v-if='show'
                 v-touch:swipe.left='disable'>
            </nav>
        </transition>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            show: false 
        }
    }, 
    methods: {
        toggle() {
            this.show = !this.show;
        },
        enable() {
            this.show = true;
        },
        disable() {
            this.show = false;
        }
    }
});

</script>


<style scoped lang='scss'>
@import '../style/master.scss';
$animation-length: 0.5s;
$blinder-opacity: 0.3;

    .blinder {
        opacity: $blinder-opacity;
        background: $dark;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
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

    .hamburger-wrapper {
        color: $light;
        text-align: middle;
        background: $dark;
        border-style: none;
        position: fixed;
        left: 0;
        top: 0;
        width: $hamburger-size + 2*$hamburger-padding;
        height: $hamburger-size + 2*$hamburger-padding;
        padding: $hamburger-padding;
        margin: $hamburger-margin;
        border-radius: 1rem;
    }

    .nav-bar {
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        width: $nav-width;
        background: $medium;
        z-index: $nav-z;
    }


    .rotate-in-enter-active,
    .rotate-out-enter-active,
    .slide-enter-active,
    .slide-leave-active,
    .fade-enter-active,
    .fade-leave-active {
        transition: all $animation-length ease;
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

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-$nav-width);
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>