//wedoinfew
import "reflect-metadata";
import express from "express";
import config from "config";
import routes from "./routes";
import UserService from "./service/user.service";
import IEntity from "./model/IEntity";
import { Gender, Role, User } from "./model/user.model";
import UserRepository from "./repository/user.repository";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
    console.log(`Server running at port ${port}`);
    routes(app);
});
