import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePerguntaParticipante1615329090001
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'perguntas_participantes',
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
            name: 'pergunta_id',
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
            name: 'FKParticipante',
            referencedTableName: 'participantes',
            referencedColumnNames: ['id'],
            columnNames: ['participante_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKPergunta',
            referencedTableName: 'perguntas',
            referencedColumnNames: ['id'],
            columnNames: ['pergunta_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('perguntas_participantes');
  }
}
