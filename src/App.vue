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
import Vue from 'vue';
import HideableHeader from "./components/nav/HideableHeader.vue";
import NavBar from "./components/nav/NavBar.vue";
import { NavEventBus } from './NavEventBus';


export default Vue.extend({
    name: 'App',
    components: {
        "nav-bar": NavBar,
        "hideable-header" : HideableHeader
    },
    methods: {
        emitOpen() {
            NavEventBus.$emit('open-nav-bar');
        },
        emitClose() {
            NavEventBus.$emit('close-nav-bar');
        }
    }
    });
</script>

<style lang='scss' scoped>
@import '@/style/master.scss';
    #root {
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background: $background;
    }
</style>

<style lang='scss'>
@import '@/style/master.scss'; 

    // normalize everything, notice not scoped!
    * {
        margin: 0;
        padding: 0;
    }

    button:focus {
        outline: none;
    }
    
    button::-moz-focus-inner {
        border: none;
    }
</style>
