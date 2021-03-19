import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Inscricao } from './Inscricao';
import { Prova } from './Prova';
import { QuestaoInscricao } from './QuestaoInscricao';

@Entity('provas_inscricoes')
class ProvaInscricao {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  inscricao_id: string;

  @ManyToOne(() => Inscricao, (inscricao) => inscricao.provasInscricoes, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'inscricao_id' })
  inscricao: Inscricao;

  @OneToMany(
    () => QuestaoInscricao,
    (questaoInscricao) => questaoInscricao.provaInscricao,
    {
      cascade: true,
    }
  )
  questoesInscricoes: QuestaoInscricao[];

  @Column()
  prova_id: string;

  @ManyToOne(() => Prova, (prova) => prova.provasInscricoes, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'prova_id' })
  prova: Prova;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ProvaInscricao };
