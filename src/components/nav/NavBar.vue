<template>
    <div>
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
// @ts-ignore NOTE: relative path bug in vetur
import { NavEventBus } from './NavEventBus';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            show: false // FIXME: code duplication, may require vuex
        }
    },
    methods: {
        disable() { this.show = false;      },
        enable()  { this.show = true;       },
        toggle()  { this.show = !this.show; }
    },
    created() {
        NavEventBus.$on('close-nav-bar', this.disable);
        NavEventBus.$on('open-nav-bar', this.enable);
        NavEventBus.$on('toggle-nav-bar', this.toggle);
    }, 
    destroyed() {
        NavEventBus.$off('close-nav-bar', this.disable);
        NavEventBus.$off('open-nav-bar', this.enable);
        NavEventBus.$off('toggle-nav-bar', this.toggle);
    }
});

</script>


<style scoped lang='scss'>
@import '@/style/master.scss';
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
        transition: all $nav-animation-time ease;
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