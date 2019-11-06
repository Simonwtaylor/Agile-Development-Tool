import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { getCurrentUser } from './firebase/firebase.utils';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
});

const cache = new InMemoryCache();

const authLink = setContext(async (_, { headers }) => {

  const userData: any = await getCurrentUser();

  console.log(userData);

  // get the authentication token from local storage if it exists
  let token = userData.ma;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink), 
    cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
