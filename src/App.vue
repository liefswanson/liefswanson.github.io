<template>
  <div id="root" 
       v-touch:swipe.right='openNavBar'
       v-touch:swipe.left='closeNavBar'>
    <hideable-header/>
    <nav-bar/>
    <main>
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
    openNavBar() {
      NavEventBus.$emit('open-nav-bar');
    },
    closeNavBar() {
      NavEventBus.$emit('close-nav-bar');
    }
  }
});
</script>

<style lang='scss' scoped>
@import '@/style/master.scss'; 
  main {
    background: $background;
  }
</style>

<style lang='scss'>
  // normalize everything, notice not scoped!
  * {
    margin: 0;
    padding: 0
  }

  button:focus {
    outline: none;
  }
  
  button::-moz-focus-inner {
    border: none;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
