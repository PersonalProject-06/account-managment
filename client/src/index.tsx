import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient , InMemoryCache , ApolloProvider} from "@apollo/client"
import App from './component/App';
import reportWebVitals from './reportWebVitals';
const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache : new InMemoryCache()
})
ReactDOM.render(
  <React.StrictMode>
 <ApolloProvider client={client}>
    <App />
    </ApolloProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
