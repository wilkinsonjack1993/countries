import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Currency {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    symbol: string;

    @Column()
    abbreviation: string;
}