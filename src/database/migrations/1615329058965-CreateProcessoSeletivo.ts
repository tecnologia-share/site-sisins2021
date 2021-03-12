import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProcessoSeletivo1615329058965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'processos_seletivos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'data_inicio',
            type: 'timestamp',
          },
          {
            name: 'data_final',
            type: 'timestamp',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('processos_seletivos');
  }
}
