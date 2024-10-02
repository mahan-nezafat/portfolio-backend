import { Blog } from "../../entities/Blog";
import { User } from "../../entities/User";
import { getOneUser } from "../users/users.repository";
import { BlogInstance, IBlog, status } from "./interface.blogs";

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

        console.log(blog, typeof blog);
        return blog;
    } catch (error) {
        console.log(error);
    }
};

export const addOneBlog = async (
    title: string,
    status: status,
    thumbnail: string,
    category: string,
    readtime: number,
    author_summary: string,
    content: object[],
    language: string,
    authorId: number
): Promise<IBlog> => {
    try {
        const user = await getOneUser(authorId);

        const newBlog = await Blog.save({
            title,
            status,
            thumbnail,
            upvote: 0,
            views: 0,
            category,
            readtime,
            author_summary,
            content,
            language,
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

export const updateOneBlog = async (
    id: number,
    status: status
    // id: number,
    // title: string,
    // status: status,
    // thumbnail: string,
    // category: string,
    // readtime: number,
    // author_summary: string,
    // content: object[],
    // language: string
): Promise<object> => {
    // const newBlog = {
    //     id,
    //     title,
    //     status,
    //     thumbnail,
    //     category,
    //     readtime,
    //     author_summary,
    //     content,
    //     language,
    // };
    try {
        const updatedBlog = await Blog.update(id, {status: status});
        return updatedBlog;
    } catch (error) {
        console.log(error);
    }
};

export const deleteOneBlog = async (id: number) => {
    const result = await Blog.delete(id)
    return result;
}
