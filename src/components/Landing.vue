<template>
  <div id="landing"  v-touch:swipe.left="swipeHandler">
    <h1 v-for='i in 10'>{{ msg }}</h1>

  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Landing',
  data () {
      let m : String = "Lief's new website, in progress!"
    return {
      msg: m
    }
  },
  methods: {
    swipeHandler() {
      alert("wow, so touch, much event!")
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../style/master.scss";


</style>
