import express from "express";
import urlRoutes from "../routes";
import { homeC } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(urlRoutes.home, homeC);

export default globalRouter;
