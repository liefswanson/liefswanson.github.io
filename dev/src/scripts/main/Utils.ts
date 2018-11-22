function positiveMod(n: number, m: number) {
    return (n%m + m) % m;
}

function userIsBot():boolean {
    var re = /bot|google|baidu|bing|msn|teoma|slurp|yandex|crawler|spider|crawling/;
    var userAgent = navigator.userAgent;

    return re.test(userAgent)
}

export {
    positiveMod,
    userIsBot
}