<template>
    <div>
        <transition name="hide">
            <div v-if='show' @click='show = !show' id='main'></div>
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

            if (this.show && this.scrollingDown(current)) {
                this.show = false;
            } else if (!this.show && this.scrollingUp(current)) {
                this.show = true;
            }
            
            this.previous = current
        },
        scrollingDown(current: number): boolean {
            return current > this.previous;
        },
        scrollingUp(current: number): boolean {
            return current < this.previous;
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

#main {
  background: #dddddd;
  height: $header-height;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.hide-enter-active {
  transition: all 0.4s ease;
}

.hide-leave-active {
  transition: all 0.4s ease;
}

.hide-enter,
.hide-leave-to {
  transform: translateY(-$header-height);
}
</style>
