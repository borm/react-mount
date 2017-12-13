import React, { Component } from 'react';

import Connect from 'components/Connect';
import badConnect from 'components/Connect/badConnect';
import goodConnect from 'components/Connect/goodConnect';

import Subscribed from 'components/Subscribed';
import Children from 'components/Children';

@badConnect()
class Bad extends Component {
  render() {
    return this.props.children;
  }
}

@goodConnect()
class Good extends Component {
  render() {
    return this.props.children;
  }
}

class Parent extends Connect {
  render() {
    return this.props.children;
  }
}

class App extends Component {

  render() {
    return (
      <div>
        {/*<Bad>
          <Subscribed>
            <Children>
              Bad connect show error when component try remount
            </Children>
          </Subscribed>
        </Bad>*/}

        <br />

        <Good>
          <Subscribed>
            <Children>
              Good connect worked fine
            </Children>
          </Subscribed>
        </Good>

        <br />

        <Parent>
          <Subscribed>
            <Children>
              Normal Parent without any hoc worked fine also
            </Children>
          </Subscribed>
        </Parent>
      </div>
    );
  }
}

export default App;