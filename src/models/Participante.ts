import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Inscricao } from './Inscricao';
import { PerguntaParticipante } from './PerguntaParticipante';

@Entity('participantes')
class Participante {
  @PrimaryColumn()
  readonly id: string;

  @OneToMany(() => Inscricao, (inscricao) => inscricao.participante, {
    cascade: true,
  })
  inscricoes: Inscricao[];

  @OneToMany(
    () => PerguntaParticipante,
    (perguntaParticipante) => perguntaParticipante.participante,
    {
      cascade: true,
    }
  )
  perguntasParticipantes: PerguntaParticipante[];

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  nascimento: Date;

  @Column()
  pais: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Participante };
