import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken"

interface IPayload{
    sub:string;
}

function ensureAuthenticated(request:Request, response:Response, next:NextFunction){
    //Receber o token
    //Estou recebendo esse token la do meu postman que eu configurei para passar o token no headers
    const authToken = request.headers.authorization;
    //o virgula vai ignorar a primeira posi;'ao do array
    


    //Validar o token esta preenchido
    if(!authToken){
        //Status nao autorizado e o end vai pegar a menssagem padrão
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    //validar se o token é válido
    try{
        //forcei meu sub ser transformado em string
        const {sub} = verify(token,"18d6b595d2d05d2fa3216b5eafce1a7e") as IPayload;

        request.user_id  = sub;

        return next();

    }catch(err){
        
        return response.status(401).end();
    }

    //Recuperar informações do usuário 

}

export {ensureAuthenticated}