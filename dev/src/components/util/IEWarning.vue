<template>
<transition name='fade'>
    <div v-if='show'
        class='ie-warning'>
        <div class='ie-warning-outer'>
            <div class='ie-warning-inner'>
                <h1>
                    This site doesn't support Internet Explorer.
                </h1>

                <p>
                    If you want to continue you can, but I gurantee certain parts of the site won't work as intended.
                    This site uses tools that Internet Explorer doesn't support... but every other major browser does.
                    Most notably:
                    <ul class='raw-list'>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout'>CSS flexbox</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout'>CSS grid</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/position'>CSS sticky position</a></li>
                    </ul>
                    I use these, and more things Internet Explorer doesn't support, nearly everywhere on my site.
                    It would take a very long time to implement support for Internet Explorer... and frankly, I don't think it is worth the investment.
                </p>
                <h2>
                    Sorry for the inconvenience, but consider this a wake up call
                </h2>
                <p>
                    Internet Explorer doesn't implement many of the features used in modern web development.
                    Additionally, Internet Explorer is known for having a host of <a href='https://www.cvedetails.com/vulnerability-list/vendor_id-26/product_id-9900/Microsoft-Internet-Explorer.html'>security vulnerabilities</a>.
                    As such, it is becoming increasingly difficult to develop for within the quickly changing web.
                    You are one of approximately 7% of people, <a href='https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables'>as of June 2018</a>, who are using Internet Explorer,
                    and that mere fact is the sole cause of lots of arduous and painful work that doesn't need to exist.
                </p>

                <h2>
                    Do the internet, and yourself, a favour and drop Internet Explorer.
                </h2>

                <p>
                    If your IT department isn't forcing you to use Internet Explorer, try one of these!
                    <ul class='raw-list'>
                        <li><a href='https://www.microsoft.com/en-ca/windows/microsoft-edge'>Microsoft Edge</a>, which you should already have installed if you are on windows 10!</li>
                        <li><a href='https://www.google.com/chrome/'>Google Chrome</a></li>
                        <li><a href='https://www.mozilla.org/en-US/firefox/'>Mozilla Firefox</a></li>
                        <li><a href='https://www.opera.com/'>Opera</a></li>
                        <li><a href='https://support.apple.com/downloads/safari'>Apple Safari</a>... but I don't recommend it... Safari's security is <a href='https://wccftech.com/safari-worse-security-than-internet-explorer/'>just as bad if not worse</a></li>
                    </ul>
                    If your IT department is forcing you to use Internet Explorer, try asking them <b>nicely</b> if they plan to support Microsoft Edge or one of the other browsers listed here.
                </p>

                <h2>
                    Alternatively, you can try my website on your phone or tablet.
                </h2>

                <button class='ie-warning-button'
                        @click='show = false'>
                    Continue Anyway
                </button>
            </div>
        </div>
    </div>
</transition>
</template>

<script lang="ts">
import isIE from '@/scripts/main/IE';

import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            show: isIE()
        }
    }
})
</script>

<style lang='scss' scoped>
@import '@/style/master.scss';

.ie-warning {
    position: fixed;
    z-index: $IE-warning-z;
    width: 100vw;
    height: 100vh;
    background: $dark;
}

.ie-warning-outer {
    $top: 20%;
    $left: 20%;

    position: absolute;
    overflow-y: auto;
    top: $top;
    left: $left;

    width: 100% - 2*$left;
    max-height: 100% - 2*$top;

}

.ie-warning-inner {
    position: relative;
    background: $bright;

    h1 {
        color: $dark;
    }
    h2 {
        color: $dark;
        padding-bottom: 1.5rem;
    }
    p {
        padding-bottom: 1rem;
    }

    padding: 3rem;
    padding-bottom: 10rem;
}

.ie-warning-button {
    bottom: 3rem;
    right: 3rem;
    position: absolute;
    background: $about-swatch;
    border-style: none;
    padding: 0.75rem;
    font-size: 1.25rem;
    color: $bright;
    transition: background 0.35s ease;

    &:hover {
        background: darken($about-swatch, 10%);
    }
}

</style>
