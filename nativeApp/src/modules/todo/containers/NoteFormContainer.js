import React from "react";
import { View } from "react-native";

import { NoteForm } from "../components/NoteForm";

export class NoteFormContainer extends React.Component {
  render() {
    return (
      <View>
        <NoteForm navigation={this.props.navigation} />
      </View>
    );
  }
}
