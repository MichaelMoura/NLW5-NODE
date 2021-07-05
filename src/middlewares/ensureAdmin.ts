import {Request, Response, NextFunction} from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/userRepositories';

async function ensureAdmin(request:Request,response:Response,next:NextFunction){
    
    const {user_id} = request;

    const usersRepositories = getCustomRepository(UserRepositories);

    const {admin} = await usersRepositories.findOne(user_id);
    
    //Verificar se o usuário é admin

    if(admin){
        //Se ele for admin, pode passar
        return next();
    }

    return response.status(401).json({
        error:"User isn't admin"
    })
}

export {ensureAdmin}