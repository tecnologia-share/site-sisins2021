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
import { Prova } from './Prova';

@Entity('provas_inscricoes')
class ProvaInscricao {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  inscricao_id: string;

  @ManyToOne(() => Inscricao)
  @JoinColumn({ name: 'inscricao_id' })
  inscricao: Inscricao;

  @Column()
  prova_id: string;

  @ManyToOne(() => Prova)
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
