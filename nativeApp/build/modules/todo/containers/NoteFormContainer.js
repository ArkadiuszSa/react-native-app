import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';
import { createNoteRequest } from '../actions/noteActions';
class NoteFormComponent extends Component {
    componentDidMount() {
        const note = {
            id: -1,
            date: '2018',
            text: 'Kupić mleko',
            isDone: false
        };
        this.props.createNoteRequest(note);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(NoteForm, null)));
    }
}
NoteFormComponent.navigationOptions = {
    headerStyle: {
        backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff'
};
export const NoteFormContainer = connect(null, { createNoteRequest })(NoteFormComponent);
//# sourceMappingURL=NoteFormContainer.js.map