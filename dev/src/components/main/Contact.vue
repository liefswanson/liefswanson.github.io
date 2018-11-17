<template>
<div class='main-content'>
    <h1>
        If you want to contact or follow me, you can...
    </h1>
    <div class='contacts'>
        <ul class='icon-list'>
            <li v-for='contact in contacts'
                :key='contact.name'
                class='icon'
                @mouseenter='mouseEnter(contact)'
                @mouseleave='mouseLeave(contact)'
                @click='click(contact)'>
                <i :title='contact.name'
                    :for='contact.name'
                    :class='[contact.fa,
                             contact.icon,
                             active == contact ? "active": ""]'
                    class='icon-wrapper'/>
                <strong class='details'
                        :class='active != contact ? "transparent" : ""'>
                        {{contact.msg}}
                    <a target='_blank'
                        :href='contact.link'
                        class='link'>
                        {{contact.name}}
                    </a>
                </strong>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Contacts from '@/scripts/main/Contacts';
import Contact from '@/scripts/main/Contact';
import { DelayTimers } from '@/style/ts/Timers';

let defaultInterval = setInterval(function(){}, -1)

export default Vue.extend({
    name: "Contact",
    data() {
        return {
            contacts: Contacts,
            active: Contacts[0],
            idx: 0,
            paused: false,
            interval: defaultInterval
        }
    },
    methods: {
        stopCarousel() {
            if (this.interval != defaultInterval) {
                clearInterval(this.interval)
                this.interval = defaultInterval
            }
        },
        startCarousel() {
            this.interval = setInterval(this.increment, DelayTimers.contact);
        },
        mouseEnter(entering: Contact) {
            this.active = entering;
            this.idx = this.contacts.indexOf(this.active);

            this.stopCarousel();
        },
        mouseLeave(leaving: Contact){
            if (this.paused) {
                return;
            }

            this.stopCarousel();
            if (!this.paused) {
                this.startCarousel();
            }
        },
        click(clicked: Contact) {
            this.paused = !this.paused
        },
        increment() {
            this.idx++;
            this.idx = this.idx % this.contacts.length;

            this.active = this.contacts[this.idx];
        }
    },
    mounted() {
        this.interval = setInterval(this.increment, DelayTimers.contact);
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.main-content {
    max-width: $small-size;
    margin: auto;
}

$contact-size: 3rem;
.details {
    $detail-size: 2rem;
    font-size: $detail-size;
    vertical-align: ($contact-size - $detail-size)/2;
    transition: opacity $highlight-animation-time ease;
}

.icon-list {
    font-size: $contact-size;
    list-style-type: none;
}

.transparent {
    opacity: 0;
    @include not-selectable;
}

.icon-wrapper {
    padding: 1rem;
    padding-left: 0;
    @include not-selectable;

    transition: color $highlight-animation-time ease !important;
    color: $light;
    cursor: pointer;
    transition: color 0.25s ease;

    &:hover,
    &:focus {
        color: $dark;
    }


}

    .icon-wrapper.active {
        color: $contact-swatch;

        &:hover,
        &:focus {
            color: darken($contact-swatch, 15%);
        }
    }

.radio {
    position: absolute;
    top: -1000px;
    visibility: hidden;


}

.link {
    color: $dark;

    transition: all $link-animation-time ease;


    &:hover,
    &:focus {
        font-size: 1.25em;
    }

    &:visited {
        color: $light;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all $highlight-animation-time ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
