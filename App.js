
import React from 'react';
import { Text } from 'react-native-paper';
import TodoList from './src/Screens/TodoList';
import { Provider } from 'react-redux';
import {persistor} from './Redux/store'
import {store} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <TodoList />
      </PersistGate>
    </Provider>
  )
}


export default App;