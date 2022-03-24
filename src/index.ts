import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";
import routers from "./routes";
import RouterConfig from "utils/routerConfig";


const app = express();
dotenv.config({ path: __dirname + '/.env' });

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routers.forEach((router: RouterConfig) => {
    app.use(router.path, router.router);
})

// start the express server
app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${process.env.PORT}`);
});