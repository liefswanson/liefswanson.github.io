<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            1 TA / 90 Students
        </h1>
        <p class='p-text p-wide'>
            I was the TA for a second year class in Object Oriented Programming at SFU.
            Actually, I was the only TA, and there was 90 students.
        </p>

        <p class='p-text p-wide'>
            This presented an uncommon challenge.
            It is pretty difficult to engage with 90 students and mark them effictively, thoroughly, and consistently.
            To mark them effictively, you need to be fast.
            To mark them thoroughly, will obviously slow you down.
            To mark them consistently, you must maintain the same standard and enthusiasm with every student.
        </p>

        <p class='p-text p-wide'>
            I came about solving this problem, by automating everything I could.
            For instance, there was a battleship style game where students would randomize the positions of ships.
            To mark this consistently, I requested an addition to the assignment the option of cheating at the game.
            I had the enemy positions displayed, read into a python script.
            Then I used a reverse implementation of the assignment I wrote to play the exact same game for every student.
            In other words, I undid the randomization of enemy positions, to play the same game for each student.
            I even played the game automatically by having xdotool do the input for me, to avoid making mistakes.
        </p>

        <p class='p-text p-wide'>
            to automate marking effectively for each assignment, there was a lot of work involved.
            I used quite a few tools to my advantage:
        </p>

        <ul class='p-list p-wide'>
            <li>
                <v-link to='https://fishshell.com/'>Fish</v-link>
                & Bash
            </li>
            <li>Python <span class='p-note'>especially the core I/O, regex, and json libraries</span></li>
            <li>GNU coreutils</li>
            <li>grep</li>
            <li><v-link to='https://github.com/jordansissel/xdotool'>xdotool</v-link></li>
            <li><v-link to='https://github.com/yahoo/blink-diff'>Yahoo's blink-diff</v-link></li>
            <li>git diff</li>
            <li><v-link to='https://www.kde.org/applications/graphics/spectacle/'>KDE spectacle</v-link></li>
            <li>and more!</li>
        </ul>

        <p class='p-note p-thin'>
            That might seem like a pretty complicated mess, but I assure you, it made for a pretty reasonable testing harness and marking tool.
        </p>

        <p class='p-text p-wide'>
            I also learned a whole lot from reading student's code.
            It is a really unusual experience to really read and understand the code of 90 people who were all trying to do the exact same thing.
        </p>

        <p class='p-text p-wide'>
            Reading student code created a good opportunity teach students.
            From what students told me, I think they appreciated the feedback.
            I found also that to be an enriching experience, especially when students told me they found it helpful to have someone earnestly read and comment on their work.
            I have taken classes during my
            <v-link local to='/projects/sosy'>Software Systems degree</v-link>
            at SFU where I have written absolutely terrible code, and the TA marking my work never even commented on it... probably because they never read it.
            The worst part about it was I didn't know how bad it was until looking back on it years later.
        </p>

        <p class='p-note p-thin'>
            All that time I saved on marking, allowed me to spend extra time reading students' code; giving feedback on code style and design choices.
        </p>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/components/util/Link.vue';

export default Vue.extend({
    name: 'TeachersAssistant',
    components : {
        'v-link': Link,
    }
});
</script>