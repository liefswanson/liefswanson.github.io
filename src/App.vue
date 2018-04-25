<template>
  <div id="root">
    <hideable-header/>
    <nav-bar/>
    <main>
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
  components: {
    "nav-bar": NavBar,
    "hideable-header" : HideableHeader
  }
});
</script>

<style scoped lang='scss'>
@import './style/master.scss'; 
  main {
    height: 20000px;
    background: #dddddd;
  }
</style>

<style lang='scss'>
  // normalize everything, notice not scoped!
  * {
    margin: 0;
    padding: 0;
  }
</style>
