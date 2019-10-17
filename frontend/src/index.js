import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, createClient } from 'urql';

const client = createClient({
  url: 'http://localhost:8000/graphql',
});
ReactDOM.render(<Provider value={client}>
    <App />
    </Provider>, document.getElementById('app'));