<template>
<div class='carousel-root'>
    <ul class='carousel'
        :style="{
            'left': -100 * (sliceLength - offset) + '%',
            'transform': 'translateX(' + -100 * offset + '%)',
            'transition': 'transform ' + animTimeS + 's ease-in-out'
        }">
        <li v-for='(path, index) in images'
            :key='index'
            :style="{
                'order': order[index],
            }"
            class='panel'
            @click='goToRelativePanel(1)'>

            <img :src='relative + path'
                 :alt='relative + path'
                 class='image'>
        </li>
    </ul>

    <div class='left'
         @click='goToRelativePanel(-1)'>
        <i class='fas fa-angle-left'/>
    </div>

    <div class='right'
         @click='goToRelativePanel(1)'>
        <i class='fas fa-angle-right'/>
    </div>


    <div class='dots'>
        <i v-for='index in sliceLength'
           :key="index"
           class='fa fa-circle dot'
           :class="[active(index-1) ? 'active-dot' : 'inactive-dot']"
           @click='goToAbsolutePanel(index-1)'/>
    </div>
</div>
</template>



<script lang="ts">
//FIXME known bugs:
//  reanimating will cause strange behaviour.
//  kludge to keep illusion of round carousel... contains x3 the items repeated
import Vue from 'vue';
import { setTimeout, clearTimeout, setInterval, clearInterval } from 'timers';
import { AnimationTimers, toSeconds } from '@/style/ts/Timers';


export default Vue.extend({
    name: 'Carousel',
    data(){
        return {
            images: this.init
                    .concat(this.init)
                    .concat(this.init),
            i: 0,
            order: [] as number[],
            offset: 0,
            previousTimeout: setTimeout(function(){}, -1),
            interval: setInterval(function(){}, -1)
        }
    },
    props: {
        init: {
            type: Array as () => string[],
            required: true
        },
        relative: {
            type: String,
            default: ''
        }
    },
    computed: {
        animating() : boolean {
            return this.offset != 0
        },
        absOffset() : number {
            return Math.abs(this.offset);
        },
        sliceLength() : number {
            return this.images.length/3;
        },
        animTimeMS() : number {
            return AnimationTimers.carousel * Math.sqrt(this.absOffset);
        },
        animTimeS() : number {
            return this.animTimeMS * toSeconds ;
        }

    },
    methods: {
        bubbleLeft() {
            let item = this.order.shift() as number;
            this.order.push(item);
        },
        bubbleRight() {
            let item = this.order.pop() as number;
            this.order.unshift(item);
        },
        active(index: number):boolean {
            return this.i == index;
        },
        stopAnim() {
            this.offset = 0;
            this.interval = setInterval(this.increment, AnimationTimers.autoCarousel);
        },
        increment() {
            this.goToRelativePanel(1);
        },
        goToRelativePanel(relative: number) {
            relative = relative % this.sliceLength;
            this.offset = relative;
            this.i = (this.i + relative) % this.sliceLength;
            if (this.i < 0) {
                this.i += this.sliceLength;
            }

            for (let i = 0; i < this.absOffset; i++) {
                if (this.offset < 0) {
                    this.bubbleLeft();
                }
                else {
                    this.bubbleRight();
                }
            }

            clearInterval(this.interval);
            clearTimeout(this.previousTimeout);
            this.previousTimeout = setTimeout(this.stopAnim, this.animTimeMS);
        },
        goToAbsolutePanel(index: number) {
            let relative = (index - this.i) % this.sliceLength;
            this.goToRelativePanel(relative);
        }
    },
    mounted() {
        this.order = this.images.map(
            function(e: string, i: number): number {
                return i;
            }
        );

        this.interval = setInterval(this.increment, AnimationTimers.autoCarousel);
    },
    beforeDestroy() {
        clearTimeout(this.previousTimeout);
        clearInterval(this.interval)
    }
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';
$dot-size: 1.25rem;
$dot-pad: 0.2rem;
$tablet-dot-size: 1.5rem;
$tablet-dot-pad: 0.35rem;
$phone-dot-size: 1.75rem;
$phone-dot-pad: 0.5rem;
$icon-size: 4rem;
$arrow-space: 1rem;

.carousel-root {
    overflow: hidden;
    position: relative;
}


.carousel {
    position: relative;
    display: flex;
    list-style-type: none;
}

.panel {
    background: $dark;
    display: flex;
    flex: 1 0 100%;
    justify-content: space-around;
}

.image {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

@mixin topcalc($height, $pad) {
    top: calc(50% - #{$icon-size / 2} - #{$height} - #{$pad * 2});
}

.left,
.right {
    @include topcalc($dot-size, $dot-pad);
    @include on-tablet {
        @include topcalc($tablet-dot-size, $tablet-dot-pad);
    }
    @include on-phone {
        @include topcalc($phone-dot-size, $phone-dot-pad);
    }

    position: absolute;
    color: $bright;
    opacity: 0.5;

    font-size: $icon-size;

    transition: all $link-animation-time ease;

    &:hover {
        opacity: 1;
        color: inherit;
    }
}

.left {
    left: $arrow-space;
}

.right {
    right: $arrow-space;
}
.dots {
    bottom: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
}


.dot {
    font-size: $dot-size;
    padding: $dot-pad;
    @include on-tablet {
        padding : $tablet-dot-pad;
        font-size : $tablet-dot-size;
    }
    @include on-phone {
        padding : $phone-dot-pad;
        font-size : $phone-dot-size;
    }
    transition: all $carousel-animation-time ease-in-out;
}

.active-dot {
    color: inherit
}

.inactive-dot {
    color: lighten($light, 20%);
}

</style>
