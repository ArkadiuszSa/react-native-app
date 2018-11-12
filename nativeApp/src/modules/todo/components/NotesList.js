import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  CheckBox,
  StyleSheet
} from "react-native";
import { Icon } from "native-base";

import { notesMock } from "../../../config/mocks/mockNotes";
import { colors } from "../../../config/variables";

export class NotesList extends Component {
  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <CheckBox />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
  render() {
    console.log(this.props);
    return (
      <View>
        <ScrollView>
          <FlatList
            data={notesMock}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={this.renderItem}
          />
        </ScrollView>
        <Icon
          style={styles.addIcon}
          name="add-circle"
          onPress={() =>
            this.props.navigation.navigate({ routeName: "NoteForm" })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    color: colors.mainTurquoise
  },
  textWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontSize: 17
  },
  addIcon: {
    position: "absolute",
    fontSize: 80,
    right: 10,
    bottom: 90,
    color: colors.mainTurquoise
  }
});
