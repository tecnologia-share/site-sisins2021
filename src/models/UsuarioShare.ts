import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Avaliacao } from './Avaliacao';

@Entity('usuarios_share')
class UsuarioShare {
  @PrimaryColumn()
  readonly id: string;

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.usuarioShare, {
    cascade: true,
  })
  avaliacoes: Avaliacao[];

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  role: string;

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

export { UsuarioShare };
