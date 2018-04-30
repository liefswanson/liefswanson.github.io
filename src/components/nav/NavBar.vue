<template>
    <div id='nav-root'>
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
                    <!-- hack necessary due to hideable header -->
                    <div class='spacer'></div>

                    <ul class='nav-links'>
                        <nav-item v-for='(item, key) in sections' 
                                  :key='key'
                                  :properties="item"/>
                    </ul>
                    
                    <!-- allows for scrolling past the last element-->
                    <div class='over-scroll'></div>
                </div>
            </nav>
        </transition>    
    </div>
</template>

<script lang="ts">
import Vue     from 'vue';
import NavItem from './NavItem.vue';

import NavEventBus from '@/scripts/nav/NavEventBus'; // FIXME give a better path, if possible
import Sections    from '@/scripts/nav/NavItems'
import NavEvents   from '@/scripts/nav/NavEvents';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            show: false, // FIXME: code duplication, may require vuex
            sections: Sections
        }
    },
    methods: {
        disable() { this.show = false;      },
        enable()  { this.show = true;       },
        toggle()  { this.show = !this.show; },

        emitClose() {
            NavEventBus.$emit(NavEvents.closeNav);            
        }
    },
    created() {
        NavEventBus.$on(NavEvents.closeNav,  this.disable);
        NavEventBus.$on(NavEvents.openNav,   this.enable);
        NavEventBus.$on(NavEvents.toggleNav, this.toggle);
    }, 
    destroyed() {
        NavEventBus.$off(NavEvents.closeNav,  this.disable);
        NavEventBus.$off(NavEvents.openNav,   this.enable);
        NavEventBus.$off(NavEvents.toggleNav, this.toggle);
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
        text-align: right;
        //background: $purple; // debug only
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
        height: 100vh;
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