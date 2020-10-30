// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// left: 37, up: 38, right: 39, down: 40,
function keys (keyCode: number): boolean {
    const space = 32;
    const down = 40;
    return space <= keyCode && keyCode <= down;
}


function preventDefault(e: Event) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e: KeyboardEvent) {
    if (keys(e.keyCode)) {
        preventDefault(e);
        return false;
    }
}

let enabled = true;
const restore = {
    onwheel: window.onwheel,
    onkeydown: document.onkeydown
}
function disableScroll() {
    window.onwheel = preventDefault; // modern standard
    document.onkeydown  = preventDefaultForScrollKeys;
    enabled = false;
}

function enableScroll() {
    window.onwheel = restore.onwheel;
    document.onkeydown = restore.onkeydown;
    enabled = true;
}

function scrollEnabled(): boolean {
    return enabled;
}

function scrollProgress(elem: HTMLElement): number {
    const top = elem.scrollTop;
    const bottom = elem.scrollHeight -
                 elem.getBoundingClientRect().height;

    return top / bottom;
}

function scrollable(elem: HTMLElement): boolean {
    return elem.scrollHeight !==
           elem.getBoundingClientRect().height;
}

export {
    enableScroll,
    disableScroll,
    scrollEnabled,
    scrollProgress,
    scrollable
}