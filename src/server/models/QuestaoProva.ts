import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Prova } from './Prova';
import { Questao } from './Questao';

@Entity('questoes_provas')
class QuestaoProva {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  prova_id: string;

  @ManyToOne(() => Prova)
  @JoinColumn({ name: 'prova_id' })
  prova: Prova;

  @Column()
  questao_id: string;

  @ManyToOne(() => Questao)
  @JoinColumn({ name: 'questao_id' })
  questao: Questao;

  @Column()
  resposta: string;

  @Column()
  pontos: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { QuestaoProva };
