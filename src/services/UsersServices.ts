import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {

    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        // check user exists

        const userExists = await usersRepository.findOne({
            email
        })

        // if no, save in db
        if (userExists) {
            return userExists;
        }

        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        // else return id
        return user;


    }
}

export { UsersService }