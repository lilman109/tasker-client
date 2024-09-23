import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL!,
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
