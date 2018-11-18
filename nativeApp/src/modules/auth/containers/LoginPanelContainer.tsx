import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';

import { LoginPanel } from '../components/LoginPanel';

type LoginPanelContainerProps = NavigationScreenProps;

export class LoginPanelContainer extends Component<LoginPanelContainerProps> {
    render() {
        return <LoginPanel navigation={this.props.navigation} />;
    }
}
