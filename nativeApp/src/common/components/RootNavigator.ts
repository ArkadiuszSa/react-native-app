import { createStackNavigator } from 'react-navigation';

import { colors } from '../../config/variables';
import { NoteFormContainer } from '../../modules/todo/containers/NoteFormContainer';
import { NotesListsTab } from './NotesListNavigator';
import { LoginPanelContainer } from '../../modules/auth/containers/LoginPanelContainer';
import { LoginFormContainer } from '../../modules/auth/containers/LoginFormContainer';
import { RegisterFormContainer } from '../../modules/auth/containers/RegisterFormContainer';

export const RootNavigator = createStackNavigator({
    LoginPanel: {
        screen: LoginPanelContainer,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.mainTurquoise,
                height: 0,
            },
        },
    },
    LoginForm: {
        screen: LoginFormContainer,
        navigationOptions: {
            headerLeft: null,
            headerStyle: {
                backgroundColor: colors.mainTurquoise,
                height: 0,
            },
        },
    },
    RegisterForm: {
        screen: RegisterFormContainer,
        navigationOptions: {
            headerLeft: null,
            headerStyle: {
                backgroundColor: colors.mainTurquoise,
                height: 0,
            },
        },
    },
    Tab: {
        screen: NotesListsTab,
        navigationOptions: {
            headerLeft: null,
            headerStyle: {
                backgroundColor: colors.mainTurquoise,
                height: 0,
            },
            lazy: true,
        },
    },
    NoteFormCreate: { screen: NoteFormContainer },
    NoteFormUpdate: { screen: NoteFormContainer },
});
