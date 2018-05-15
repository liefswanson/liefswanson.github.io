<template>
<div class='carousel-root'
     @click='increment'>
    <ul class='carousel'>
        <li v-for='(path, index) in images'
            :key='index'
            :style="{'transform': 'translateX(' + -100*i + '%)',
                     'opacity': (index + 1) / images.length}"
            :class="{'reference-panel': index == images.length - 1 }"
            class='panel'>

            <img :src='relative + path'
                 :alt='relative + path'
                 class='image'
                 :style="{'left': 100*index + '%'}">
        </li>
    </ul>

    <div class='dots'>
        <i v-for='(path, index) in images'
           :key="index"
           class='fa fa-bullet'
           :class="active(index) ? 'active-dot' : 'dot' "/>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Carousel',
    data(){
        return {
            i: 0,
        }
    },
    props: {
        images: {
            type: Array as () => String[],
            required: true
        },
        relative: {
            type: String,
            default: ''
        }
    },
    methods: {
        active(index: number):boolean {
            return this.i == index;
        },
        increment() {
            this.i++;

            if (this.i >= this.images.length) {
                this.i = 0;
            }
        }
    },
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.carousel-root {
    overflow: hidden;
}


.carousel {
    position: relative;

    display: flex;
    list-style-type: none;

}

.panel {
    display: flex;
    flex: 1 0 100%;
    transition: all 1s ease-in-out;
    justify-content: space-around;
}

.reference-panel {
    order: 1;
}

.image {
    height: auto;
    width: 100%;
    object-fit: contain;
}

.dots {
    position: absolute;
}

.active-dot {
    color: inherit
}

.dot {
    color: $dark;
}

</style>
