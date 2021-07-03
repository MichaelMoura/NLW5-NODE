import 'reflect-metadata'
import express, {Request,Response, NextFunction} from 'express';
import 'express-async-errors';

import { router } from './routes';

import './database';

//geralmente as tipagens ficam dessa forma @types/express -D
const app = express();

//todas as minhas rotas estão aqui.

app.use(express.json())

app.use(router);

//tratativa de erros em relação ao cadastro de usuários
app.use((err:Error, request:Request, response:Response,next:NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error:err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
}) 

app.listen(3000, ()=>console.log('o servidor está rodando'))
