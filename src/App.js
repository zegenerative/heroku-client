import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ListContainer from './components/ListContainer'
import css from'./App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
  }
}

export default App