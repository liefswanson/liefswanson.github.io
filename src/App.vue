<template>
  <div id="root">
    <hideable-header :showNav='showNav' @toggle='toggleNav'/>
    <nav-bar :show='showNav' @disable='disableNav'/>
    <main v-touch:swipe.right="enableNav">
      <router-view/>
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
    toggleNav() {
      this.showNav = !this.showNav;
    },
    enableNav() {
      this.showNav = true;
    },
    disableNav() {
      this.showNav = false;
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
