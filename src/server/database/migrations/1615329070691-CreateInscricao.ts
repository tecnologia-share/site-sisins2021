import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInscricao1615329070691 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inscricoes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'participante_id',
            type: 'varchar',
          },
          {
            name: 'curso_id',
            type: 'varchar',
          },
          {
            name: 'motivo',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'desistencia',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKParticipantes',
            referencedTableName: 'participantes',
            referencedColumnNames: ['id'],
            columnNames: ['participante_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKCursos',
            referencedTableName: 'cursos',
            referencedColumnNames: ['id'],
            columnNames: ['curso_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('inscricoes');
  }
}
