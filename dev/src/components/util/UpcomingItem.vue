<template>
<div class='container'>
    <figure class='left'>
        <prealloc class='img-pane'
                  :img="img"/>
        <figcaption>
            <p class='p-note'
               v-html='"Last updated: " + stamp'>
            </p>
        </figcaption>
    </figure>

    <article class='right'>
        <h2 class='name p-title'>{{ name }}</h2>
        <p class='u-para blurb'>
            <slot/>
        </p>
    </article>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import PreallocatedImage from '@/scripts/main/PreallocatedImage';
import PreallocatedImageVue from '@/components/util/PreallocatedImage.vue';

export default Vue.extend({
    name: 'UpcomingItem',
    data() {
        return {
        };
    },
    props: {
        name: {
            type: String,
            required: true
        },
        img: {
            type: Object as () => PreallocatedImage,
            required: true
        },
        stamp: {
            type: String,
            required: true
        }
    },
    components: {
        'prealloc': PreallocatedImageVue
    }
})
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    @include on-tablet-or-down {
        grid-template-columns: minmax(100%, 20rem);
    }
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 0.125rem solid $xlight;
    grid-gap: 2rem;

}

.caption {
    width: 100%;
}

.right {
    height: 100%;
    max-width: 35rem;
}

.name {
    padding-bottom: 1rem;
    font-size: 1.5rem;
}

.left {
    max-width: 35rem;
}

.img-pane {
    margin-top: 0.5rem;
    width: 100%;
    height: auto;
}

.blurb {
    max-width: 25rem;
}

</style>
