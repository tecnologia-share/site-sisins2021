import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Inscricao } from './Inscricao';
import { UsuarioShare } from './UsuarioShare';

@Entity('avaliacoes')
class Avaliacao {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  usuario_share_id: string;

  @ManyToOne(() => UsuarioShare, (usuarioShare) => usuarioShare.avaliacoes)
  @JoinColumn({ name: 'usuario_share_id' })
  usuarioShare: UsuarioShare;

  @Column()
  inscricao_id: string;

  @ManyToOne(() => Inscricao, (inscricao) => inscricao.avaliacoes)
  @JoinColumn({ name: 'inscricao_id' })
  inscricao: Inscricao;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Avaliacao };
