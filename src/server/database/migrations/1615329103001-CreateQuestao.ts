import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateQuestao1615329103001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questoes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'pergunta',
            type: 'varchar',
          },
          {
            name: 'imagem',
            type: 'varchar',
          },
          {
            name: 'horario',
            type: 'varchar',
          },
          {
            name: 'is_objetiva',
            type: 'boolean',
          },
          {
            name: 'alternativa1',
            type: 'varchar',
          },
          {
            name: 'alternativa2',
            type: 'varchar',
          },
          {
            name: 'alternativa3',
            type: 'varchar',
          },
          {
            name: 'alternativa4',
            type: 'varchar',
          },
          {
            name: 'alternativa5',
            type: 'varchar',
          },
          {
            name: 'gabarito',
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
    await queryRunner.dropTable('questoes');
  }
}
