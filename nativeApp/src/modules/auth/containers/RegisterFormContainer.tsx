import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import { AppState } from '../../../appState';
import { registerRequest } from '../../auth/actions/authActions';
import { RegisterForm } from '../components/RegisterForm';

interface ActionsProps {
    registerRequest: typeof registerRequest;
}

type RegisterFormContainerProps = NavigationScreenProps & ActionsProps;

export class RegisterFormComponent extends Component<RegisterFormContainerProps> {
    render() {
        return <RegisterForm registerRequest={this.props.registerRequest} />;
    }
}

export const RegisterFormContainer = connect(
    null,
    { registerRequest },
)(RegisterFormComponent);
