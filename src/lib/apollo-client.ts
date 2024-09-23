import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GraphQL_URL!,
  cache: new InMemoryCache(),
});

export default client;
