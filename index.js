import express from 'express';
import bodyParser from 'body-parser';
import  { graphqlExpress, makeExecutableSchema } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress)

app.listen(8080)