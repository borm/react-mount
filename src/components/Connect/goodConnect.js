import React, { Component, cloneElement } from 'react';
import Connect from 'components/Connect';

const goodConnect = Composed => {
  class ConnectWithFix extends Connect {
    render() {
      return cloneElement(this.props.children, this.props);
    }
  }

  return class extends Component {
    render() {
      return (
        <ConnectWithFix {...this.props}>
          <Composed {...this.props} />
        </ConnectWithFix>
      )
    }
  };
};

export default () => target => goodConnect(target);