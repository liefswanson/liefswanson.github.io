<template>
<li>
    <cite>
        <strong>
            <a class='c-link name p-title' :href="link">{{title}}</a>
        </strong>
    </cite>
    <p class='u-para who'>by: <slot/></p>
    <p class='u-para why'>{{description}}</p>
</li>
</template>

<style lang="scss" scoped>
.name {
    font-size: 1.3rem;
}

.who {
    margin-left: 1rem;
    display: inline;
}

.why {
    margin-left: 2rem;
    margin-bottom: 2rem;
}
</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Citation',
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
})
</script>
