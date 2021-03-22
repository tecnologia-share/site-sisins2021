import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Participante } from './Participante';
import { Pergunta } from './Pergunta';

@Entity('perguntas_participantes')
class PerguntaParticipante {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  participante_id: string;

  @ManyToOne(
    () => Participante,
    (participante) => participante.perguntasParticipantes
  )
  @JoinColumn({ name: 'participante_id' })
  participante: Participante;

  @Column()
  pergunta_id: string;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.perguntasParticipantes, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'pergunta_id' })
  pergunta: Pergunta;

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

export { PerguntaParticipante };
