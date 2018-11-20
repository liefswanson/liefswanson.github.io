<template>
<li class='item'>
    <router-link :to='path'
                 exact
                 :class='classes'
                 ref='link'
                 class='nav-link suppress-link-style'>
        {{ name }}
    </router-link>
</li>
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
    props: {
        properties: {
            type: Object as () => Section,
            required: true
        }
    },
    watch: {
        $route(to, from) {
            if(this.active) {
                this.emitColorChange();
                //console.log(this.color);
            }
        }
    },
    computed: {
        path():  string  { return this.properties.path  },
        name():  string  { return this.properties.name  },
        color(): Swatch  { return this.properties.color },

        classes(): string[] {
            let sectionClass = this.path.slice(1); // classes are based on route path

            if (this.active) {
                return [sectionClass, 'active']
            }

            return [sectionClass]
        },

        active(): boolean {
            // match name of current route's top parent to nav item's name
            let name = this.$route.matched[0].name;
            return name === this.name;
        },
    },
    methods: {
        emitClose() {
            NavEventBus.$emit(Events.closeNav);
        },
        emitColorChange() {
            NavEventBus.$emit(Events.changeColor, this.color);
        }
    },
    mounted() {
        // set the initial colour correctly
        // all NavItems will run this code,
        // but only the active one will change the colour
        if(this.active) {
            this.emitColorChange();
        }
    }
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

@mixin nav-color ($swatch) {
    &.active{
        color: $dark;
        background: $swatch;
    }

    &.active:hover,
    &.active:focus {
        color: $bright;
        background: $swatch;
    }

    &:hover,
    &:focus {
        color: $swatch;
        background: $dark;
    }
}

.projects { @include nav-color($projects-swatch) }
.ongoing  { @include nav-color($ongoing-swatch)  }
.contact  { @include nav-color($contact-swatch)  }
.resume   { @include nav-color($resume-swatch)   }
.about    { @include nav-color($about-swatch)    }

.item {
    padding: 0;
    color: $bright;
    font-size: $nav-item-size;
    font-weight: bolder;
    font-family: 'Comfortaa', sans-serif;

    cursor: pointer;
    @include not-selectable;
}

.nav-link {
    transition: all $nav-hover-animation-time ease;

    box-sizing: border-box;
    padding: $nav-item-padding;
    padding-left: 0;
    height: 100%;
    width: 100%;
    display: block;
}

</style>
