<template>
<div class='carousel-root'>
    <ul class='carousel'
        :style="{
            'transform': 'translateX(' + -100 * (i + 1) + '%)',
            'transition': 'transform ' + animTimeS + 's ease-in-out'
        }">
        <li v-for='(img, index) in images'
            :key='index'
            class='panel'
            @click='goToRelativePanel(1)'>
            <prealloc :img='applyRelative(relative, img)'
                      :inCarousel="true"
                      class='image'/>
        </li>
    </ul>

    <button class='left'
            aria-label='Previous Image'
            title='Previous Image'
            @click='goToRelativePanel(-1)'>
        <i class='fas fa-angle-left'/>
    </button>

    <button class='right'
            aria-label='Next Image'
            title='Next Image'
            @click='goToRelativePanel(1)'>
        <i class='fas fa-angle-right'/>
    </button>

    <div class='dots'>
        <button v-for='index in sliceLength'
           :key="index"
           :aria-label='"go to image " + index'
           class='fa fa-circle dot'
           :class="[active(index-1) ? 'active' : '']"
           @click='goToAbsolutePanel(index-1)'/>
    </div>
</div>
</template>



<script lang="ts">
//FIXME known bugs:
//  reanimating will cause strange behaviour.
//  kludge to keep illusion of round carousel... contains x3 the items repeated
import Vue from 'vue';
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';
import PreallocatedImage    from '@/scripts/main/PreallocatedImage';

import {
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval
} from 'timers';

import {
    positiveMod
} from '@/scripts/main/Utils'

import {
    AnimationTimers,
    DelayTimers,
    toSeconds
} from '@/style/ts/Timers';

export default Vue.extend({
    name: 'Carousel',
    data(){
        return {
            images: [] as PreallocatedImage[],
            i: 0,
            offset: 0,
            previousTimeout: setTimeout(function(){}, -1),
            interval: setInterval(function(){}, -1)
        }
    },
    props: {
        init: {
            type: Array as () => PreallocatedImage[],
            required: true
        },
        relative: {
            type: String,
            default: ''
        }
    },
    computed: {
        animating(): boolean {
            return this.offset != 0
        },
        absOffset(): number {
            return Math.abs(this.offset);
        },
        sliceLength(): number {
            return this.images.length - 2;
        },
        animTimeMS(): number {
            return AnimationTimers.carousel * Math.sqrt(this.absOffset);
        },
        animTimeS(): number {
            return this.animTimeMS * toSeconds ;
        }
    },
    methods: {
        active(index: number):boolean {
            return this.i % this.sliceLength == index;
        },
        applyRelative(relative: string, img: PreallocatedImage): PreallocatedImage {
            return {
                path: relative + img.path,
                alt: img.alt,
                width: img.width,
                height: img.height
            }
        },
        stopAnim() {
            this.offset = 0; // setting offset to 0 will make anim time 0

            this.i = positiveMod(this.i, this.sliceLength)

            this.interval = setInterval(this.increment, DelayTimers.carousel);
        },
        increment() {
            this.goToRelativePanel(1);
        },
        goToRelativePanel(relative: number) {
            if(this.i + relative > this.sliceLength ||
               this.i + relative < -1) {
                return;
            }
            this.offset = relative;
            this.i += relative;
            this.goToPanelHelper();
        },
        goToAbsolutePanel(index: number) {
            this.offset = index - this.i;
            this.i = index;
            this.goToPanelHelper();
        },
        goToPanelHelper() {
            clearInterval(this.interval);
            clearTimeout(this.previousTimeout);

            this.previousTimeout = setTimeout(this.stopAnim, this.animTimeMS);
        },
        initImages() {
            this.images = this.init.slice();

            let first = this.images[0];
            let last = this.images[this.images.length-1];
            this.images.push(first);
            this.images.unshift(last);
        }
    },
    beforeMount() {
        this.initImages();
    },
    mounted() {
        this.interval = setInterval(this.increment, DelayTimers.carousel);
    },
    beforeDestroy() {
        clearTimeout(this.previousTimeout);
        clearInterval(this.interval)
    },
    components: {
        'prealloc': PreallocatedImageVue
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
}

@mixin topcalc($height, $pad) {
    top: calc(50% - #{$icon-size / 2} - #{$height} - #{$pad * 2});
}

.left,
.right {
    border: none;
    height: $icon-size;
    width: $icon-size;
    text-align: center;
    line-height: $icon-size;
    border-radius: $icon-size;
    @include topcalc($dot-size, $dot-pad);
    @include on-tablet {
        @include topcalc($tablet-dot-size, $tablet-dot-pad);
    }
    @include on-phone {
        @include topcalc($phone-dot-size, $phone-dot-pad);
    }
    cursor: pointer;
    @include not-selectable;

    position: absolute;
    color: transparentize($bright, 0.25);
    background: transparentize($dark, 0.5);
    font-size: $icon-size;

    transition: all $link-animation-time ease;

    &:hover,
    &:focus {
        color: inherit;
        background: transparentize($dark, 0.25);
    }
}

.left {
    left: $arrow-space;
}

$arrow-adjustment: 0.3rem;
.fa-angle-left{
    margin-left: -$arrow-adjustment;
}

.fa-angle-right {
    margin-left: $arrow-adjustment;
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
    background: none;
    border: none;
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
    cursor: pointer;
    @include not-selectable;

    color: lighten($light, 20%);
    &:hover,
    &:focus {
        color: inherit;
    }
}

.active.dot {
    color: inherit;
}

</style>
