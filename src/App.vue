<template>
  <div id="root">
    <hideable-header/>
    <nav-bar/>
    <main v-touch:swipe.left="swipeHandler">
      <router-view v-bind:show='showNav'/>
    </main>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import HideableHeader from "./components/HideableHeader.vue"
import NavBar from "./components/NavBar.vue"

export default Vue.extend({
  name: 'App',
  data() {
    return {
      showNav: false
    }
  },
  components: {
    "nav-bar": NavBar,
    "hideable-header" : HideableHeader
  },
  methods: {
    swipeHandler() {
      console.log("wow, so touch, much event!");
    }
  }
});
</script>

<style scoped lang='scss'>
@import './style/master.scss'; 
// testing purposes only
  main {
    height: 20000px;
    background: $secondary;
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
