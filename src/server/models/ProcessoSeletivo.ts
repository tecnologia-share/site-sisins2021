import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('processos_seletivos')
class ProcessoSeletivo {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  data_inicio: Date;

  @Column()
  data_final: Date;

  @Column()
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ProcessoSeletivo };
