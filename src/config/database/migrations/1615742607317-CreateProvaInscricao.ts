import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProvaInscricao1615742607317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'provas_inscricoes',
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
            name: 'prova_id',
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
    await queryRunner.dropTable('provas_inscricoes');
  }
}
