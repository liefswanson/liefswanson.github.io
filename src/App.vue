<template>
  <div id="root">
    <hideable-header/>
    <div id="nav">

    </div>

    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script lang='ts'>
import HideableHeader from "./components/HideableHeader.vue"

export default {
  name: 'App',
  components: {
    "hideable-header" : HideableHeader
  }
}
</script>

<style scoped lang='scss'>
@import './style/master.scss';

  #main {
    height: 20000px;
  }
</style>
