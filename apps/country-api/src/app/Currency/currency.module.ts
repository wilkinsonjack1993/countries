import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Module({
    imports: [],
    providers: [CurrencyService],
})
export class CurrencyModule { }