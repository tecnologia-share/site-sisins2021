import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { ProcessoSeletivo } from './ProcessoSeletivo';

@Entity('cursos')
class Curso {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  processo_seletivo_id: string;

  @ManyToOne(() => ProcessoSeletivo)
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
  has_prova: boolean;

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
