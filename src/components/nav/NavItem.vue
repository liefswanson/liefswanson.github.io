<template>
    <router-link @click.native="emitAll" 
                 :to='path' exact 
                 class='item'
                 :style='palette'
                 @mouseenter.native='mouseEnter'
                 @mouseleave.native='mouseLeave'
                 tag='li'>
        {{ name }}
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '../../scripts/nav/Section';
import NavEventBus from '../../scripts/nav/NavEventBus';
import Swatches from '../../style/Swatches';
import NavEvents from '../../scripts/nav/NavEvents';



export default Vue.extend({
    name: "NavItem",
    data() {
        return {
            hover: false
        }
    },
    props: {
        properties: {
            type: Object as () => Section, // typescrit hack for vue props
            required: true
        }
    },
    computed: {
        path():   string  { return this.properties.path  },
        name():   string  { return this.properties.name  },
        icon():   string  { return this.properties.icon  },
        color():  string  { return this.properties.color },
        active(): boolean { return this.$route.name == this.name },

        palette(): object {
            var fore = Swatches.white; 
            var back = Swatches.medium;
            
            if (this.active) {
                fore = this.color; //option 1
                //fore = Swatches.dark; // option 2
                //back = this.color; // option 2
            }

            if (this.hover) {
                //fore = this.color; // option 2
                back = Swatches.dark; // option 1 & 2 
            }

            return { 
                color: fore,
                background: back     
            }
        }
    },
    methods: {
        emitAll() {
            this.emitClose();
            this.emitColorChange();
        },
        emitClose() {
            NavEventBus.$emit(NavEvents.closeNav);
        },
        emitColorChange() {
            NavEventBus.$emit(NavEvents.changeColor, this.color);
        },
        mouseEnter() { this.hover = true  },
        mouseLeave() { this.hover = false },
    },
    mounted() {
        if(this.active) {
            this.emitColorChange();
        }
    }
})

</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

    .item {
        padding: $nav-item-size;
        padding-left: 0;
        color: $white;
        font-size: $nav-item-size;
        font-weight: bolder;
        cursor: pointer;
    }

</style>
