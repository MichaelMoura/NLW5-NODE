import {Request,Response} from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        const {name,email, admin} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name,email,admin});

        console.log(user)

        return res.json(user)
    }
}

export { CreateUserController}


/**
 * server -> router -> Controller -> Service (throw new error) -> repository -> bd 
 */