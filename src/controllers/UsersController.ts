import { Request, Response } from "express"
import { UsersService } from "../services/UsersServices"

class UsersComtroller {
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return response.json(user);
    }
}

export { UsersComtroller }