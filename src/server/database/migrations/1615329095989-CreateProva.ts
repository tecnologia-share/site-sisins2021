import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProva1615329095989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'provas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'inscricao_id',
            type: 'varchar',
          },
          {
            name: 'qtd_pontos',
            type: 'int',
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
            name: 'FKInscricao',
            referencedTableName: 'inscricoes',
            referencedColumnNames: ['id'],
            columnNames: ['inscricao_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('provas');
  }
}
