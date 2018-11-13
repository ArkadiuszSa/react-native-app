import React, { Component } from 'react';
import { Root } from 'native-base';
import { Font } from 'expo';

import { RootNavigator } from '../components/RootNavigator';

export class AppContainer extends Component {
public state= {
  isReady: false,
}
  public componentDidMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Root>
        {this.state.isReady && <RootNavigator />}
      </Root>
    );
  }
}
