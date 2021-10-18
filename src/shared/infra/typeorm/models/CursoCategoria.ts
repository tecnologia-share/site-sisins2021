import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cursos_categorias')
class CursoCategoria {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  categoria: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { CursoCategoria };
