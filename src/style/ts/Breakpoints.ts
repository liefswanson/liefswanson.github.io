const small  = '48em';
const medium = '62em';
const large  = '75em';

const onPhone   = window.matchMedia('(max-width: ' + small  + ')');
const onTablet  = window.matchMedia('(min-width: ' + small  + ') and (max-width: ' + medium + ')');
const onLaptop  = window.matchMedia('(min-width: ' + medium + ') and (max-width: ' + large  + ')');
const onDesktop = window.matchMedia('(min-width: ' + large  + ')');

export default {
    onPhone,
    onTablet,
    onLaptop,
    onDesktop
}