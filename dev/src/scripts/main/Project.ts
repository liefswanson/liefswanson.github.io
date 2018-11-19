import Tag                from "@/scripts/main/Tag";
import { VueConstructor } from 'vue';
import Vue                from 'vue';
import PreallocatedImage from '@/scripts/main/PreallocatedImage';

export default interface Project {
    path: string,
    name: string,
    component: VueConstructor<Vue>,

    title: string,
    img: PreallocatedImage,

    blurb: string,
    tags: Tag[]
}