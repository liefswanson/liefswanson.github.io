<template>
<li class='item'>
    <router-link :to='path'
                 exact
                 :class='[colorClass, active ? "selected" : ""]'
                 ref='link'
                 class='enclosed suppress-link-style'>
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
    watch: {
        $route(to, from) {
            if(this.active) {
                this.emitColorChange();
                //console.log(this.color);
            }
        }
    },
    computed: {
        colorClass(): string { return this.path.slice(1) },
        path():  string  { return this.properties.path  },
        name():  string  { return this.properties.name  },
        color(): Swatch  { return this.properties.color },

        active(): boolean {
            let fullPath = this.$route.fullPath;
            let location = fullPath.indexOf(this.path);

            return location != -1;
        },
    },
    methods: {
        emitClose() {
            NavEventBus.$emit(Events.closeNav);
        },
        emitColorChange() {
            NavEventBus.$emit(Events.changeColor, this.color);
        },
        loseFocus() {
            alert('trying to lose focus');
            let link = this.$refs.link as HTMLElement;
            link.blur();
        }
    },
    mounted() {
        // set the initial colour correctly
        // all NavItems will run this code,
        // but only the current one will change the colour
        if(this.active) {
            this.emitColorChange();
        }
    }
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

@mixin nav-color ($swatch) {
    transition: all $nav-hover-animation-time ease;

    &.selected{
        color: $dark;
        background: $swatch;
    }

    &.selected:hover,
    &.selected:focus {
        color: $bright;
        background: $swatch;
    }

    &:hover,
    &:focus {
        color: $swatch;
        background: $dark;
    }
}

.projects {
    @include nav-color($projects-swatch)
}


.ongoing {
    @include nav-color($ongoing-swatch)
}

.contact {
    @include nav-color($contact-swatch)
}

.resume {
    @include nav-color($resume-swatch)
}

.about {
    @include nav-color($about-swatch)
}


.item {
    padding: 0;
    color: $bright;
    font-size: $nav-item-size;
    font-weight: bolder;
    font-family: 'Comfortaa', sans-serif;

    cursor: pointer;
    @include not-selectable;
}

.enclosed {
    box-sizing: border-box;
    padding: $nav-item-padding;
    padding-left: 0;
    height: 100%;
    width: 100%;
    display: block;
}

</style>
