import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from '../../graphql';
import { Currency as CurrencyEntity } from './currency.entity';

@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(CurrencyEntity)
        private currencyRepository: Repository<CurrencyEntity>
    ) { return; }

    public findOneById(id: number): Promise<Currency> {
        return this.currencyRepository.findOne(id);
    }

    public findByIds(ids: number[]): Promise<Currency[]> {
        return Promise.all(ids.map(id => this.findOneById(id)));
    }

    public findAll(): Promise<Currency[]> {
        return this.currencyRepository.find();
    }

    public async addCurrency(name: string, symbol: string, abbreviation: string): Promise<Currency> {
        return this.currencyRepository.save({ name, symbol, abbreviation });
    }
}

// const currencies = [
//     {
//         id: 1,
//         name: 'pounds',
//         symbol: '£',
//         abbreviation: 'GBP'
//     },
//     {
//         id: 2,
//         name: 'scottish pounds',
//         symbol: '£S',
//         abbreviation: 'SP'
//     },
//     {
//         id: 3,
//         name: 'Australian Dollar',
//         symbol: 'A$',
//         abbreviation: 'AUD'
//     }
// ] as Currency[]