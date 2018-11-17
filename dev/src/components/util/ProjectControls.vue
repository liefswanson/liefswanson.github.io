<template>
    <div class='control-bar'>
        <router-link exact
                     to='/projects'
                     class='btn back'>
            <i class='fas fa-angle-left'/>
            to projects
        </router-link>

        <router-link exact
                     to='/projects'
                     class='btn next'>
            to related
            <i class='fas fa-angle-right'/>
        </router-link>

        <button @click='expandAll'
                class='btn expand'>
            expand all
            <i class='fas fa-plus'/>
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavEventBus from '@/scripts/nav/NavEventBus';
import Events from '@/scripts/nav/Events';

export default Vue.extend({
    name: 'ProjectControls',
    data() {
        return {}
    },
    props: {
        next: {
            type: String,
            required: true
        }
    },
    methods: {
        expandAll() {
            NavEventBus.$emit(Events.expandAll);
        }
    }

})
</script>

<style lang="scss" scoped>
@import '@/style/master.scss';

.control-bar {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.125rem solid $xlight;
}

.back {
    margin-right: 0.5rem;
}

.next {
    margin-right: auto;
}


.btn {
    text-decoration: none;
    font-weight: bold;
    color: $dark;
    padding: 0.25rem 0.5rem;
    margin-top: 1rem;
    font-size: 1.25rem;
    background: darken($bright, 7%);
    border: 0.125rem solid darken($bright, 7%);
    border-radius: 1.25rem;
    display: inline-block;
    cursor: pointer;

    transition: all $action-bar-animation-time ease;

    &:hover,
    &:focus {
        border-color: $projects-swatch;
        color: $projects-swatch;
    }
}

</style>
