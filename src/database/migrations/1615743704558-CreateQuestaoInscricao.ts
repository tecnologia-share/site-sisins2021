import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateQuestaoInscricao1615743704558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questoes_inscricoes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'prova_inscricao_id',
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
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKProvaInscricao',
            referencedTableName: 'provas_inscricoes',
            referencedColumnNames: ['id'],
            columnNames: ['prova_inscricao_id'],
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
    await queryRunner.dropTable('questoes_inscricoes');
  }
}
