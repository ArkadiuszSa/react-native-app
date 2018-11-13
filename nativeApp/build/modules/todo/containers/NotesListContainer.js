import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest } from '../actions/noteActions';
import { getNotes } from '../selectors/todoSelectors';
class NotesListComponent extends Component {
    componentDidMount() {
        this.props.fetchNotesRequest();
    }
    render() {
        console.log(this.props.notes);
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
const mapStateToProps = (state) => ({
    notes: getNotes(state)
});
export const NotesListContainer = connect(mapStateToProps, { fetchNotesRequest })(NotesListComponent);
//# sourceMappingURL=NotesListContainer.js.map