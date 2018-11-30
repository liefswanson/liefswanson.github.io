<template>
<article class='main-content'>
    <h1 class='p-title intro'>
        How to get in contact with me
    </h1>
    <ul class='icon-list'>
        <li v-for='contact in contacts'
            :key='contact.name'
            class='icon'
            @mouseenter='mouseEnter(contact)'
            @mouseleave='mouseLeave(contact)'>
            <button :title='contactMessage(contact)'
                    :aria-label='contactMessage(contact)'
                    @click='click(contact)'
                    @focus="mouseEnter(contact)"
                    @blur="mouseLeave(contact)"
                    :class='[contact.fa,
                                contact.icon,
                                active == contact ? "active": ""]'
                    class='icon-wrapper'/>
            <transition name='fade'>
                <strong class='details'
                        v-if='active == contact'>
                        {{contact.msg}}
                    <a target='_blank'
                        :href='contact.link'
                        class='link'>
                        {{contact.name}}
                    </a>
                </strong>
            </transition>
        </li>
    </ul>
</article>
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
        contactMessage(contact: Contact) {
            return !this.paused ? "pause carousel on " + contact.name : "restart carousel";
        },
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
            this.mouseEnter(clicked);
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

.intro {
    font-size: 1.75rem;
    margin-bottom: 2rem;
}

$contact-size: 2.75rem;
.details {
    $detail-size: 1.5rem;
    font-size: $detail-size;
    vertical-align: ($contact-size - $detail-size)/2;
    transition: opacity $highlight-animation-time ease;
}

.icon-list {
    font-size: $contact-size;
    list-style-type: none;
}

.icon-wrapper {
    background: none;
    border: none;
    padding: 1rem;
    padding-left: 0;
    @include not-selectable;

    transition: all $highlight-animation-time ease !important;
    color: $light;
    cursor: pointer;

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
