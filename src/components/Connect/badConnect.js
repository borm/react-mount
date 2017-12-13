import React from 'react';
import Connect from 'components/Connect';

const badConnect = Composed => {
  return class ConnectWithoutFix extends Connect {
    render() {
      return <Composed {...this.props} />;
    }
  }
};

export default () => target => badConnect(target);