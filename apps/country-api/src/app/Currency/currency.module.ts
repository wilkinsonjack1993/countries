import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './currency.entity';
import { CurrencyResolver } from './currency.resolver';
import { CurrencyService } from './currency.service';

@Module({
    imports: [TypeOrmModule.forFeature([Currency])],
    exports: [CurrencyService],
    providers: [CurrencyService, CurrencyResolver],
})
export class CurrencyModule { }