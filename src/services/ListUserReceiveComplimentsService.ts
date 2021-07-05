import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/complimentsRepositories";

class ListUserReceiveComplimentsService{
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                 user_receiver:user_id,
            },
            relations:["userSender","UserReceiver","tag"]
        })

        return compliments;
    }
}


export {ListUserReceiveComplimentsService}