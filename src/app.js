import React, {Component} from 'react';
import configureStore from './store/configureStore';

import {Provider} from 'react-redux';
import TodoView from './views/todoView';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <TodoView />
      </Provider>
    );
  }
}

