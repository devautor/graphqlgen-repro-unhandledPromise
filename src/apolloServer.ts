/**
 * Initialising Apollo server with executable schema
 */
import { ApolloServer } from "apollo-server";
import makeExecutableSchema from "./makeExecutableSchema";
import { Context } from "./context";

const server = new ApolloServer({
  schema: makeExecutableSchema(),
  context: ({ req, res }: any): Context => ({
    req,
    res
  })
});

const graphqlPath = server.graphqlPath;
console.log(`Apollo server created, graphql path is ${graphqlPath}`);

export { server as default, graphqlPath };
