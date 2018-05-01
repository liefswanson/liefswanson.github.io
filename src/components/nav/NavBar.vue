<template>
    <div id='nav-root'>
        <transition name='fade'>
            <div class='blinder'
                 v-if='show'
                 @click='emitClose'>
            </div>
        </transition>

        <transition name='slide'>
            <nav class='nav-bar'
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

import NavEventBus from '@/scripts/nav/NavEventBus';
import Sections    from '@/scripts/nav/NavItems';
import Events      from '@/scripts/nav/Events';

import Breakpoints from '@/style/ts/Breakpoints';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            sections: Sections
        }
    },
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        emitClose() { NavEventBus.$emit(Events.closeNav); },
        emitOpen()  { NavEventBus.$emit(Events.openNav); },
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
        @include on-laptop-or-up {
            display: none;
        }
    }

    .nav-bar {
        position: fixed;
        max-height: 100vh;
        top: 0;
        left: 0;
        width: $nav-width;
        background: $medium;
        z-index: $nav-z;
        height: 100vh;
        @include on-tablet-or-down {
            box-shadow: 0.5rem 0 3rem $dark;
        }
        @include scrollable;
        // border-right: 0.25em solid $dark;
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
        @include on-tablet-or-down {
            box-shadow: 0 0 0 $dark;
        }
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>