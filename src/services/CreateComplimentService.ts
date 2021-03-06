import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/complimentsRepositories";
import { UserRepositories } from "../repositories/userRepositories";


interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}

class CreateComplimentService{
    async execute ({message,tag_id,user_receiver,user_sender}:IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UserRepositories)

        if(user_sender===user_receiver){
            throw new Error("Incorrect User Receiver")
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)

        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!")
        }
        
        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export {CreateComplimentService}