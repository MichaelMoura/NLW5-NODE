import {Request, Response, NextFunction} from 'express';

function ensureAdmin(request:Request,response:Response,next:NextFunction){
    //Verificar se o usuário é admin
    const admin = true;

    if(admin){
        //Se ele for admin, pode passar
        return next();
    }

    return response.status(401).json({
        error:"User isn't admin"
    })
}

export {ensureAdmin}