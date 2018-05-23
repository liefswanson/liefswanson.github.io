import Swatch from '@/style/ts/Swatch';


function makeNewFavicon(color: Swatch) {
    const id  = 'dynamic-favicon';
    const tag = 'link';
    const rel = 'icon';

    let pathId = color.slice(1); // remove the # infront of the color
    let path   = 'static/logo-' + pathId + '.png?v=2';

    let link  = document.createElement(tag);
    link.rel  = rel;
    link.href = path;

    swapHeadElementById(id, link);
}

function makeNewSelectionColor(color: Swatch) {
    const id   = 'dynamic-selection';
    const tag  = 'style';
    const type = 'text/css';

    let style  = document.createElement(tag);
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

function swapHeadElementById(id: string, elem: HTMLElement) {
    let oldElem = document.getElementById(id) as HTMLElement;

    if (oldElem) {
        document.head.removeChild(oldElem);
    }

    elem.id = id;
    document.head.appendChild(elem);
}

export {
    makeNewFavicon,
    makeNewSelectionColor
}