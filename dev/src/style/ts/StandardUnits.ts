const rem = 'rem';
const em  = 'em';

const std = rem;
function pxInStd(): number {
    const body = document.querySelector('body') as HTMLElement;
    const style = getComputedStyle(body);
    const fontSize = style.fontSize as string;
    return parseFloat(fontSize);
}

export {
    std,
    pxInStd
};