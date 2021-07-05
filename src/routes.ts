import { Router } from "express";

import {CreateUserController} from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagControllers";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiverComplimentsController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListTagController } from "./controllers/listTagController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();


const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentUserController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiveComplimentsController();
const listTagController = new ListTagController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle)
router.post("/tags",ensureAuthenticated,ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliment",ensureAuthenticated, complimentUserController.handle)

router.get("/send",ensureAuthenticated,listUserSenderComplimentsController.handle)
router.get("/receive",ensureAuthenticated,listUserReceiverComplimentsController.handle)

//Eu posso ter duas rotas com os nomes iguais desde que elas sejam de tipos diferentes
router.get("/tags",ensureAuthenticated,listTagController.handle)
router.get("/list-users", ensureAuthenticated,listUsersController.handle)

export {router}