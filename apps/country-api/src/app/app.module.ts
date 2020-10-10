import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './Country/country.module';

@Module({
  imports: [CountryModule, GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
      outputAs: 'class',
      skipResolverArgs: true,
    },
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
