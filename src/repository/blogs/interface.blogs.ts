export enum status {
    published = "PUBLISHED",
    notpublished = "NOTPUBLISHED"
}

export interface IBlog {
    id: number;
    title: string;
    status: status
    thumbnail: string;
    upvote: number;
    views: number;
    category: string;
    readtime: number;
    author_summary: string;
    content: object[];
    language: string;
    shortDescription: string
}

export class BlogInstance implements IBlog {
    id: number;
    title: string;
    status: status;
    thumbnail: string;
    upvote: number;
    views: number;
    category: string;
    readtime: number;
    author_summary: string;
    content: object[];
    language: string;
    shortDescription: string
   


    public constructor(
        title: string,
        status: status,
        thumbnail: string,
        upvote: number,
        views: number,
        category: string,
        readtime: number,
        author_summary: string,
        content: object[],
        language: string,
        

    ) {
        this.title = title;
        this.status = status;
        this.thumbnail = thumbnail;
        this.upvote = upvote;
        this.views = views;
        this.category = category;
        this.readtime = readtime;
        this.author_summary = author_summary;
        this.content = content;
        this.language = language;
    }
    public createAnInstance( title: string,status: status,thumbnail: string,upvote: number,views: number,category: string,readtime: number,author_summary: string,content: object[],language: string) {
        return {
            title: this.title,
            status: this.status,
            thumbnail: this.thumbnail,
            upvote: 0,
            views: 0,
            category: this.category,
            readtime: this.readtime,
            author_summary: this.author_summary,
            content: this.content,
            language: this.language
        }
    }
}
