import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Textarea, Item } from 'native-base';

export class NoteForm extends Component {
  render() {
    return (
      <View>
        <Form>
          <Item>
            <Textarea
              style={styles.textarea}
              placeholder='Start typing'
              rowSpan={5}
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
