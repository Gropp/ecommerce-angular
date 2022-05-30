import { person } from "./person";
import { format } from "./format";

export interface gutendex {
    id:number,
    title:string,
    subjects:string[],
    authors:person[],
    translators:person[],
    bookshelves:string[],
    languages:string[],
    copyright:boolean|null,
    media_type:string,
    formats:format,
    downloads_count:number,
}