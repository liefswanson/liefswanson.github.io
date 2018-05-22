import Swatch from '@/style/ts/Swatch';


function makeNewFavicon(color: Swatch) {
    const faviconId = 'dynamic-favicon';
    const tag = 'link';
    const rel = 'icon';

    let pathId = color.slice(1);
    let path   = 'static/logo-' + pathId + '.png?v=2';

    let link  = document.createElement(tag);
    link.rel  = rel;
    link.href = path;

    swapHeadElementById(faviconId, link);
}

function makeNewSelectionColor(color: Swatch) {
    const selectionId = 'dynamic-selection';
    const tag  = 'style';
    const type = 'text/css';

    let style = document.createElement(tag);
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

    swapHeadElementById(selectionId, style);
}

function swapHeadElementById(id: string, elem: HTMLElement) {
    let old = document.getElementById(id) as HTMLElement;

    if (old) {
        document.head.removeChild(old);
    }

    elem.id = id;
    document.head.appendChild(elem);
}

export {
    makeNewFavicon,
    makeNewSelectionColor
}