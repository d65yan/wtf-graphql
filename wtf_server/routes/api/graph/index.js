const express = require('express');
const { ApolloServer, qql } = require('apollo-server-express');
const typeDefs = require('./queries');
const resolvers = require('./resolvers');
const Mutation = require('./mutations');


const router = express.Router();
const graphServer = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers: {
    ...resolvers,
    Mutation,
  },
  context: {
    dataSources: {
      ...require('../models'),
    },
  },
});

graphServer.applyMiddleware({ app: router, path: '/' });

module.exports = router;

