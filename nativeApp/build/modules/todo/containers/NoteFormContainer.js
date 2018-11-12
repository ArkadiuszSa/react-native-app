import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';
export class NoteFormContainer extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(NoteForm, null)));
    }
}
NoteFormContainer.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff'
};
//# sourceMappingURL=NoteFormContainer.js.map