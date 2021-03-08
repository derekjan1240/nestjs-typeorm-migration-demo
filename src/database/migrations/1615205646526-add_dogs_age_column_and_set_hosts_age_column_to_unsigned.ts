import {MigrationInterface, QueryRunner} from "typeorm";

export class addDogsAgeColumnAndSetHostsAgeColumnToUnsigned1615205646526 implements MigrationInterface {
    name = 'addDogsAgeColumnAndSetHostsAgeColumnToUnsigned1615205646526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dog` ADD `age` tinyint UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `internalComment` `internalComment` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `host` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `host` CHANGE `internalComment` `internalComment` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `last_name` `last_name` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `username` `username` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `age` `age` tinyint UNSIGNED NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `host` CHANGE `age` `age` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `username` `username` varchar(50) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `last_name` `last_name` varchar(50) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `internalComment` `internalComment` varchar(300) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `host` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `internalComment` `internalComment` varchar(300) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` DROP COLUMN `age`");
    }

}
