<template>
    <article class='p-article-grid'>
        <h1 class='p-wide p-title'>
            Teaching Like a Pro
        </h1>

        <p class='p-text p-wide'>
            I was an undergrad teaching assistant at Simon Fraser University.
            I worked with 90 students, helping them learn Object Oriented Programming in Java.
            As I was the only TA marking became a herculean task.
            It was even harder to do promptly, thoroughly, and fairly.
            To achieve this, I automated a huge portion of my job, so I could spend time on the good parts, such as giving feedback on code style and thoroughly responding to students’ questions.
            Without automation, even just downloading, unzipping, compiling, and running every student’s code would have taken more than 3 hours total per assignment.
        </p>

        <p class='p-thin-grow p-note'>
            Being an undergrad teaching assistant at Simon Fraser University is not very common.
            The teaching assistants' union created a rule that <strong>every</strong> graduate student be considered for a position before an undergrad is allowed to apply.
        </p>

        <h2 id='what' class='p-wide p-sub-title'>
            What my role was
        </h2>

        <p class='p-text p-wide'>
            <strong>Marking student's projects</strong>
            <ul class='p-list'>
                <li>Commenting on code style</li>
                <li>Providing refactoring suggestions &amp; examples</li>
                <li>Giving detailed marking feedback</li>
                <li>Building my own test suite &amp; harness to mark with</li>
                <li>Implementing the inverse of project specifications as part of verifying outputs</li>
                <li>Debugging broken code submissions <span class='p-note'>so part marks could be given where appropriate</span></li>
                <li>Catching cheaters</li>
            </ul>
            <br>
            <strong>Helping Students online and in person</strong>
            <ul class='p-list'>
                <li>Teaching students how to verify the correctness of their own code</li>
                <li>Thoroughly explaining software design patterns</li>
                <li>Pulling overtime office hours <span class='p-note'>otherwise most students wouldn't receive help</span></li>
                <li>Manning an online help forum <span class='p-note'>email buckled under the volume of student inquiries</span></li>
                <li>Giving advice I wish I had gotten early in my degrees</li>
                <li>Helping students understand why and where they made mistakes</li>
            </ul>
            <br>
            <strong>Helping transition the course toward modern paradigms</strong>
            <ul class='p-list'>
                <li>Moved away from Java Swing applications</li>
                <li>Moved toward Java Spring REST APIs</li>
            </ul>
        </p>

        <p class='p-wide p-text'>
            I think by the end I did a pretty great job.
            I even received thank you cards and emails from many students saying they think I was the best TA they had ever met, not even just the best they had... the best they ever met.
        </p>

        <h2 id='why' class='p-wide p-sub-title'>
            Why this project is important to me
        </h2>

        <p class='p-text p-wide'>
            This was a very demanding job, because I chose to make it so; teaching is something I get great joy out of.
            It would have been entirely possible for me to do the bare minimum, and still get paid the same.
            However, I saw this as a learning opportunity; it is amazing seeing 90 different people try and implement the same application.
            It taught me a lot about my own idiosyncrasies in my own work process, seeing such a range of idiosyncrasies in others.
        </p>
        <h2 id='how' class='p-wide p-sub-title'>
            How I tackled it
        </h2>

    </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TeachersAssistant',
    components : {
    }
});
</script>
