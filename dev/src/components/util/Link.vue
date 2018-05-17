<template>
    <span>
        <router-link
            v-if='local'
            :to='to'
            :class="featured ? 'f-link' : 'p-link'"
            exact>
            <slot/>
        </router-link>
        <a  v-else
            :href='to'
            :class="featured ? 'f-link' : 'p-link'">
            <slot/>
        </a>
    </span>
</template>


<script lang="ts">
import Vue from 'vue';
import { SectionMap } from '@/scripts/nav/NavItems';

export default Vue.extend({
    name: 'Link',
    computed: {
        featured(): boolean {
            return this.$route.name == SectionMap.featured.name;
        }
    },
    props: {
        local: {
            type: Boolean,
            default: false
        },
        to: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';



.p-link {
    @include link($projects-swatch);
}

.f-link {
    @include link($featured-swatch);
}
</style>
