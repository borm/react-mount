import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Connect extends Component {

  static childContextTypes = {
    some: PropTypes.func,
    subscribe: PropTypes.func,
    unSubscribe: PropTypes.func,
  };

  getChildContext() {
    return {
      some: () => {
        console.log(1);
        this.subscriptions.some();
      },
      subscribe: this.subscribe,
      unSubscribe: this.unSubscribe,
    }
  }

  constructor(props, context) {
    super(props, context);
    this.subscriptions = {};
    this.subscribe = this.subscribe.bind(this);
    this.unSubscribe = this.unSubscribe.bind(this);
  }

  subscribe(name, callback){
    this.subscriptions[name] = callback;
  }

  unSubscribe(name) {
    this.subscriptions[name] = undefined;
  }

  render() {
    return null;
  }
}

export default Connect;