<template>
    <li>
        <router-link @click.native="emitClose" 
                     :to='path' exact 
                     class='item' 
                     tag='li'>
            {{ name }}
        </router-link>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Section from '../../Section';
import { NavEventBus } from '../../NavEventBus';


export default Vue.extend({
    name: "NavItem",
    props: {
        properties: {
            type: Object as () => Section,
            required: true
        }
    },
    computed: {
        path: function(): string { return this.properties.path },
        name: function(): string { return this.properties.name },
        icon: function(): string { return this.properties.icon }
    },
    methods: {
        emitClose() {
            NavEventBus.$emit('close-nav-bar');
        }
    }
})

</script>


<style lang="scss" scoped>
    .item {
        margin: 1rem;
    }
</style>
