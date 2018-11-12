import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
export class NotesListContainer extends Component {
    render() {
        return (React.createElement(View, { style: styles.rootView },
            React.createElement(NotesList, { navigation: this.props.navigation })));
    }
}
NotesListContainer.navigationOptions = {
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
//# sourceMappingURL=NotesListContainer.js.map