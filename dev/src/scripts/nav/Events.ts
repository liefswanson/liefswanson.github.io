enum Events {
    changeColor = "accent-color-change",
    transitionEnd = 'transitionend',

    closeNav    = "nav-bar-close",
    openNav     = "nav-bar-open",
    toggleNav   = "nav-bar-toggle",
    navAnimDone = 'nav-done-animating',

    openHeader   = 'header-open',
    closeHeader  = 'header-close',
    lockHeader   = 'header-lock',
    unlockHeader = 'header-unlock',

    scroll = "scroll",
    resize = "resize",

    collapseAll = 'collapse-all',
    expandAll   = 'expand-all',
}

export default Events;