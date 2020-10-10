import { Module } from '@nestjs/common';
import { CurrencyResolver } from './currency.resolver';
import { CurrencyService } from './currency.service';

@Module({
    imports: [],
    providers: [CurrencyService, CurrencyResolver],
})
export class CurrencyModule { }