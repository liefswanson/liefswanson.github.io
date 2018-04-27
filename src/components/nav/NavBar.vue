<template>
    <div>
        <transition name='fade'>
            <div class='blinder' 
                 v-if='show'  
                 @click='disableEvent'>
            </div>
        </transition>

        <transition name='slide'>
            <nav class='nav-bar scrollable'
                 v-show='show'>
                <div class='menu-container'>
                    <div class='spacer'></div>
                    <ul>
                        <li v-for='n in 150' :key='n'>
                            {{n}}
                        </li>
                    </ul>
                    <div class='over-scroll'></div>
                </div>
            </nav>
        </transition>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavEventBus } from '../../NavEventBus';

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
        toggle()  { this.show = !this.show; },

        disableEvent() {
            NavEventBus.$emit("close-nav-bar");            
        }
    },
    created() {
        NavEventBus.$on('close-nav-bar',  this.disable);
        NavEventBus.$on('open-nav-bar',   this.enable);
        NavEventBus.$on('toggle-nav-bar', this.toggle);
    }, 
    destroyed() {
        NavEventBus.$off('close-nav-bar',  this.disable);
        NavEventBus.$off('open-nav-bar',   this.enable);
        NavEventBus.$off('toggle-nav-bar', this.toggle);
    }
});

</script>


<style lang='scss' scoped>
@import '@/style/master.scss';
$blinder-opacity: 0.3;

    .spacer {
        height: $header-height;
    }

    .over-scroll {
        height: 0; // amount to over-scroll
    }

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
        max-height: 100vh;
        max-height: 100vh;
        top: 0;
        left: 0;
        width: $nav-width;
        background: $medium;
        z-index: $nav-z;
    }

    .scrollable {
        height: 2000px;
        overflow-y: scroll;
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