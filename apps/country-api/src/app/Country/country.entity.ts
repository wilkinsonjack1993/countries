import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Currency } from '../Currency/currency.entity';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    continent: string;

    @Column()
    capital: string;

    currencies: Currency[];
}