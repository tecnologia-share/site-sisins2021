import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAvaliacao1615329076921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'avaliacoes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'usuario_share_id',
            type: 'varchar',
          },
          {
            name: 'inscricao_id',
            type: 'varchar',
          },
          {
            name: 'status',
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
            name: 'FKUsuarioShare',
            referencedTableName: 'usuarios_share',
            referencedColumnNames: ['id'],
            columnNames: ['usuario_share_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
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
    await queryRunner.dropTable('avaliacoes');
  }
}
