<template>
<article class='p-root'>
    <project-title :name='name'/>

    <project-controls :current='name'/>

    <collapse title='Introduction'
              initShow>
        <div class='p-article-grid'>
            <slot name='intro'/>
        </div>
    </collapse>

    <collapse title='What my role was'>
        <div class='p-article-grid'>
            <slot name='what'/>
        </div>
    </collapse>

    <collapse :title='"Why it matters to\xa0me"'>
        <div class='p-article-grid'>
            <slot name='why'/>
        </div>
    </collapse>

    <collapse title='How I tackled it'
              overscroll>
        <div class='p-article-grid'>
            <slot name='how'/>
        </div>
    </collapse>
</article>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/util/Carousel.vue';
import Collapsible from '@/components/util/Collapsible.vue';
import ProjectTitle from '@/components/util/ProjectTitle.vue';
import ProjectControls from '@/components/util/ProjectControls.vue';

export default Vue.extend({
    name: 'ProjectTemplate',
    components: {
        'collapse': Collapsible,
        'project-title': ProjectTitle,
        'project-controls': ProjectControls
    },
    props: {
        name: {
            type: String,
            required: true
        }
    }
});
</script>
