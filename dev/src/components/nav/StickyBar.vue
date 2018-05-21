<template>
<div class='sticky'
     :style='{height: height}'>
    <div class='adjuster'
         :style='{ "padding-top": adjustmentInUnits }'>
        <slot/>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events';

import Meausurement     from '@/style/ts/Meausurement';
import { std, pxInStd } from '@/style/ts/StandardUnits';
import { AnimationTimers,
         toSeconds }    from '@/style/ts/Timers';
import Measurement from '@/style/ts/Meausurement';

export default Vue.extend({
    name: 'StickyBar',
    data() {
        return {
            headerShowing: true,
            adjustment: 0, // headerShowing && !atTop
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
        },
        $route() {
            this.$forceUpdate();
        }
    },
    computed: {
        adjustmentInUnits(): string {
            return this.adjustment + std;
        },
        height() : string {
            if (this.overlay){
                return '0'
            }

            return Meausurement.headerHeight + std
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
            this.adjustment = this.headerShowing
                                ? Measurement.headerHeight
                                : 0;
        }
    },
    mounted() {
        NavEventBus.$on(Events.openHeader, this.headerOpened);
        NavEventBus.$on(Events.closeHeader, this.headerClosed);
        window.addEventListener(Events.scroll, this.updateAdjustment);

        this.updateAdjustment();
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
    width: 100%;

    @include on-phone {
        height: 100%;
    }
}

.adjuster {
    transition: padding-top $header-animation-time ease;
    position: fixed;
    z-index: $sticky-z;
    top: 0;
    right: 0;
    width: 100%;
}
</style>
