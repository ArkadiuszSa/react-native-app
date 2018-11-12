import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest } from '../actions/noteActions';
class NotesListComponent extends Component {
    componentDidMount() {
        this.props.fetchNotesRequest();
    }
    render() {
        return (React.createElement(View, { style: styles.rootView },
            React.createElement(NotesList, { navigation: this.props.navigation })));
    }
}
NotesListComponent.navigationOptions = {
    title: 'To do:',
    headerStyle: {
        backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};
const styles = StyleSheet.create({
    rootView: {
        flex: 1
    }
});
export const NotesListContainer = connect(null, { fetchNotesRequest })(NotesListComponent);
//# sourceMappingURL=NotesListContainer.js.map