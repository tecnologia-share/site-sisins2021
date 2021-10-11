import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCurso1615329064778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cursos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'processo_seletivo_id',
            type: 'varchar',
          },
          {
            name: 'categoria',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'professor',
            type: 'varchar',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'horario',
            type: 'varchar',
          },
          {
            name: 'tempo_duracao',
            type: 'varchar',
          },
          {
            name: 'curso_continuacao_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKProcessoSeletivo',
            referencedTableName: 'processos_seletivos',
            referencedColumnNames: ['id'],
            columnNames: ['processo_seletivo_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cursos');
  }
}
