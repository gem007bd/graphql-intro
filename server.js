const express = require('express');
const {
    ApolloServer,
    gql
} = require('apollo-server');

const app = express();

/**
 * Construct a schema, using GraphQL schema language
 * The GraphQL schema
 */
const typeDefs = gql `
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

/**
 * Provide resolver functions for your schema fields
 */
const resolvers = {
    Query: {
        hello: () => 'world'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({
    url
}) => {
    console.log(`🚀 Server ready at ${url}`)
});