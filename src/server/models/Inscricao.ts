import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Curso } from './Curso';

@Unique(['motivo'])
@Entity('inscricoes')
class Inscricao {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  participante_id: string;

  //   @ManyToOne(() => Participante)
  //   @JoinColumn({ name: 'participante_id' })
  //   participante: Participante;
  @Column()
  curso_id: string;

  @ManyToOne(() => Curso)
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @Column({ name: 'motivo' })
  motivo: string;

  @Column()
  status: string;

  @Column()
  desistencia: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Inscricao };
