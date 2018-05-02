import Tag from "@/scripts/main/Tag";

export default interface Project {
    path: string,
    name: string,

    title: string,
    thumb: string,
    blurb: string,
    tags: Tag[]
}