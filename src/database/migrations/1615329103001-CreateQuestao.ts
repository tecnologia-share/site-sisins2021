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
            name: 'prova_id',
            type: 'varchar',
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
        foreignKeys: [
          {
            name: 'FKProva',
            referencedTableName: 'provas',
            referencedColumnNames: ['id'],
            columnNames: ['prova_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questoes');
  }
}
