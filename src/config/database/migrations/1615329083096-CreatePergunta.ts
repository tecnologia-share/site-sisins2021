import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePergunta1615329083096 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'perguntas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'pergunta',
            type: 'varchar',
          },
          {
            name: 'tipo',
            type: 'varchar',
          },
          {
            name: 'alternativa1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alternativa2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alternativa3',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alternativa4',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alternativa5',
            type: 'varchar',
            isNullable: true,
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
    await queryRunner.dropTable('perguntas');
  }
}
