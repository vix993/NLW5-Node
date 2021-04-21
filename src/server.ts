import express from "express";

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello World"
    });
});

app.post("/users", (request, response) => {
    return response.json({
        message: "User saved!"
    });
});

app.listen(8080, () => console.log("Server is running on port 8080"));