import { Comment } from "../../entities/Comment.js";
import { getOneBlog } from "../blogs/repository.blogs.js";
import { getOneUser } from "../users/repository.users.js";
import { IComment } from "./interface.comments.js";

// add one comment  

export const addOneComment = async (commentPayLoad: {
    authorId: number;
    blogId: number;
    commentContent: string;
}): Promise<IComment> => {
    try {
        const user = await getOneUser({id:commentPayLoad.authorId});
        const blog = await getOneBlog(commentPayLoad.blogId);
        const { id, content, created_at } = await Comment.save({
            content: commentPayLoad.commentContent,
            user,
            blog,
        });

        return { id, content, createdAt: created_at };
    } catch (error) {
        console.log(error);
    }
};
//get one comment by id
export const getOneComment = async (id: number): Promise<object> => {
    try {
        const comment = await Comment.find({
            where: {
                id,
            },
            relations: {
                user: true,
            },
            select: {
                id: true,
                content: true,
                created_at: true,
                user: {
                    first_name: true,
                    last_name: true
                }
            }
        });
        return comment;
    } catch (error) {
        console.log(error);
    }
};
