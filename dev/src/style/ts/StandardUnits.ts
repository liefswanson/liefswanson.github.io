const rem = 'rem';
const em  = 'em';
const px  = 'px';
const fr  = 'fr'

const std = rem;
function pxInStd():number {
    let body = document.querySelector('body') as HTMLElement;
    let style = getComputedStyle(body);
    //@ts-ignore
    let fontSize = style['font-size'];
    return parseFloat(fontSize);
}

export {
    rem,
    em,
    px,
    fr,

    std,
    pxInStd
};