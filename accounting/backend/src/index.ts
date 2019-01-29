import * as express from "express";
import "reflect-metadata";
import {createConnection} from "typeorm";
import Routes from "./routes";

createConnection()
    .then(async () => {
        console.log("Connection to db has been established");
        const app = express();
        const port = 4200;
        app.listen(port, () => {
            console.log(`server started at http://localhost:${ port }`);
        });
        const routes = new Routes(app);
    })
    .catch((error) => console.log(error));
