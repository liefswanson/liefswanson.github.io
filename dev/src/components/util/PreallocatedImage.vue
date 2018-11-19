<template>
<div class='img-container'>
    <div :style='style'></div>
    <img class='img'
         :class='inCarousel ? "carousel-img": ""'
         :src="img.path"
         :alt="img.alt">
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import PreallocatedImage from '@/scripts/main/PreallocatedImage';

export default Vue.extend({
    name: "PreallocatedImage",
    computed: {
        style() : object {
            let height = this.img.height / this.img.width;

            return {
                'padding-top': (height * 100) + '%'
            }
        }
    },
    props: {
        img: {
            type: Object as () => PreallocatedImage,
            required: true
        },
        inCarousel: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style lang="scss" scoped>
.img-container {
    position: relative;
}

.img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.carousel-img {
    object-fit: contain;
}
</style>
