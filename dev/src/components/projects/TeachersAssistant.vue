<template>
<project-template name='TeachersAssistant'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            I was an undergrad teaching assistant at
            <a class='p-link' title='Simon Fraser University' href='https://www.sfu.ca/'>SFU</a>.
            I worked with 90 students, helping them learn Object Oriented Programming in Java.
            As I was the only TA, marking became a herculean task.
            It was even harder to do promptly, thoroughly, and fairly.
            To achieve this, I automated a huge portion of my job, so I could spend time on the good parts, such as giving feedback on code style and thoroughly responding to students’ questions.
            Without automation, even just downloading, unzipping, configuring, compiling, and running every student’s code would have taken more than 3 hours total per assignment.
        </p>

        <p class='p-thin p-note'>
            Being an undergrad teaching assistant at Simon Fraser University is not very common.
            The teaching assistants' union created a rule that <strong>every</strong> graduate student be considered for a position before an undergrad is allowed to apply.
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            <strong>Marking students' projects</strong>
            <ul class='p-list'>
                <li>Commenting on code style</li>
                <li>Providing refactoring suggestions &amp; examples</li>
                <li>Giving detailed marking feedback</li>
                <li>Building my own test suite &amp; harness to mark with</li>
                <li>Implementing the inverse of project specifications as part of verifying outputs</li>
                <li>Debugging broken code submissions <span class='p-note'>so partial marks could be given where appropriate</span></li>
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
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            This was a very demanding job, because I chose to make it so; teaching is something I get great joy out of.
            It would have been entirely possible for me to do the bare minimum and still get paid the same.
            However, I saw this as a learning opportunity; it is amazing seeing 90 different people try and implement the same application.
            It taught me a lot about my own idiosyncrasies in my own work process, seeing such a range of idiosyncrasies in others.
        </p>

        <p class='p-text p-wide'>
            I am also very very proud of the work I did for this job.
            Students still tell me to this day they really appreciated the time and effort I put into making sure they learn.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            As I already stated, probably the most important aspect of being able to handle this workload was creating as much automation as possible.
            Just trying to download, unzip, configure, compile, and execute every indidivual's code took about 2 minutes.
            There were 90 students, 90 students &times; 2 minutes/student = 180 minutes = 3 hours...
            At that point, I wouldn't have even observed the output of their program yet, meaning I wouldn't even be marking it yet.
            So, I automated not only standard tests to run against student's assignments, but also the 2 minutes of work to get a project running.
        </p>
        <p class='p-thin p-note'>
            After automation, I managed to get the time I spent running a student's project down to a minute average. That included everything except choosing which project to mark and reading the output of the tests.
        </p>
        <p class='p-wide p-text'>
            My pursuit of automation was so zealous I even automated testing of one particular assignment where the student's program was supposed to paint specific geometry into a window.
            Students were expected do simple monospaced
            <a class='p-link' href="https://www.techwalla.com/articles/what-is-text-reflow">text reflow</a>
            inside of the shapes they rendered, and the shapes they were supposed to render were static.
            This meant every student should have a window that renders identically. I took advantage of this, automatically took a screenshot of the window they rendered and ran it through
            <a class='p-link' href="https://github.com/yahoo/blink-diff">Yahoo's blink-diff</a>.
        </p>
        <p class='p-wide p-text'>
            In another class, I had the professor add a feature to one assignment where students were supposed to make a game similar to
            <a class='p-link' href="https://en.wikipedia.org/wiki/Battleship_(game)">battleship</a>.
            I had them add a debug output, showing the locations of all their ships.
            I then took that debug output, and used it as input for my own program that would play the game identically for every student, despite the fact they had randomized their ships.
            So, I would always hit a a specific ship, miss, hit the same spot etc etc in the same order.
            This allowed me to standardize testing of a game where one of the criteria being marked was their ability to randomize the game!
        </p>

        <p class='p-wide p-text'>
            In the end, all of this automation had a point.
            It made me a more fair, consistent, and prompt marker.
            It also gave me more time to do something I have never had anyone do for me during the entirety of my degree... review my code style.
            Every second I gained from automation, I spent analyzing the coding style of each student, and offering them suggestions on how they could make their code easier to read... and thus debug.
        </p>
        <p class='p-thin p-note'>
            I got so good at it, I kid you not, I could tell if code was buggy before I ran it by the shape of the
            <a class='p-link' href="https://en.wikipedia.org/wiki/Negative_space">negative space</a>
            created by their style of
            <a class='p-link' href="https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style/Minimize_nesting">code nesting</a>.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";

export default Vue.extend({
  name: "TeachersAssistant",
  components: {
      'project-template': ProjectTemplate
  }
});
</script>