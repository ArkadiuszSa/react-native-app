import React, { Component } from 'react';
import { Root } from 'native-base';

import { RootNavigator } from '../components/RootNavigator';

export class AppContainer extends Component {
  render() {
    return (
      <Root>
        <RootNavigator />
      </Root>
    );
  }
}
