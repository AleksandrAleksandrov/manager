import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC17z7jk9xJmOGft-8rDFifDFYkdbayeLw',
      authDomain: 'manager-f4764.firebaseapp.com',
      databaseURL: 'https://manager-f4764.firebaseio.com',
      projectId: 'manager-f4764',
      storageBucket: 'manager-f4764.appspot.com',
      messagingSenderId: '310418791910'
    };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
