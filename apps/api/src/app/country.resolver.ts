import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface CountryEntity {
    id: number;
    name: string;
    capital: string;
    continent: string;
}

@Resolver('Country')
export class CountryResolver {
    private countries: CountryEntity[] = [
        {
            id: 1,
            name: 'England',
            capital: 'London',
            continent: 'Europe'
        },
        {
            id: 2,
            name: 'Scotland',
            capital: 'Edinburgh',
            continent: 'Europe'
        },
    ];

    @Query('allCountries')
    getAllCountries(): CountryEntity[] {
        return this.countries;
    }

    @Mutation()
    addCountry(
        @Args('name') name: string,
        @Args('capital') capital: string,
        @Args('continent') continent: string
    ) {
        const newCountry: CountryEntity = {
            id: this.countries.length + 1,
            name,
            capital,
            continent,
        };

        this.countries.push(newCountry);

        return newCountry;
    }
}