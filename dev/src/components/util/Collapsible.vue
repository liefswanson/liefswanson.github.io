<template>
<section class='collapsible-root'>
    <div>
        <component class='section'
                   :is='about ? "h1" : "h2"'
                   :class='about ? "about" : "project"'
                   @click='toggle'>
            {{title}}
            <div class='spacer'></div>

            <div class='icon-container'>
                <transition name='toggling'>
                    <i v-if='show'
                        key='minus'
                        class='fas toggle-icon fa-minus'/>
                    <i v-else
                        key='plus'
                        class='fas toggle-icon fa-plus'/>
                </transition>
            </div>
        </component>

        <div class='collapsible'
            :style='style'>
            <div ref='wrapper'
                class='padded'>
                <slot/>
            </div>
        </div>
    </div>
    <div class='overscroll'
         :style='overscrollStyle()'/>
</section>
</template>

<script lang="ts">
import Vue from 'vue';

import Events      from '@/scripts/nav/Events';
import NavEventBus from '@/scripts/nav/NavEventBus';

import { AnimationTimers,
         toSeconds }    from '@/style/ts/Timers';
import { std, pxInStd } from '@/style/ts/StandardUnits';
import Measurement      from '@/style/ts/Measurement';

export default Vue.extend({
    name: 'Collapsible',
    data() {
        return {
            show: false,
            maxHeight: 0,
            loaded: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        initShow: {
            type: Boolean,
            default: false
        },
        overscroll: {
            type: Boolean,
            default: false
        },
        about: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        style():object {
            return {
                'max-height': this.maxHeight + std,
                'transition': 'max-height ' + this.time() + 's ease'
            }
        },

    },
    methods: {
        toggle() {
            this.show = !this.show;
            this.calcHeight();
        },
        expand() {
            this.show = true;
            this.calcHeight();
        },
        collapse() {
            this.show = false;
            this.calcHeight();
        },
        icon():string {
            if (this.show){
                return 'fa-minus';
            }

            return 'fa-plus';
        },
        time(): number {
            let base = AnimationTimers.collapsible * toSeconds;
            let units = this.expandedHeight() / Measurement.collapsible;
            return base * Math.sqrt(units);
        },
        overscrollStyle(): object {
            if(!this.overscroll) return {};

            let height = !this.show ? this.expandedHeight() : 0;
            let time = this.loaded ? this.time() : 0;
            return {
                'height': height + std,
                'transition': 'height ' + time + 's ease'
            }
        },
        expandedHeight(): number {
            let wrapper = this.$refs.wrapper as Element;

            if (wrapper == undefined) { return 0; }
            let px = wrapper.getBoundingClientRect().height;

            return  px / pxInStd();
        },
        calcHeight() {
            if (!this.show) {
                this.maxHeight = 0;
                return;
            }

            this.maxHeight = this.expandedHeight();
        },
        load() {
            this.loaded = true;
        }
    },
    mounted() {
        NavEventBus.$on(Events.navAnimDone, this.calcHeight);
        NavEventBus.$on(Events.collapseAll, this.collapse);
        NavEventBus.$on(Events.expandAll, this.expand);
        window.addEventListener(Events.resize, this.calcHeight);

        if(this.initShow) {
            this.toggle();
        }

        this.$forceUpdate();
    },
    updated() {
        if(!this.loaded) {
            Vue.nextTick(this.load);
        }
    },
    beforeDestroy(){
        NavEventBus.$off(Events.navAnimDone, this.calcHeight);
        NavEventBus.$off(Events.collapseAll, this.collapse);
        NavEventBus.$off(Events.collapseAll, this.expand);
        window.removeEventListener(Events.resize, this.calcHeight);
        this.loaded = false;
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

$pad-top: 0.25rem;
$pad-bot: $pad-top;
$margin-top: 0.5rem;
$font-size: 2rem;
$line-height: $font-size * 1.5;
$underline: 0.2rem;
// FIXME unaccounted for 0.8rem
// something wrong with my math?
$height: $pad-bot + $pad-bot + $margin-top +
         $line-height + $underline + 0.8rem;


.overscroll {
    max-height: calc(100vh - #{$height});
}

.collapsible-root {
    margin-top: $margin-top;
}

.section {
    display: flex;
    //max-width: $small-size;
    padding: $pad-top 1rem;
    margin: 0;

    font-size: $font-size;
    border-bottom: $underline solid $bright;
    cursor: pointer;
    @include not-selectable;

    transition: all $link-animation-time ease;

    &:hover,
    &:focus {
        background: darken($bright, 5%);
    }
}

.about {
    &:hover,
    &:focus {
        border-color: $about-swatch;
    }
}

.project {
    &:hover,
    &:focus {
        border-color: $projects-swatch;
    }
}

.spacer {
    flex: 1;
}

.icon-container {
    padding-left: 1rem;
    width: 1em;
    position: relative;
}

.toggle-icon {
    font-size: 0.8em;
    right: 0;
    top: 0.5em;
    position: absolute;
}

.collapsible {
    transition: max-height $collapse-animation-time ease;
    overflow: hidden;
}

.padded {
    $top: 0.5rem;
    $side: 1rem;
    $bottom: 2rem;
    padding: $top $side $bottom;
}

.toggling-enter-active,
.toggling-leave-active {
    transition: all $collapse-animation-time ease;
}

.toggling-enter,
.toggling-leave-to {
    opacity: 0;
}

</style>
