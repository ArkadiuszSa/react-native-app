import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Form, Textarea, Input } from "native-base";

export class NoteForm extends Component {
  render() {
    return (
      <View>
        <Text>no elo</Text>
        <Form>
          <Item>
            <Textarea placeholder="Start typing" rowSpan={5} />
          </Item>
        </Form>
      </View>
    );
  }
}
