
export default function isIE() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ");
    const trident = ua.indexOf('Trident/');

    return msie > 0 || trident > 0;
}