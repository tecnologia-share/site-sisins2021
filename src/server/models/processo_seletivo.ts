import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('processoSeletivo')
class ProcessoSeletivo {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    data_inicio: string;

    @Column()
    data_final: string;

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