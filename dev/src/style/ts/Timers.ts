enum AnimationTimers {
    header      = 250,
    nav         = 300,
    project     = 500,
    carousel    = 500,
    collapsible = 500,
}

enum DelayTimers {
    carousel = 5000,
    contact  = 5000,
}

const toSeconds = 1/1000;

export {
    AnimationTimers,
    DelayTimers,
    toSeconds,
};