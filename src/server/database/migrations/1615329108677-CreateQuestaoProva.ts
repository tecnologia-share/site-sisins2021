import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateQuestaoProva1615329108677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questoes_provas',
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
            name: 'questao_id',
            type: 'varchar',
          },
          {
            name: 'resposta',
            type: 'varchar',
          },
          {
            name: 'pontos',
            type: 'int',
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
          {
            name: 'FKQuestao',
            referencedTableName: 'questoes',
            referencedColumnNames: ['id'],
            columnNames: ['questao_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questoes_provas');
  }
}
