enum Events {
    changeColor = "accent-color-change",

    closeNav    = "nav-bar-close",
    openNav     = "nav-bar-open",
    toggleNav   = "nav-bar-toggle",
    navAnimDone = 'nav-done-animating',

    openHeader  = 'header-open',
    closeHeader = 'header-close',
    lockHeader = 'header-lock',
    unlockHeader = 'header-unlock',

    scroll = "scroll",
    resize = "resize",
}

export default Events;