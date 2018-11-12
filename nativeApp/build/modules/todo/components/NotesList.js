import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Icon, CheckBox } from 'native-base';
import { notesMock } from '../../../config/mocks/mockNotes';
import { colors } from '../../../config/variables';
export class NotesList extends Component {
    constructor() {
        super(...arguments);
        this.renderItem = ({ item }) => (React.createElement(View, { style: styles.listItem },
            React.createElement(CheckBox, { color: colors.mainTurquoise, style: styles.checkbox }),
            React.createElement(Text, { style: styles.text }, item.text)));
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(ScrollView, null,
                React.createElement(FlatList, { data: notesMock, keyExtractor: item => String(item.id), renderItem: this.renderItem })),
            React.createElement(Icon, { style: styles.addIcon, name: 'add-circle', onPress: () => this.props.navigation.navigate({ routeName: 'NoteForm' }) })));
    }
}
const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: colors.mainTurquoise
    },
    checkbox: {
        marginRight: 20,
        color: colors.mainTurquoise
    },
    text: {
        fontSize: 17
    },
    addIcon: {
        position: 'absolute',
        fontSize: 65,
        right: 15,
        bottom: 10,
        color: colors.mainTurquoise
    }
});
//# sourceMappingURL=NotesList.js.map