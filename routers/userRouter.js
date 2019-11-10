import express from "express";
import urlRoutes from "../routes";
import { userDetailC } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(urlRoutes.userDetail, userDetailC);

export default userRouter;
