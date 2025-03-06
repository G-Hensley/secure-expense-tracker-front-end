import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: 'http://localhost:5700/graphql',
});

export const client = new ApolloClient({
    link:link,
    cache: new InMemoryCache(),
});
