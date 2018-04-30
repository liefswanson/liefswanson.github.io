<template>
    <div id='root'
         v-touch:swipe.right='emitOpen'
         v-touch:swipe.left='emitClose'>
        <hideable-header/>
        <nav-bar/>
        <main id='main-root'>
            <router-view/>
        </main>
    </div>
</template>

<script lang='ts'>
import Vue            from 'vue';
import HideableHeader from "@/components/nav/HideableHeader.vue";
import NavBar         from "@/components/nav/NavBar.vue";

import NavEventBus from '@/scripts/nav/NavEventBus';
import NavEvent    from '@/scripts/nav/NavEvent'

export default Vue.extend({
    name: 'App',
    components: {
        "nav-bar": NavBar,
        "hideable-header" : HideableHeader
    },
    methods: {
        emitOpen() {
            NavEventBus.$emit(NavEvent.openNav);
        },
        emitClose() {
            NavEventBus.$emit(NavEvent.closeNav);
        },
    }
});
</script>

<style lang='scss' scoped>
@import '@/style/master.scss';

    #root {
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background: $bright;
    }

    #main-root {
        height: calc(100% - #{$header-height});
    }
</style>

<style lang='scss'> // normalize everything, notice not scoped!
@import '@/style/normalize.scss';

    * {
        padding: 0;
        margin: 0;
    }

    button:focus {
        outline: none;
    }

</style>
