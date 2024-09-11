import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL!,  // GraphQL API endpoint
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    pokemons: {
                        keyArgs: false,  // Caches results and allows for pagination handling
                        merge(existing = [], incoming: never[]) {
                            return [...existing, ...incoming];  // Example for handling pagination
                        },
                    },
                },
            },
        },
    }),
});