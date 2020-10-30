import Swatch from '@/style/ts/Swatch';

function swapHeadElementById(id: string, elem: HTMLElement) {
    const oldElem = document.getElementById(id) as HTMLElement;
    const head = document.head as HTMLElement;

    if (oldElem) {
        head.removeChild(oldElem);
    }

    elem.id = id;
    head.appendChild(elem);
}

function makeNewFavicon(color: Swatch) {
    const id  = 'dynamic-favicon';
    const tag = 'link';
    const rel = 'icon';

    const pathId = color.slice(1); // remove the # infront of the color
    const path   = 'static/logo-' + pathId + '.png?v=2';

    const link  = document.createElement(tag);
    link.rel  = rel;
    link.href = path;

    swapHeadElementById(id, link);
}

function makeNewSelectionColor(color: Swatch) {
    const id   = 'dynamic-selection';
    const tag  = 'style';
    const type = 'text/css';

    const style  = document.createElement(tag);
    style.type = type;
    style.innerHTML =
    '::selection {' +
        'background:' + color + ';' +
        'color:' + Swatch.bright + ';' +
    '}' +

    '::-moz-selection {' +
        'background:' + color + ';' +
        'color:' + Swatch.bright + ';' +
    '}';

    swapHeadElementById(id, style);
}

export {
    makeNewFavicon,
    makeNewSelectionColor
}