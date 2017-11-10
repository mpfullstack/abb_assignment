import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Features from './redux/containers/features';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Features />
        </Provider>
    );
  }
}

export default App;
