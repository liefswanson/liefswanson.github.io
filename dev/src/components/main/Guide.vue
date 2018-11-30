<template>
<div class='main-content'>
    <collapse title='Tone and Voice Guide'
              guide
              initShow>
    </collapse>
</div>
</template>

<style lang="scss" scoped>
@import '@/style/master.scss';

.main-content {
    max-width: $small-size;
    margin: auto;
}

.g-link { @include link($guide-swatch); }
</style>

<script lang="ts">
import Vue from 'vue';
import Collapsible from '@/components/util/Collapsible.vue';

export default Vue.extend({
    name: "Guide",
    components: {
        'collapse': Collapsible
    },

});
</script>