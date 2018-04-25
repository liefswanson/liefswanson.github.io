<template>
    <div>
        <transition name="hide">
            <div v-if='show' id='main'></div>
        </transition>
    </div>

</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
    name: "hideable-header",
    data() {
        return {
            previous: 0,
            show: true
        };
    },
    methods: {
        handleScroll() {
            let current = window.scrollY;

            let scrollingDown = current > this.previous;
            let scrollingUp = current < this.previous;

            if (this.show && scrollingDown) {
                this.show = false;
            } else if (!this.show && scrollingUp) {
                this.show = true;
            } // else... already in the right state!
            
            this.previous = current
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
});
</script>

<style scoped lang="scss">
@import "../style/master.scss";
$animation-length: 0.35s;

#main {
  background: #26292C;
  height: $header-height;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.hide-enter-active {
  transition: all $animation-length ease;
}

.hide-leave-active {
  transition: all $animation-length ease;
}

.hide-enter,
.hide-leave-to {
  transform: translateY(-$header-height);
}
</style>
