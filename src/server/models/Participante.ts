import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('participantes')
class Participante {
  @PrimaryColumn()
  readonly id: string;

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
  verified: boolean;

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
