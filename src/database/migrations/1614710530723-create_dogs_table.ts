import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDogsTable1614710530723 implements MigrationInterface {
  name = 'createDogsTable1614710530723';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `dog` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `dog`');
  }
}