<template>
    <router-link @click.native="followLink"
                 :to='path'
                 exact
                 class='item clickable'
                 :style='palette'
                 @mouseenter.native='mouseEnter'
                 @mouseleave.native='mouseLeave'
                 tag='li'>
        {{ name }}
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import Section     from '@/scripts/nav/Section';
import NavEventBus from '@/scripts/nav/NavEventBus';
import Events      from '@/scripts/nav/Events';

import Breakpoints from '@/style/ts/Breakpoints';
import Swatch      from '@/style/ts/Swatch';



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
        path():  string  { return this.properties.path  },
        name():  string  { return this.properties.name  },
        icon():  string  { return this.properties.icon  },
        color(): Swatch  { return this.properties.color },

        active(): boolean {
            let fullPath = this.$route.fullPath;
            let location = fullPath.indexOf(this.path);

            return location != -1;
        },

        palette(): object {
            var fore = Swatch.bright;
            var back = Swatch.medium;

            if (this.active) {
                //fore = this.color; //option 1
                fore = Swatch.dark; // option 2
                back = this.color; // option 2
            }

            if (this.hover) {
                fore = this.color; // option 2
                back = Swatch.dark; // option 1 & 2
            }

            return {
                color: fore,
                background: back
            }
        }
    },
    methods: {
        followLink() {
            if (Breakpoints.onTabletOrDown()) {
                this.emitClose();
            }

            this.emitColorChange();
            this.mouseLeave(); // option 2
        },
        emitClose() {
            NavEventBus.$emit(Events.closeNav);
        },
        emitColorChange() {
            NavEventBus.$emit(Events.changeColor, this.color);
        },
        mouseEnter() { this.hover = true  },
        mouseLeave() { this.hover = false },
    },
    mounted() {
        // set the initial colour correctly
        // all NavItems will run this code,
        // but only the current one will change the colour
        if(this.active) {
            console.log("active" + this.color);
            this.emitColorChange();
        }
    }
})

</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

    .item {
        padding: $nav-item-padding;
        padding-left: 0;
        color: $bright;
        font-size: $nav-item-size;
        font-weight: bolder;

        @include not-selectable;
    }

</style>
