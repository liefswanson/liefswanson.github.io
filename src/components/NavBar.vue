<template>
<div>
    <button class='hamburger-wrapper' @click='toggle'>
        <i class='fa fa-bars'></i>
    </button>
    <transition name='fade'>
        <div class='blinder' v-if='show'  @click='disable'>

        </div>
    </transition>
    <transition name="slide">
        <nav class='nav-bar' v-if='show'>
            
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

    .hamburger-wrapper {
        color: $light;
        text-align: middle;
        background: $dark;
        border-style: none;
        z-index: $hamburger-z;
        position: fixed;
        top: 0;
        left: 0;
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
    
    .slide-enter-active,
    .slide-leave-active,
    .fade-enter-active,
    .fade-leave-active {
        transition: all $animation-length ease;
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