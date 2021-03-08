import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('usuarioShare')
class UsuarioShare {
    @PrimaryColumn()
    readonly id: string;

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