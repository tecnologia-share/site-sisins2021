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
import { Curso } from './Curso';
import { ProvaInscricao } from './ProvaInscricao';
import { Questao } from './Questao';

@Entity('provas')
class Prova {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @OneToMany(() => ProvaInscricao, (provaInscricao) => provaInscricao.prova, {
    cascade: true,
  })
  provasInscricoes: ProvaInscricao[];

  @OneToMany(() => Questao, (questao) => questao.prova, {
    cascade: true,
  })
  questoes: Questao[];

  @Column()
  curso_id: string;

  @ManyToOne(() => Curso, (curso) => curso.provas, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'curso_id' })
  curso: Curso;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Prova };
