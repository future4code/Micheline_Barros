import { PostController } from './../../controller/PostController/PostController';
import express from "express"

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/create", postController.createPost)