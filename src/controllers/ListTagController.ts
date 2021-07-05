import { ListTagsService } from "../services/listTagService";
import {Request, Response} from "express"

class ListTagController{
    async handle(request:Request,response:Response){
        const listTagService = new ListTagsService()

        const tags = await listTagService.execute();

        return response.json(tags);
    }
}

export {ListTagController}