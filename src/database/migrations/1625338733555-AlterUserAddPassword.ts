import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1625338733555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.addColumn(
            "users",
            new TableColumn({
                name:"password",
                type:"varchar",
                isNullable:true,
            })
        )
    }
    //como esse campo não existia no banco de dados, precisamos colocar se ele é obrigatório ou opcíonal


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }

}
