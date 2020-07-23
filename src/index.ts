import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { createConnection } from "typeorm";

import { UserController } from './controllers/user.controller'

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

try {
    // tslint:disable-next-line: no-var-requires
    const swaggerDocument = require('./swagger.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
    console.log('Unable to load swagger.json', err);
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
}).then(connection => {
    console.log('Connection established');
    const userController = new UserController(app);
}).catch(error => {
    console.log(error);
});

// start the Express server
app.listen(port, () => {
    console.log(`Events Management service started at http://localhost:${port}`);
});