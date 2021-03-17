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

import { ProcessoSeletivo } from './ProcessoSeletivo';
import { Prova } from './Prova';

@Entity('cursos')
class Curso {
  @PrimaryColumn()
  readonly id: string;

  @OneToMany(() => Inscricao, (inscricao) => inscricao.curso)
  inscricoes: Inscricao[];

  @OneToMany(() => Prova, (prova) => prova.curso)
  provas: Prova[];

  @Column()
  processo_seletivo_id: string;

  @ManyToOne(
    () => ProcessoSeletivo,
    (processoSeletivo) => processoSeletivo.cursos
  )
  @JoinColumn({ name: 'processo_seletivo_id' })
  processoSeletivo: ProcessoSeletivo;

  @Column()
  categoria: string;

  @Column()
  nome: string;

  @Column()
  professor: string;

  @Column()
  descricao: string;

  @Column()
  horario: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Curso };
