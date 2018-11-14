import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Textarea, Item } from 'native-base';
export class NoteForm extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(Form, null,
                React.createElement(Item, null,
                    React.createElement(Textarea, { style: styles.textarea, placeholder: 'Start typing', rowSpan: 5 })))));
    }
}
const styles = StyleSheet.create({
    textarea: {
        marginTop: 20
    }
});
//# sourceMappingURL=NoteForm.js.map