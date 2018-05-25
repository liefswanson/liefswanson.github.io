<template>
<div class='sticky'
     :style='{
         top: adjustmentInUnits,
         height: height
     }'>
        <slot/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events';

import Measurement from '@/style/ts/Measurement';
import {
    std,
    pxInStd
} from '@/style/ts/StandardUnits';
import {
    AnimationTimers,
    toSeconds
} from '@/style/ts/Timers';
import isIE from '@/scripts/main/IE';

export default Vue.extend({
    name: 'StickyBar',
    data() {
        return {
            headerShowing: true,
            adjustment: 0
        }
    },
    props: {
        overlay: {
            default: true,
            type: Boolean,
        }
    },
    watch: {
        headerShowing: function() {
            this.updateAdjustment();
        }
    },
    computed: {
        adjustmentInUnits(): string {
            return this.adjustment + std;
        },
        height() : string {
            if (this.overlay || isIE()){
                return '0';
            }

            return Measurement.headerHeight + std
        }
    },
    methods: {
        headerClosed() {
            this.headerShowing = false;
        },
        headerOpened() {
            this.headerShowing = true;
        },
        updateAdjustment() {
            if(!this.headerShowing || !this.supportsSticky()) {
                this.adjustment = 0;
                return;
            }

            this.adjustment = Measurement.headerHeight;
        },
        supportsSticky(): boolean {
            return  CSS !== undefined &&
                    CSS.supports('(position: sticky)');
        }
    },
    mounted() {
        NavEventBus.$on(Events.openHeader, this.headerOpened);
        NavEventBus.$on(Events.closeHeader, this.headerClosed);
        window.addEventListener(Events.scroll, this.updateAdjustment);

        this.headerShowing = window.scrollY == 0;
    },
    beforeDestroy() {
        NavEventBus.$off(Events.openHeader, this.headerOpened);
        NavEventBus.$off(Events.closeHeader, this.headerClosed);
        window.removeEventListener(Events.scroll, this.updateAdjustment);
    },
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.sticky {
    z-index: $sticky-z;
    position: fixed;
    padding-top: $header-height;
    right: 0;
    width: 100%;

    @supports (position: sticky) {
        position: sticky;
        padding-top: 0;
    }

    transition: top $header-animation-time ease;
}

</style>
