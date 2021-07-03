import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    admin:boolean;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        //toda vez que eu tiver um novo usuário sendo criado, transforme esse id em um uuid
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {User}
