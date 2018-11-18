import React, { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';

import { RegisterForm } from '../components/RegisterForm';

type RegisterFormContainerProps = NavigationScreenProps;

export class RegisterFormContainer extends Component<RegisterFormContainerProps> {
    render() {
        return <RegisterForm />;
    }
}
