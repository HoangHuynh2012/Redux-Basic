import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '~redux/store';
import ToDoList from '~component/ToDoList';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDoList />
      </PersistGate>
    </Provider>
  );
};

export default App;
