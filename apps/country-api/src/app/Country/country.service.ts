import { Injectable } from '@nestjs/common';
import { Continent, Country } from '../../graphql';
import { CurrencyService } from '../Currency/currency.service';

@Injectable()
export class CountryService {
    constructor(
        private currencyService: CurrencyService
    ) { return; }

    public async findOneById(id: number): Promise<Country> {
        const country = countries.find(country => country.id === id);
        const { currencies: currencyIds, ...otherVariables } = country
        const currencies = await this.currencyService.findByIds(currencyIds);
        const populatedCountry = { ...otherVariables, currencies } as Country;
        return Promise.resolve(populatedCountry);
    }

    public findAll(): Promise<Country[]> {
        return Promise.all(countries.map(async country => {
            const { currencies: currencyIds, ...otherVariables } = country
            const currencies = await this.currencyService.findByIds(currencyIds);
            return { ...otherVariables, currencies } as Country;
        }));
    }

    public addCountry(
        name: string,
        continent: Continent,
        capital: string,
        currencies: number[]
    ): Promise<Country> {
        const id = countries.length + 1
        const newCountry = { id, name, continent, capital, currencies };
        countries.push(newCountry);
        return this.findOneById(id);
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
