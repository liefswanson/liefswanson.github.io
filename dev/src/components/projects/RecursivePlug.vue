<template>
<project-template name='RecursivePlug'>
    <template slot='intro'>
        <p class='p-text p-wide'>
            By this point, you are probably reasonably acquainted with me and my portfolio!
            If not, I recommend exploring some more after perusing my recursive self-advertising.
            I am at least mildly interesting, I swear.
        </p>
    </template>

    <template slot='what'>
        <p class='p-text p-wide'>
            Everything.
            My goal was to create a portfolio that speaks to my wide range of interests and abilities, without making me look full of myself... like I literally just did.
            The best way I could see to do that was to display my skills, instead of talk about them.
        </p>
    </template>

    <template slot='why'>
        <p class='p-text p-wide'>
            I don’t like to talk about myself that much.
            I prefer to talk about the things I am interested in.
            However, a portfolio is like a product page… my time, perspective, and knowledge are the products being sold, and as such those are what I need to talk about.
            It was a fulfilling challenge to express who I am through the interactions, functionality, visuals, and content of this portfolio.
        </p>
    </template>

    <template slot='how'>
        <p class='p-text p-wide'>
            I don’t like to talk about myself that much.
            I prefer to talk about the things I am interested in.
            However, a portfolio is like a product page… my time, perspective, and knowledge are the products being sold, and as such those are what I need to talk about.
            It was a fulfilling challenge to express who I am through the interactions, functionality, visuals, and content of this portfolio.
        </p>
    </template>
</project-template>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectTemplate from "@/components/util/ProjectTemplate.vue";

export default Vue.extend({
  name: "RecursivePlug",
  components: {
      'project-template': ProjectTemplate,
  }
});
</script>