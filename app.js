import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import urlRoutes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import path from "path";
import { localMiddlewares } from "./middlewares";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.set("view engine", "pug");
//app.set("views", path.join(__dirname, "views/layouts")); ->  pug 파일들이 있는 폴더를 정하는 부분
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(localMiddlewares);

app.use(urlRoutes.home, globalRouter);
app.use(urlRoutes.users, userRouter);

export default app;
