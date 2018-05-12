<template>
<div class='main-content'>
    <collapse title='The Short Version'
              :initShow='true'>
        <p class='u-para'>
            this is some stuff about me and things wow
        </p>
    </collapse>
    <collapse title='Education'>
    </collapse>
    <collapse title='Skills'>
    </collapse>
    <collapse title='Hobbies'>
    </collapse>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Collapsible from '@/components/util/Collapsible.vue';

export default Vue.extend({
    name: "About",
    components: {
        'collapse': Collapsible
    }

});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.main-content {
    max-width: $large-size;
}
</style>
