import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyModule } from '../Currency/currency.module';
import { Country } from './country.entity';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
    imports: [CurrencyModule, TypeOrmModule.forFeature([Country])],
    providers: [CountryService, CountryResolver],
})
export class CountryModule { }