import {
    addOneBlog,
    deleteOneBlog,
    updateOneBlog,
} from "../../repository/blogs/repository.blogs";
import { connectToDb, disconnectFromDb } from "../handlers/adapter";
import { Request, Response } from "express";
//blogs
// export const createBlog = async (
//     req: Request,
//     res: Response
// ): Promise<object> => {
//     try {
//         const body = req.body;
//         await connectToDb();

//         const newBlog = await addOneBlog(body);
//         console.log(newBlog);
//         await disconnectFromDb();
//         return res.status(200).json({
//             message: "new blog added!",
//             data: newBlog,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const updateBlog = async (req: Request, res: Response): Promise<object> => {
//     try {
//         const {id} = req.params
//         const body = req.body
//         await connectToDb()
//         const updatedBlog = await updateOneBlog(Number(id), body)
//         console.log(updatedBlog)
//         await disconnectFromDb()
//         return res.status(200).json({
//             message: "blog was updated!",
//             data: updateBlog
//         })
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const deleteBlog = async (req: Request, res: Response): Promise<object> => {
//     try {
//         const {id} = req.params

//         await connectToDb()
//         const deletedBlog = await deleteOneBlog(Number(id))
//         console.log(deletedBlog)
//         await disconnectFromDb()
//         return res.status(200).json({
//             message: "blog was deleted!"
//         })
//     } catch (error) {
//         console.log(error)
//     }
// };
