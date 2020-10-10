import { Module } from '@nestjs/common';
import { CurrencyModule } from '../Currency/currency.module';
import { CurrencyService } from '../Currency/currency.service';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
    imports: [CurrencyModule],
    providers: [CountryService, CountryResolver, CurrencyService],
})
export class CountryModule { }