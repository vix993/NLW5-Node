import express from "express";

import "./database";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

export const server = app.listen(8080, () => console.log("Server is running on port 8080"));