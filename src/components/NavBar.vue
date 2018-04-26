<template>
    <div>
        <transition name='fade'>
            <div class='blinder' 
                 v-if='show'  
                 @click='disable' 
                 v-touch:swipe.left='disable'>
            </div>
        </transition>

        <transition name="slide">
            <nav class='nav-bar' 
                 v-if='show'
                 v-touch:swipe.left='disable'>
            </nav>
        </transition>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "NavBar",

    methods: {
        disable() {
            this.$emit('disable');
        }
    },
    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
});

</script>


<style scoped lang='scss'>
@import '../style/master.scss';
$animation-length: 0.5s;
$blinder-opacity: 0.3;

    .blinder {
        opacity: $blinder-opacity;
        background: $dark;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }



    .nav-bar {
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        width: $nav-width;
        background: $medium;
        z-index: $nav-z;
    }


    .slide-enter-active,
    .slide-leave-active,
    .fade-enter-active,
    .fade-leave-active {
        transition: all $animation-length ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-$nav-width);
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>