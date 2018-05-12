<template>
<div class='collapsible-root'>
    <h1 class='section'
        @click='toggle'>

        {{title}}

        <div class='spacer'></div>
        <div class='icon-container'>
            <transition name='toggling'>
                <i v-if='show'
                    key='minus'
                    class='fas toggle-icon fa-minus'/>
                <i v-else
                    key='plus'
                    class='fas toggle-icon fa-plus'/>
            </transition>
        </div>
    </h1>

    <div class='collapsible'
         :class='{ "collapsed": !show }'>
         <div class='padded'>
            <slot/>
         </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Collapsible',
    data() {
        return {
            show: this.initShow
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        initShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        icon():string {
            if (this.show){
                return 'fa-minus';
            }

            return 'fa-plus';
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.section {
    display: flex;
    max-width: $small-size;
    padding: 0.5rem;
    margin: 0;
    border-bottom: 3px solid $bright;
    cursor: pointer;

    transition: all $link-animation-time ease-out;

    &:hover {
        border-color: $about-swatch;
        background: darken($bright, 5%);
    }
}

.spacer {
    flex: 1;
}

.icon-container {
    position: relative;
}

.toggle-icon {
    font-size: 0.8em;
    position: absolute;
    right: 0;
    top: 0.5rem;
}

.collapsible {
    transition: max-height $collapse-animation-time ease-out;
    overflow: hidden;
    max-height: 10rem;
}

.collapsed {
    max-height: 0rem;
}

.padded {
    padding: 1.5rem;
}

.toggling-enter-active,
.toggling-leave-active {
    transition: all $collapse-animation-time ease;
}

.toggling-enter,
.toggling-leave-to {
    opacity: 0;
}

</style>
