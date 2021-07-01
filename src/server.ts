import 'reflect-metadata'
import express from 'express';

import { router } from './routes';

import './database';

//geralmente as tipagens ficam dessa forma @types/express -D
const app = express();

//todas as minhas rotas estão aqui.

app.use(express.json())

app.use(router);

app.listen(3333, ()=>console.log('o servidor está rodando'))
