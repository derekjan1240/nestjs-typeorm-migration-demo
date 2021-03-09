import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserTable1615294788993 implements MigrationInterface {
    name = 'createUserTable1615294788993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, `isArchived` tinyint NOT NULL DEFAULT 0, `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `createdBy` varchar(300) NOT NULL, `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6), `lastChangedBy` varchar(300) NOT NULL, `internalComment` varchar(300) NULL, `name` varchar(50) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `internalComment` `internalComment` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `host` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `host` CHANGE `internalComment` `internalComment` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `last_name` `last_name` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `host` CHANGE `username` `username` varchar(50) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `host` CHANGE `username` `username` varchar(50) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `last_name` `last_name` varchar(50) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `internalComment` `internalComment` varchar(300) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `host` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `host` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `internalComment` `internalComment` varchar(300) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `lastChangedDateTime` `lastChangedDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `dog` CHANGE `createDateTime` `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("DROP TABLE `user`");
    }

}
