declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module "vue-touch" {
    import { PluginObject } from 'vue';

    let VueTouch: PluginObject<any>;
    export default VueTouch;
}

declare module "vue-images-loaded" {
    import { DirectiveFunction } from 'vue';

    let ImagesLoaded: DirectiveFunction;
    export default ImagesLoaded;
}

declare module "vue-pdf" {
    import Vue from 'vue';
    export default Vue;
}