import { Injectable } from '@nestjs/common';
import { Currency } from '../../graphql';

@Injectable()
export class CurrencyService {
    constructor() { return; }

    findOneById(id: number): Promise<Currency> {
        return Promise.resolve(currencies.find(currency => currency.id === id));
    }

    findByIds(ids: number[]): Promise<Currency[]> {
        return Promise.all(ids.map(id => this.findOneById(id)));
    }
}

const currencies = [
    {
        id: 1,
        name: 'pounds',
        symbol: '£',
        abbreviation: 'GBP'
    },
    {
        id: 2,
        name: 'scottish pounds',
        symbol: '£S',
        abbreviation: 'SP'
    },
    {
        id: 3,
        name: 'Australian Dollar',
        symbol: 'A$',
        abbreviation: 'AUD'
    }
] as Currency[]