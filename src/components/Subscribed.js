import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Subscribed extends Component {

  static propTypes = {
    some: PropTypes.func,
  };

  static defaultProps = {
    some: () => {},
  };

  static contextTypes = {
    subscribe: PropTypes.func,
    unSubscribe: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.subscribe = this.subscribe.bind(this);
    this.unSubscribe = this.unSubscribe.bind(this);
  }

  subscribe(){
    this.context.subscribe('some', this.props.some);
  }

  unSubscribe() {
    this.context.unSubscribe('some');
  }

  componentWillMount() {
    console.log('Child WillMount');
    this.subscribe();
  }

  componentWillUnmount() {
    console.log('Child WillUnmount');
    this.unSubscribe();
  }

  render() {
    return this.props.children;
  }
}

export default Subscribed;