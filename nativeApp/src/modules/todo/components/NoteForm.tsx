import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Textarea, Item } from 'native-base';

interface ParentProps {
  noteValue: string;
  handleNoteFormChange: (text: string) => void
}

type NoteFormProps= ParentProps;

export class NoteForm extends Component<NoteFormProps> {
  render() {
    return (
      <View>
        <Form>
          <Item>
            <Textarea
              style={styles.textarea}
              placeholder='Start typing'
              rowSpan={5}
              value={this.props.noteValue}
              onChangeText={this.props.handleNoteFormChange}
            />
          </Item>
        </Form>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  textarea: {
    marginTop: 20
  }
});
