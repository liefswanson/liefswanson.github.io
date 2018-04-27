<template>
    <router-link @click.native="emitClose" 
                 :to='path' exact 
                 class='item'
                 @mouseenter='mouseEnter'
                 @mouseleave='mouseLeave'
                 tag='li'>
        {{ name }}
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '../../Section';
import { NavEventBus } from '../../NavEventBus';


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
        path():  string { return this.properties.path  },
        name():  string { return this.properties.name  },
        icon():  string { return this.properties.icon  },
        color(): string { return this.properties.color }
    },
    methods: {
        emitClose() {
            NavEventBus.$emit('close-nav-bar');
        },
        mouseEnter() { this.hover = true },
        mouseLeave() { this.hover = false }
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
        cursor: pointer;
    }

    .item:hover {
        background: $dark;
    }
</style>
