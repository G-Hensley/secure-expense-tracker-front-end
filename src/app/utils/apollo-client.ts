import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: 'https://expense-tracker-pro-f2d07b08189f.herokuapp.com/graphql',
});

export const client = new ApolloClient({
    link:link,
    cache: new InMemoryCache(),
});
