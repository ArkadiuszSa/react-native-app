import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';

import { LoginForm } from '../components/LoginForm';

type LoginFormContainerProps = NavigationScreenProps;

export class LoginFormContainer extends Component<LoginFormContainerProps> {
    render() {
        return <LoginForm />;
    }
}
