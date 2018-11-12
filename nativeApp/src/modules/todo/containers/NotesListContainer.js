import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../../config/variables";
import { NotesList } from "../components/NotesList";

export class NotesListContainer extends React.Component {
  render() {
    return (
      <View style={styles.rootView}>
        <Text style={styles.header}>To do:</Text>
        <NotesList navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    padding: 10,
    fontSize: 20,
    backgroundColor: colors.mainTurquoise,
    color: "white"
  },
  rootView: {
    flex: 1
  }
});
