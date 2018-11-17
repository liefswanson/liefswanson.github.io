<template>
<div class='resume-container'>
    <sticky-bar :overlay="false">
        <div class='action-bar'>
            <div class='spacer'></div>
            <a class='btn'
                title='View with built-in PDF viewer'
                href='static/resume-text.pdf'
                target='_blank'>
                <i class='fa fa-external-link-alt'/>
            </a>
            <a class='btn'
                title='Download'
                href="static/resume-text.pdf"
                download>
                <i class='fa fa-download'/>
            </a>
            <button title='Print'
                    class='btn'
                    @click='$refs.pdf.print()'>
                <i class='fa fa-print'/>
            </button>
        </div>
    </sticky-bar>
    <!-- The in page render uses a different pdf,
         to avoid font render errors in pdfjs -->
    <pdf class='pdf'
         ref='pdf'
         src='static/resume.pdf'/>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
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
    display: flex;
    padding: $bar-spacing;
}


.btn {
    color: $medium;
    display: block;

    $btn-back: darken($bright, 7%);
    background: $btn-back;
    margin-left: $bar-spacing;
    padding: $bar-pad;
    line-height: 0;
    border-radius: $icon-size;
    border: 0.125rem solid $btn-back;
    font-size: $icon-size;

    transition: all $action-bar-animation-time ease;

    cursor: pointer;
    box-sizing: border-box;
}

.btn:hover,
.btn:focus {
    color: $resume-swatch;
    border-color: $resume-swatch;
}

</style>

<style lang="scss">
//override annotationLayer in pdf.js to keep it from extending page past the end of pdf
.annotationLayer {
    display: none;
}
</style>

