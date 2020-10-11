import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './Country/country.module';
import { ConfigModule } from '@nestjs/config';
import { CurrencyModule } from './Currency/currency.module';
import { Country } from './Country/country.entity';
import { Currency } from './Currency/currency.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CountryModule,
    CurrencyModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
        skipResolverArgs: true,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: "./database.sqlite",
      synchronize: true,
      entities: [
        Country,
        Currency
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { return; }
}
