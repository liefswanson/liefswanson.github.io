import Tag                from "@/scripts/main/Tag";
import { VueConstructor } from 'vue';
import Vue                from 'vue';

export default interface Project {
    path: string,
    name: string,
    component: VueConstructor<Vue>,

    title: string,
    thumb: string,
    blurb: string,
    tags: Tag[]
}