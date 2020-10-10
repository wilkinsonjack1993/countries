import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Continent } from '../../graphql';
import { CountryService } from './country.service';

@Resolver('Country')
export class CountryResolver {
    constructor(
        private countryService: CountryService,
    ) { return; }

    @Query('country')
    async getCountry(@Args('id') id: number) {
        return this.countryService.findOneById(id);
    }

    @Query('allCountries')
    async getAllCountries() {
        return this.countryService.findAll();
    }

    @Mutation('addCountry')
    async addCountry(
        @Args('name') name: string,
        @Args('continent') continent: Continent,
        @Args('capital') capital: string,
        @Args('currencies') currencies: number[]
    ) {
        return this.countryService.addCountry(name, continent, capital, currencies);
    }

}