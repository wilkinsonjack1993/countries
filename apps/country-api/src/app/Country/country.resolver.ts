import { Args, Query, Resolver } from "@nestjs/graphql";
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

}