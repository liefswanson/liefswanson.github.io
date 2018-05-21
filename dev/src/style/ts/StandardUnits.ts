const rem = 'rem';
const em  = 'em';

const std = rem;
function pxInStd():number {
    let body = document.querySelector('body') as HTMLElement;
    let style = getComputedStyle(body);
    let fontSize = style.fontSize as string;
    return parseFloat(fontSize);
}

export {
    std,
    pxInStd
};