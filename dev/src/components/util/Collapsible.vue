<template>
<div class='collapsible-root'>
    <h1 class='section'
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
    </h1>

    <div class='collapsible'
         :style='{ "max-height": maxHeight }'>
         <div ref='wrapper'
              class='padded'>
            <slot/>
         </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Events      from '@/scripts/nav/Events';
import NavEventBus from '@/scripts/nav/NavEventBus';

import { std, pxInStd } from '@/style/ts/StandardUnits';

export default Vue.extend({
    name: 'Collapsible',
    data() {
        return {
            show: false,
            maxHeight: '0'
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
        }
    },
    methods: {
        toggle() {
            this.show = !this.show;
            this.calcHeight();
        },
        icon():string {
            if (this.show){
                return 'fa-minus';
            }

            return 'fa-plus';
        },
        calcHeight() {
            if (!this.show) {
                this.maxHeight = '0';
                return;
            }

            let wrapper = this.$refs.wrapper as Element;
            let px = wrapper.getBoundingClientRect().height;


            this.maxHeight =  px / pxInStd() + std;
        },
    },
    mounted() {
        NavEventBus.$on(Events.navAnimDone, this.calcHeight);
        window.addEventListener(Events.resize, this.calcHeight);

        if(this.initShow) {
            this.toggle();
        }
    },
    beforeDestroy(){
        NavEventBus.$off(Events.navAnimDone, this.calcHeight);
        window.removeEventListener(Events.resize, this.calcHeight);
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.section {
    display: flex;
    max-width: $small-size;
    padding: 0.25rem;
    padding-left: 1rem;
    margin: 0;
    margin-top: 0.5rem;
    border-bottom: 0.2rem solid $bright;
    cursor: pointer;

    transition: all $link-animation-time ease-out;

    &:hover {
        border-color: $about-swatch;
        background: darken($bright, 5%);
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
    transition: max-height $collapse-animation-time ease-out;
    overflow: hidden;
}


.padded {
    $top: 0.5rem;
    $side: 1.5rem;
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
