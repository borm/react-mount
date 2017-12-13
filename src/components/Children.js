import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Field extends Component {

  static contextTypes = {
    some: PropTypes.func,
  };

  componentDidMount() {
    this.context.some();
    console.log('Child DidMount');
  }

  render() {
    return this.props.children;
  }

}

export default Field;