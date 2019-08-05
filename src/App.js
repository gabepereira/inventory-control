import React from 'react';
import Routes from './routes';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
});

export default App = () =>
    <ApolloProvider client={client}>
        <Routes/>
    </ApolloProvider>
;