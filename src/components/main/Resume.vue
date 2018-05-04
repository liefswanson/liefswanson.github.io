<template>
<div class='resume-container'>
        <div class='height-hack'>
            <div class='action-bar'
                 :style='{ "padding-top": adjustmentInUnits,
                           "transition": animSettings}'>
                <div class='filler'></div>
                <button title='Download'
                        class='btn'>
                    <a class='override-color'
                       href="static/resume.pdf"
                       download>
                        <i class='fa fa-download'/>
                    </a>
                </button>
                <button title='Print'
                        class='btn'
                        @click='$refs.pdf.print()'>
                    <i class='fa fa-print'/>
                </button>
            </div>
        </div>
        <pdf class='pdf'
             ref='pdf'
             src='static/resume.pdf'/>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
//@ts-ignore
import pdf from 'vue-pdf';

import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events';

import Meausurement        from '@/style/ts/Meausurement';
import { std, pxInStd }    from '@/style/ts/StandardUnits';
import { AnimationTimers,
         toSeconds }       from '@/style/ts/Timers';

export default Vue.extend({
    name: "Resume",
    data() {
        return {
            headerOut: true,
            adjustment: 0, // headerOut && !atTop
        }
    },
    watch: {
        headerOut: function() {
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
            let y = window.scrollY / pxInStd;
            if (y <= Meausurement.headerHeight) {
                distance = 0;
            }

            let animTime = distance * AnimationTimers.header * toSeconds;
            return "padding-top " + animTime + 's ease';
        }
    },
    methods: {
        headerWasToggled() {
            this.headerOut = !this.headerOut;
        },
        updateAdjustment() {
            let y = window.scrollY / pxInStd;

            if(!this.headerOut) {
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
        NavEventBus.$on(Events.toggleHeader, this.headerWasToggled);
        window.addEventListener(Events.scroll, this.updateAdjustment);

    },
    beforeDestroy() {
        NavEventBus.$off(Events.toggleHeader, this.headerWasToggled);
        window.removeEventListener(Events.scroll, this.updateAdjustment);
    },
    components: {
        pdf
    },
})
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';
    .resume-container {
        max-width: $large-size;
        margin: auto;
    }

    .pdf {
        z-index: -1;
    }

    .filler {
        flex: 1;
    }

    .height-hack {
        position: sticky;
        top: 0;
        height: 0;
    }

    .action-bar {
        font-size: 2.5rem;
        display: flex;
        background: none;

        transition: background 1s ease;
        transition: padding-top $header-animation-time ease;
    }

    .action-bar:hover {
        background: transparentize($medium, 0.5);
        .btn {
            transition: opacity $pdf-animation-time ease;
            opacity: 1;
        }
    }

    .override-color {
        color: inherit;
    }

    .btn {
        color: $dark;
        opacity: 0.5;
        background: none;
        border-style: none;
        padding: 0.5rem;
        padding-right: 1rem;

        :hover {
            color: $resume-swatch;
            border-style: none;
            cursor: pointer;
        }

        transition: all $pdf-animation-time ease;
    }
</style>

<style lang="scss">
//override annotationLayer in pdf.js to keep it from extending page past the end of pdf
    .annotationLayer {
        display: none;
    }
</style>

