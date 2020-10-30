enum ScreenSize{
    small  = '48rem',
    medium = '62rem',
    large  = '75rem',
}

function queryUp(min: ScreenSize): boolean {
    return window.matchMedia('(min-width: ' + min  + ')').matches;
}

function queryDown(max: ScreenSize): boolean {
    return window.matchMedia('(max-width: ' + max + ')').matches;
}

function queryExact(min: ScreenSize, max: ScreenSize): boolean {
    return window.matchMedia('(min-width: ' + min + ') and (max-width: ' + max + ')').matches;
}

function onPhone():  boolean { return queryDown(ScreenSize.small); }

function onTablet(): boolean {
    return queryExact(ScreenSize.small,
                      ScreenSize.medium);
}

function onLaptop(): boolean {
    return queryExact(ScreenSize.medium,
                      ScreenSize.large);
}

function onDesktop(): boolean { return queryUp(ScreenSize.large); }

function onTabletOrUp(): boolean { return queryUp(ScreenSize.small); }
function onLaptopOrUp(): boolean { return queryUp(ScreenSize.medium); }

function onTabletOrDown(): boolean { return queryDown(ScreenSize.medium); }
function onLaptopOrDown(): boolean { return queryDown(ScreenSize.large); }

export default {
    onPhone,
    onTablet,
    onLaptop,
    onDesktop,

    onTabletOrUp,
    onLaptopOrUp,

    onTabletOrDown,
    onLaptopOrDown,
}