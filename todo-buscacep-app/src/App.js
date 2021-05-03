import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux-flow/configure-store';
import Form from './components/form';
import TodosList from './components/todos-list';
import Filter from './components/filter';
import SearchCep from './components/search-cep';

import 'milligram';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div
      style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}
    >
      <div>
        <Form />
        <TodosList />
        <Filter />
      </div>

      <div>
        <SearchCep />
      </div>
    </div>
  </Provider>
);

export default App;
