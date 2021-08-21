import { Request, Response } from "express";
import { PostBusiness } from "../../business/PostBusiness/PostBusiness";

export class PostController{
    createPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            console.log("postController")
            const { photo, description, type, createdAt, authorId } = req.body;

            const pdb = new PostBusiness
            const token = await pdb.create({ photo, description, type, createdAt, authorId }) 

            res.status(200).send({
                message: "Post criado com sucesso.",
                token
            })

        } catch (error) {

            res.status(400).send(error.message);

        }
    }

}