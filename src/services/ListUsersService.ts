import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/userRepositories"


class ListUsersService{
    async execute(){
        const usersRepositories = getCustomRepository(UserRepositories);

        const listUsers = usersRepositories.find();

        return listUsers;
    }
}

export {ListUsersService}