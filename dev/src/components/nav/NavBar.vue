<template>
<div id='nav-root'>
    <transition name='fade'>
        <div class='blinder'
             ref='blinder'
             v-if='show'
             @click='emitClose'>
        </div>
    </transition>

    <transition name='slide'
                @afterEnter='animFinished'
                @afterLeave='animFinished'>
        <nav class='nav-bar'
             @scroll='handleScroll()'
             :style="{'touch-action': touchActions}"
             ref='navBar'
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

import {
    enableScroll,
    disableScroll,
    scrollProgress,
    scrollable
} from '@/scripts/nav/ScrollControl';
import NavEventBus   from '@/scripts/nav/NavEventBus';
import Sections      from '@/scripts/nav/NavItems';
import Events        from '@/scripts/nav/Events';

import Breakpoints from '@/style/ts/Breakpoints';

export default Vue.extend({
    name: "NavBar",
    data() {
        return {
            sections: Sections,
            scrollPercent: 0,
            canScroll: false
        }
    },
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        show(val) {
            this.setScrollBehaviour(val);
            if(val) {
                Vue.nextTick(this.handleScroll);
            }
        },
    },
    computed: {
        touchActions(): string {
            var result = ''
            if(this.panUp && this.panDown) {
                result = 'pan-y ';
            } else if(this.panUp) {
                result = 'pan-up ';
            } else if(this.panDown) {
                result = 'pan-down ';
            }
            return result + 'pinch-zoom';

        },
        panUp(): boolean {
            if(Breakpoints.onLaptopOrUp()) {
                return true;
            }

            return this.scrollPercent !== 0 &&
                   this.canScroll;
        },
        panDown(): boolean {
            if(Breakpoints.onLaptopOrUp()) {
                return true;
            }

            return this.scrollPercent !== 1 &&
                   this.canScroll;
        },

    },
    methods: {
        emitClose() {
            NavEventBus.$emit(Events.closeNav);
        },
        emitOpen() {
            NavEventBus.$emit(Events.openNav);
        },
        animFinished() {
            NavEventBus.$emit(Events.navAnimDone);
        },
        handleResize() {
            this.setScrollBehaviour(this.show);
            if(this.show) {
                this.handleScroll();
            }
        },
        setScrollBehaviour(showing: boolean) {
            let body = document.querySelector('body') as HTMLElement;
            let top = document.documentElement.scrollTop;
            let disabling = showing && Breakpoints.onTabletOrDown();

            if(disabling) {
                body.style.touchAction = 'pinch-zoom';
                disableScroll();
            } else {
                body.style.touchAction = 'auto';
                enableScroll();
            }
        },
        handleScroll() {
            let navBar = this.$refs.navBar as HTMLElement;
            if(!navBar) { return; }

            this.scrollPercent = scrollProgress(navBar);
            this.canScroll = scrollable(navBar);
        }

    },
    mounted() {
        window.addEventListener(Events.resize, this.handleResize);
    },
    beforeDestroy(){
        window.addEventListener(Events.resize, this.handleResize);
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
    z-index: $blinder-z;
    background: $dark;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
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
    overflow-y: auto;
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