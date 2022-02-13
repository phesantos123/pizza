import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1644715035218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: "numeric",
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: "created_at",
                        type: 'timestamp',
                        default: "now()",

                    },
                    {
                        name: "updated_at",
                        type: 'timestamp',
                        default: "now()",
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product')
    }

}
