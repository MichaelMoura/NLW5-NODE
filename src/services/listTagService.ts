import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/tagsRepositories";

class ListTagsService{
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        let tags = await tagsRepositories.find()

        //vamos supor que eu queira colocar um icone ou hashtag aqui no meu banco de dados
        tags = tags.map(tag=>(
            {...tag, nameCustom: `#${tag.name}`}
        ))

        return tags
    }
}

export { ListTagsService}