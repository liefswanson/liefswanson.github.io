<template>
<article class='collapsible-root'>
    <component :is='about ? "h1" : "h2"'
                class='label'>
        <button class='section'
                :title='toggleMessage'
                :aria-label='toggleMessage'
                :class='dynamicClass'
                @click='toggle'>
                <strong class='collapse-title'>{{title}}</strong>
            <span class='spacer'></span>

            <span class='icon-container'>
                <transition name='toggling'>
                    <i v-if='show'
                    key='minus'
                    class='fas toggle-icon fa-minus'/>
                    <i v-else
                    key='plus'
                    class='fas toggle-icon fa-plus'/>
                </transition>
            </span>
        </button>
    </component>

    <div ref='animator'
         class='collapsible'
         :style='style'>
        <div ref='wrapper'
            class='padded'>
            <slot/>
        </div>
    </div>
    <div class='overscroll'
         :style='overscrollStyle()'/>
</article>
</template>

<script lang="ts">
import Vue from 'vue';

import Events      from '@/scripts/nav/Events';
import NavEventBus from '@/scripts/nav/NavEventBus';
import { userIsBot } from '@/scripts/main/Utils';

import { AnimationTimers,
         toSeconds }    from '@/style/ts/Timers';
import { std, pxInStd } from '@/style/ts/StandardUnits';
import Measurement      from '@/style/ts/Measurement';

export default Vue.extend({
    name: 'Collapsible',
    data() {
        return {
            show: false,
            // a delayed version of show that applies after the element is hidden
            // causes the application of display: none;
            display: true,
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
        },
    },
    computed: {
        style(): object {
            return {
                'display': this.display ? undefined : 'none',
                'max-height': this.show ? this.maxHeight + std : '0',
                'transition': 'max-height ' + this.time() + 's ease'
            }
        },
        toggleMessage(): string {
            const nextState = this.show ? "Hide" : "Show";
            return nextState + ' "' + this.title + '" section';
        },
        dynamicClass(): string {
            if (this.about) {
                return 'about';
            }
            return 'project';
        }
    },
    methods: {
        toggle() {
            if (this.show){
                this.collapse();
            } else {
                this.expand();
            }
        },
        expand() {
            this.display = true;
            Vue.nextTick(this.expandHelper);
        },
        expandHelper() {
            this.show = true;
            this.calcHeight();
        },
        collapse() {
            this.show = false;
            this.calcHeight();
        },
        icon(): string {
            if (this.show){
                return 'fa-minus';
            }

            return 'fa-plus';
        },
        time(): number {
            const base = AnimationTimers.collapsible * toSeconds;
            const units = this.maxHeight / Measurement.collapsible;
            return base * Math.sqrt(units);
        },
        overscrollStyle(): object {
            if(!this.overscroll) return {};

            const height = !this.show ? this.maxHeight : 0;
            const time = this.loaded ? this.time() : 0;
            return {
                'height': height + std,
                'transition': 'height ' + time + 's ease'
            }
        },
        expandedHeight(): number {
            const wrapper = this.$refs.wrapper as Element;

            if (wrapper == undefined) { return 0; }
            const px = wrapper.getBoundingClientRect().height;

            return  px / pxInStd();
        },
        calcHeight() {
            const temp = this.expandedHeight();
            if (temp != 0) { // avoid setting to 0 if display: none;
                this.maxHeight = temp;
            }
        },
        animOver(){
            this.display = this.show;
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

        const animator = this.$refs.animator as HTMLElement;
        animator.addEventListener(Events.transitionEnd, this.animOver,false);


        if(this.initShow) {
            this.expand();
        } else {
            // for prerendering only!
            // this.expand();
            // else if not prerendering...
            this.calcHeight();
            this.display = false;
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

        const animator = this.$refs.animator as HTMLElement;
        animator.removeEventListener(Events.transitionEnd, this.animOver,false);

        this.loaded = false;
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

$pad-top: 0.25rem;
$pad-bot: $pad-top;
$margin-top: 0.5rem;
$font-size: 1.5rem;
$line-height: $font-size * 1.5;
$underline: 0.2rem;
// FIXME unaccounted for 0.8rem
// something wrong with my math?
$height: $pad-top + $pad-bot + $margin-top +
         $line-height + $underline + 0.8rem;


.overscroll {
    max-height: calc(100vh - #{$height} - #{$header-height});
}

.collapse-title {
    text-align: left;
}

.collapsible-root {
    margin-top: $margin-top;
}

.label {
    font-size: $font-size;
    font-family: "Comfortaa", sans-serif;
    margin: 0;
    text-align: left;
}

.section {
    color: inherit;
    outline: none;
    display: flex;
    background: inherit;
    width: 100%;
    //max-width: $small-size;
    padding: $pad-top 1rem;
    margin: 0;

    border: none;
    border-bottom: $underline solid $bright;
    cursor: pointer;
    @include not-selectable;

    transition: all $link-animation-time ease;

    &:hover,
    &:focus {
        background: darken($bright, 5%);
    }
}

@mixin border($swatch) {
    &:hover,
    &:focus {
        border-color: $swatch;
    }
}

.about {@include border($about-swatch)}
.project {@include border($projects-swatch)}

.spacer {
    flex: 1;
}

.icon-container {
    padding-left: 1rem;
    width: 1em;
    position: relative;
    font-size: $font-size;
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
