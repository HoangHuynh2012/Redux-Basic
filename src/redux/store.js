import {createStore} from 'redux';
import {userReducer} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
