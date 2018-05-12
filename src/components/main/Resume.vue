<template>
<div class='resume-container'>
    <sticky-bar>
        <div class='action-bar'>
            <div class='spacer'></div>
            <button title='View with built-in PDF viewer'
                    class='btn'>
                <a class='override-color'
                   href='static/resume.pdf'
                   target='_blank'>
                   <i class='fa fa-external-link-alt'/>
                </a>
            </button>
            <button title='Download'
                    class='btn'>
                <a class='override-color'
                   href="static/resume.pdf"
                   download>
                    <i class='fa fa-download'/>
                </a>
            </button>
            <button title='Print'
                    class='btn'
                    @click='$refs.pdf.print()'>
                <i class='fa fa-print'/>
            </button>
        </div>
    </sticky-bar>
    <pdf class='pdf'
         ref='pdf'
         src='static/resume.pdf'/>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
//@ts-ignore
import pdf from 'vue-pdf';

import StickyBar from '@/components/nav/StickyBar.vue';

export default Vue.extend({
    name: "Resume",
    components: {
        pdf,
        'sticky-bar': StickyBar
    },
});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.pdf {
    z-index: $pdf-z;
    max-width: $large-size;
    margin: auto;
}

.action-bar {
    font-size: $icon-size;
    display: flex;
    background: transparentize($medium, 1);

    transition: background $action-bar-animation-time ease;

    &:hover {
        background: transparentize($medium, 0.5);

        .btn {
            color: $dark;
        }
    }
}


.override-color {
    color: inherit;
}

.btn {
    transition: color $action-bar-animation-time ease;
    color: transparentize($dark, 0.5);
    @include on-phone {
        color: $dark;
    }
    background: none;
    border-style: none;
    padding: 0.5rem;
    padding-right: 1rem;

    &:hover {
        color: $resume-swatch !important;
        border-style: none;
        cursor: pointer;
    }

}

</style>

<style lang="scss">
//override annotationLayer in pdf.js to keep it from extending page past the end of pdf
.annotationLayer {
    display: none;
}
</style>

