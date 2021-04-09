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
import { Avaliacao } from './Avaliacao';

import { Curso } from './Curso';
import { Participante } from './Participante';
import { ProvaInscricao } from './ProvaInscricao';

@Entity('inscricoes')
class Inscricao {
  @PrimaryColumn()
  readonly id: string;

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.usuarioShare, {
    cascade: true,
  })
  avaliacoes: Avaliacao[];

  @OneToMany(
    () => ProvaInscricao,
    (provaInscricao) => provaInscricao.inscricao,
    {
      cascade: true,
    }
  )
  provasInscricoes: ProvaInscricao[];

  @Column()
  participante_id: string;

  @ManyToOne(() => Participante, (participante) => participante.inscricoes, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'participante_id' })
  participante: Participante;

  @Column()
  curso_id: string;

  @ManyToOne(() => Curso, (curso) => curso.inscricoes, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column()
  motivo: string;

  @Column()
  status: string;

  @Column()
  desistencia: Date;

  @Column()
  link_video: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Inscricao };
