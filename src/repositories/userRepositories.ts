import {EntityRepository, Repository} from 'typeorm'
import { User } from '../entities/User'

//Qual vai ser a entidade que meu repositório vai utilizar
@EntityRepository(User)
class UserRepositories extends Repository<User>{}

export {UserRepositories}