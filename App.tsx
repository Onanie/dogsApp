import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './redux/reducers/Index';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './Helpers/Navigation';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Navigation />
    </Provider>
  );
}
