import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

export const client = new ApolloClient({
    link:link,
    cache: new InMemoryCache(),
});
