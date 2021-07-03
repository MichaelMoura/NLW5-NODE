import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../repositories/userRepositories"

interface IAuthenticateRequest{
    email:string;
    password:string;
}

export class AuthenticateUserService{
    async execute({email, password}:IAuthenticateRequest){
        
        //minha variável de consulta
        const usersRepository = getCustomRepository(UserRepositories);
        
        //verificar se o email existe
        const user = await usersRepository.findOne({
            email,
        })

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        //verificar se senha esta correta 
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //gerar o token
        //seria bom colocar isso como variavel de ambiente 
        const token = sign({
            email: user.email,

        }, "18d6b595d2d05d2fa3216b5eafce1a7e",{
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}