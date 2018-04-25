<template>
  <div id="landing" v-touch:swipe.left="swipeHandler">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Langing',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
