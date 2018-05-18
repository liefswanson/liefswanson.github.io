<template>
<div class='sticky'
     :style='{height: height}'>
    <div :style='{ "padding-top": adjustmentInUnits,
                   "transition": animSettings}'>
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
        }
    },
    computed: {
        adjustmentInUnits(): string {
            return this.adjustment + std;
        },
        animSettings(): string {
            // distance as measured in "header-height" units (NOT: rem, em, px, in... etc)
            let distance = this.adjustment / Meausurement.headerHeight;

            // scrolled well past top of page
            if (this.adjustment == 0) {
                distance = 1;
            }

            // almost at top, but not quite
            let y = window.scrollY / pxInStd();
            if (y <= Meausurement.headerHeight) {
                distance = 0;
            }

            let animTime = distance * AnimationTimers.header * toSeconds;
            return "padding-top " + animTime + 's ease';
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
            let y = window.scrollY / pxInStd();

            if(!this.headerShowing) {
                this.adjustment = 0;
                return;
            }

            if (y > Meausurement.headerHeight) {
                this.adjustment = Meausurement.headerHeight;
                return;
            }

            this.adjustment = y;
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
    position: sticky;
    top: 0;

    @include on-phone {
        height: 100%;
    }
}
</style>
