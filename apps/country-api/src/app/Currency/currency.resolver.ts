import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Currency } from '../../graphql';
import { CurrencyService } from './currency.service';

@Resolver('Currency')
export class CurrencyResolver {
    constructor(
        private currencyService: CurrencyService,
    ) { return; }

    @Query('currency')
    async getCurrency(@Args('id') id: number): Promise<Currency> {
        return this.currencyService.findOneById(id);
    }

    @Query('allCurrencies')
    async getAllCurrencies(): Promise<Currency[]> {
        return this.currencyService.findAll();
    }

    @Mutation('addCurrency')
    async addCurrency(
        @Args('name') name: string,
        @Args('symbol') symbol: string,
        @Args('abbreviation') abbreviation: string,
    ): Promise<Currency> {
        return this.currencyService.addCurrency(name, symbol, abbreviation);
    }

}