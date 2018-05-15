<template>
<div class='main-content'>
    <h1>
        If you want to contact or follow me, you can...
    </h1>
    <div class='contacts'>
        <ul class='icon-list'>
            <li v-for='contact in contacts'
                :key='contact.name'
                class='icon'>
                <input :id='contact.name'
                        :value='contact'
                        type="radio"
                        class='radio'
                        v-model='active'>
                <label :title='contact.name'
                       :for='contact.name'>
                    <i :class='[contact.fa, contact.icon]'/>
                </label>
            </li>
        </ul>
    </div>

    <transition name='fade'
                mode='out-in'>
        <h1 v-for='contact in contacts'
            :key='contact.name'
            v-if='active == contact'>
                {{active.msg}}
                <a target='_blank'
                   :href='active.link'
                   class='link'>
                   {{active.name}}
                </a>
        </h1>
    </transition>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Contacts from '@/scripts/main/Contacts';

export default Vue.extend({
    name: "Contact",
    data() {
        return {
            contacts: Contacts,
            active: Contacts[0]
        }
    }
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.main-content {
    text-align: center;
    align-content: center;
}

.icon-list {
    justify-content: center;
    font-size: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 4rem);
    grid-gap: 0.5rem;
    list-style: none;
}

.radio {
    position: absolute;
    top: -1000px;
    visibility: hidden;

    + label {
        transition: color $highlight-animation-time ease !important;
        color: $light;
        cursor: pointer;
        transition: color 0.25s ease;

        &:hover {
            color: $dark;
        }
    }

    &:checked + label {
        color: $contact-swatch;

        &:hover {
            color: darken($contact-swatch, 15%);
        }
    }
}

.link {
    color: $dark;

    transition: font-size $link-animation-time ease;


    &:hover {
        font-size: 1.33em;
    }

    &:visited {
        color: $light;
    }
}

.fade-enter-active,
.fade-leave-active {
    text-align: center;
    transition: all $highlight-animation-time / 2 ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
