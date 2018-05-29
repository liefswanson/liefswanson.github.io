<template>
<article class='p-article-grid'>
    <h1 class='p-wide p-title'>
        Arch Linux : My Primary Operating System (OS)
    </h1>

    <p class='p-wide p-text'>
        Unlike most people, I don't use Windows 10 or OSX day to day on my computer.
        I use
        <v-link to='https://www.archlinux.org/'>Arch Linux</v-link>
        almost exclusively.
        There are a couple of reasons for this, primary among them is the extra flexibility it affords me in day to day tasks.
        That might sound crazy to people that have heard of Arch Linux before, but I think there is a lot Windows and OSX could learn from any major Linux distribution.
    </p>

    <p class='p-wide p-text'>
        One of the biggest things missing from both Windows and OSX is a good package manager with unified repositories and dedicated maintainers.
        The fact these things don't exist beyond the AppStore and Windows Store is nearly unbelievable to me.
    </p>

    <p class='p-wide p-text'>
        I also use the commandline regularly, which isn't really a thing that is all that effortless in Windows or even Mac.
        On an average day I use the commandline no less than 3 or 4 times, and average much, much more than that.
    </p>

    <p class='p-thin p-note'>
        Even as a student of design, I can assure you there are some things GUIs just haven't figured out yet.
    </p>

    <p class='p-wide p-text'>
        Another thing I quite like about Linux is the desktop environments have features that put OSX and Windows to shame.
        Take a look at
        <v-link to='https://www.kde.org/plasma-desktop'>KDE Plasma</v-link>;
        some of the things it can do are amazing.
        KDE is incredibly extensible, and plays well with a host of other applications.
        It is frankly amazing the things you can get to work in KDE.
        KDE even has a Quake-style drop-down terminal called
        <v-link to='https://www.kde.org/applications/system/yakuake/'>Yakuake</v-link>...
        and it feels like cheating in a game every time I use it.
    </p>

    <p class='p-thin p-note'>
        It is hard to find anything on the original terminal from the game Quake anywhere on the internet.
        However, lots of games have a drop down terminal these days.
        Skyrim is pretty famous for having one, but many other games have them as well; they are just disabled as they are intended for developer use.
    </p>

    <p class='p-wide p-text'>
        Lastly, and this might seem incredible, but Linux is so customizable it gives me the opportunity to flex my UI design skills.
        For instance on my Laptop I set up an array of touch gestures to make navigation between windows and desktops easier.
        Over a year later, Windows introduced many of the exact same gestures, doing the exact same things as the ones I chose myself in Linux.
    </p>
</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';
import Carousel from '@/components/util/Carousel.vue';

export default Vue.extend({
    name: 'ProjectEuler',
    components: {
        'v-link': Link,
        'v-carousel': Carousel
    }
});
</script>
