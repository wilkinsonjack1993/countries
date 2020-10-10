import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./apps/country-api/src/**/*.graphql'],
    path: join(process.cwd(), 'apps/country-api/src/graphql.ts'),
    outputAs: 'class',
    watch: true,
    skipResolverArgs: true,
});