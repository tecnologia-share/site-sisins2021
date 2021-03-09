import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('perguntas')
class Pergunta {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  pergunta: string;

  @Column()
  tipo: string;

  @Column()
  alternativa1: string;

  @Column()
  alternativa2: string;

  @Column()
  alternativa3: string;

  @Column()
  alternativa4: string;

  @Column()
  alternativa5: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Pergunta };
