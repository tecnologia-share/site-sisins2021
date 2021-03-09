import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cursos')
class Curso {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  processo_seletivo_id: string;

  //   @ManyToOne(() => ProcessoSeletivo)
  //   @JoinColumn({ name: 'processo_seletivo_id' })
  //   processo_seletivo: ProcessoSeletivo;

  @Column()
  tipo: string; // se o curso é de idiomas, tecnologia, etc..

  @Column()
  nome: string;

  @Column()
  prof: string;

  @Column()
  descricao: string;

  @Column()
  hasProva: boolean;

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
