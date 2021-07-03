import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/userRepositories";
import {hash} from "bcryptjs"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}


class CreateUserService{
    async execute({name, email, admin=false, password}: IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("Email incorrect")
        }

        

        const userAlreadyExists = await usersRepository.findOne({
            email,
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password,8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })
        //Como meu passwordHash é um atributo diferente dos outros, eu passo ele dessa forma

        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserService}