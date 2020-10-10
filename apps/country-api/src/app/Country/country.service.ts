import { Injectable } from '@nestjs/common';
import { Continent, Country } from '../../graphql';
import { CurrencyService } from '../Currency/currency.service';

@Injectable()
export class CountryService {
    constructor(
        private currencyService: CurrencyService
    ) { return; }

    async findOneById(id: number): Promise<Country> {
        const country = countries.find(country => country.id === id);
        const { currencies: currencyIds, ...otherVariables } = country
        const currencies = await this.currencyService.findByIds(currencyIds);
        const populatedCountry = { ...otherVariables, currencies } as Country;
        return Promise.resolve(populatedCountry);
    }
}

const countries = [
    {
        id: 1,
        name: 'England',
        continent: Continent.EUROPE as Continent,
        capital: 'London',
        currencies: [1]
    },
    {
        id: 2,
        name: 'Scotland',
        continent: Continent.EUROPE as Continent,
        capital: 'Edinburgh',
        currencies: [1, 2]
    }
]
