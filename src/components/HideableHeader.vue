<template>
    <header>
        <div class=spacer></div>
        <transition name="hide">
            <div class='hideable' v-if='show'>
                <h1 class='content'>Lief Swanson</h1>
            </div>
        </transition>
    </header>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
    name: "HideableHeader",
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
            
            this.previous = current;
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

.spacer {
    height: $header-height;
    background: $secondary;
}

.hideable {
    background: $primary;
    height: $header-height;
    line-height: $header-height;
    width: 100%;
    position: fixed;
    left: 0;
    text-align: right;
    top: 0;
    z-index: $header-z; 
}

.content {
    margin: 1rem;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    color: $secondary;
}

// all of these required by vue for transitions with name="hide"
.hide-enter-active,
.hide-leave-active {
    transition: all $animation-length ease;
}
.hide-enter,
.hide-leave-to {
    transform: translateY(-$header-height);
}
</style>
