import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Inscricao } from './Inscricao';

@Entity('provas')
class Prova {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  inscricao_id: string;

  @ManyToOne(() => Inscricao)
  @JoinColumn({ name: 'inscricao_id' })
  inscricao: Inscricao;

  @Column()
  qtd_pontos: string;

  @Column()
  resposta: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Prova };
