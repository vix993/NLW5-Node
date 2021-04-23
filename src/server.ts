import { http } from "./http";
import "./websocket/client";

export const server = http.listen(8080, () => console.log("Server is running on port 8080"));