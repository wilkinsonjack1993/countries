import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Continent, Country, Currency } from '../../graphql';
import { CurrencyService } from '../Currency/currency.service';
import { Country as CountryEntity } from './country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryEntity)
        private countryRepository: Repository<CountryEntity>,
        private currencyService: CurrencyService,
    ) { return; }

    public async findOneById(id: number): Promise<Country> {
        const country = await this.countryRepository.findOne(id);
        const mappedCountry = this.mapDBtoObject(country);
        return Promise.resolve(mappedCountry);
    }

    public async findAll(): Promise<Country[]> {
        const countries = await this.countryRepository.find()
        return countries.map(country => this.mapDBtoObject(country));
    }

    public async addCountry(
        name: string,
        continent: Continent,
        capital: string,
        currencyIds: number[]
    ): Promise<Country> {
        console.log('add country', currencyIds)
        const currencies: Currency[] = await this.currencyService.findByIds(currencyIds);
        console.log('currencies', currencies)
        return await this.countryRepository.save({ name, continent, capital, currencies });
    }

    private mapDBtoObject(dbEntity: CountryEntity): Country {
        const continent: Continent = Continent[dbEntity.continent];
        const country: Country = { ...dbEntity, continent };
        return country;
    }
}

// const countries = [
//     {
//         id: 1,
//         name: 'England',
//         continent: Continent.EUROPE as Continent,
//         capital: 'London',
//         currencies: [1]
//     },
//     {
//         id: 2,
//         name: 'Scotland',
//         continent: Continent.EUROPE as Continent,
//         capital: 'Edinburgh',
//         currencies: [1, 2]
//     }
// ]
