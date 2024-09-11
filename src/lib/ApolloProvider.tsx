'use client';

import { ApolloProvider as Provider } from '@apollo/client';
import {client} from './apolloClient';
import { ReactNode } from 'react';

const ApolloProvider = ({ children }: { children: ReactNode }) => {
    return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;