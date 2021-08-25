import express from "express";
import getUserByIdController from "../controller/GetUserByIdController";
import userController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/profile/:id", getUserByIdController.getUserId)

