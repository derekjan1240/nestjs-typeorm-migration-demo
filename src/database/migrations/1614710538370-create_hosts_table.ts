import { MigrationInterface, QueryRunner } from 'typeorm';

export class createHostsTable1614710538370 implements MigrationInterface {
  name = 'createHostsTable1614710538370';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `host` (`id` int NOT NULL AUTO_INCREMENT, `gender` tinyint NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `age` int NOT NULL, `avatar` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `host`');
  }
}
