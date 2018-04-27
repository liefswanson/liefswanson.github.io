<template>
    <div>
        <transition name='fade'>
            <div class='blinder' 
                 v-if='show'  
                 @click='emitClose'>
            </div>
        </transition>

        <transition name='slide'>
            <nav class='nav-bar scrollable'
                 v-show='show'>
                <div class='menu-container'>
                    <div class='spacer'></div>
                    <ul class='nav-links'>
                        <nav-item :properties="item" v-for='(item, key) in items' :key='key'/>
                    </ul>
                    <div class='over-scroll'></div>
                </div>
            </nav>
        </transition>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavItem from './NavItem.vue';

import { NavEventBus } from '../../NavEventBus'; // FIXME give a better path, if possible
import routeList from '../../NavItems'

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            show: false, // FIXME: code duplication, may require vuex
            items: routeList
        }
    },
    methods: {
        disable() { this.show = false;      },
        enable()  { this.show = true;       },
        toggle()  { this.show = !this.show; },

        emitClose() {
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
    },
    components: {
        "nav-item": NavItem
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

    .nav-links {
        list-style-type: none;
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
        overflow-y: auto;
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