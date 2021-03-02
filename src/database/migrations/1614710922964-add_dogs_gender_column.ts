import {MigrationInterface, QueryRunner} from "typeorm";

export class addDogsGenderColumn1614710922964 implements MigrationInterface {
    name = 'addDogsGenderColumn1614710922964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dog` ADD `gender` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dog` DROP COLUMN `gender`");
    }

}
