import { Blog } from "../../entities/Blog";
import { getOneUser } from "../users/repository.users";
import { BlogInstance, IBlog, status } from "./interface.blogs";
import { AppDataSource } from "../../data-source";


// get all blogs
export const getAllBlogs = async (): Promise<Array<IBlog>> => {
    try {
        const blogs = await Blog.find({
            select: {
                id: true,
                title: true,
                status: true,
                thumbnail: true,
                upvote: true,
                views: true,
                category: true,
                readtime: true,
                author_summary: true,
                content: true,
                language: true,
            },
        });
        console.log(blogs, typeof blogs);
        return blogs;
    } catch (error) {
        console.log(error);
    }
};
// get one blog by id
export const getOneBlog = async (id: number): Promise<IBlog> => {
    try {
        const blog = await Blog.findOne({
            select: {
                id: true,
                title: true,
                status: true,
                thumbnail: true,
                upvote: true,
                views: true,
                category: true,
                readtime: true,
                author_summary: true,
                content: true,
                language: true,
            },
            where: {
                id: id,
            },
            relations: {
                user: true,
                comments: true,
            },
        });

        // console.log(blog, typeof blog);
        return blog;
    } catch (error) {
        console.log(error);
    }
};
// create a blog 
export const addOneBlog = async (blogData:
    {title: string,
    status: status,
    thumbnail: string,
    category: string,
    readtime: number,
    author_summary: string,
    content: object[],
    language: string,
    authorId: number}
): Promise<IBlog> => {
    try {
        const user = await getOneUser(blogData.authorId);

        const newBlog = await Blog.save({
            
            title: blogData.title,
            status: blogData.status,
            thumbnail: blogData.thumbnail,
            upvote: 0,
            views: 0,
            category: blogData.category,
            readtime: blogData.readtime,
            author_summary: blogData.author_summary,
            content: blogData.content,
            language: blogData.language,
            user,
        });
        const resultBlog: IBlog = {
            id: newBlog.id,
            title: newBlog.title,
            status: newBlog.status,
            thumbnail: newBlog.thumbnail,
            upvote: newBlog.upvote,
            views: newBlog.views,
            category: newBlog.category,
            readtime: newBlog.readtime,
            author_summary: newBlog.author_summary,
            content: newBlog.content,
            language: newBlog.language,
        };
        console.log(resultBlog);
        return resultBlog;
    } catch (error) {
        console.log(error);
    }
};

// update a blog by id
export const updateOneBlog = async (
    id: number,
    updatedData:{
    title?: string,
    status?: status,
    thumbnail?: string,
    category?: string,
    readtime?: number,
    author_summary?: string,
    content?: object[],
    language?: string
    }
): Promise<object> => {
    
    try {
        const updatedBlog = await Blog.update(id, {
            status: updatedData.status,
            title: updatedData.title,
            thumbnail: updatedData.thumbnail,
            category: updatedData.category,
            readtime: updatedData.readtime,
            author_summary: updatedData.author_summary,
            content: updatedData.content,
            language: updatedData.language,
        });
        return updatedBlog;
    } catch (error) {
        console.log(error);
    }
};

// delete a blog by id
export const deleteOneBlog = async (id: number) => {
    try {
        const result = await Blog.delete(id);
    return result;
    } catch (error) {
        console.log(error)
    }
    
};

// filter recet blogs
export const getRecentBlogs = async (): Promise<Array<IBlog>> => {
    try {
        const blogs = await Blog.find({
            order: {
             created_at: "DESC"
            }
             
         })
         console.log(blogs)
         return blogs
    } catch (error) {
        console.log(error)
    }
    
}

// filter oldest blogs
export const getOldestBlogs = async (): Promise<Array<IBlog>> => {
    try {
        const blogs = await Blog.find({
            order: {
             created_at: "ASC"
            }
             
         })
         console.log(blogs)
         return blogs
    } catch (error) {
        console.log(error)
    }
    
}

// increment upvotes 

export const incrementUpvotes = async (id: number) => {
    try {
        const result = await AppDataSource.getRepository(Blog).increment({id: id}, "upvote", 1)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
   
}
// increment views

export const incrementViews = async (id: number) => {
    try {
        const result = await AppDataSource.getRepository(Blog).increment({id: id}, "views", 1)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
}