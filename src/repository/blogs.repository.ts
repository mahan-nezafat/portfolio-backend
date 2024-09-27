import { Blog, IBlog } from "../entities/Blog";



export class BlogInstance implements IBlog {
    id: number;
    title: string;
    status: string;
    thumbnail: string;
    upvote: number;
    views: number;
    category: string;
    readtime: number;
    author_summary: string;
    content: object[];
    language: string;
   

    constructor( id: number, title: string, status: string, thumbnail: string, upvote: number, views: number,  category: string, readtime: number, author_summary: string, content: object[], language: string ) {
        this.id = id;
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
    
}

export const getAll = async () : Promise<Array<object>> =>  {
    const blogs = await Blog.find({ })
    console.log(blogs, typeof blogs)
    return blogs
}

export const getOne = async (id: number) : Promise<object> =>  {
    const blog = await Blog.findOne({ 
        where: {
            id:id
        }
    })
    console.log(blog, typeof blog)
    return blog
}
