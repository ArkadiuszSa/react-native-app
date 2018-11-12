import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Icon, CheckBox } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';

import { notesMock } from '../../../config/mocks/mockNotes';
import { colors } from '../../../config/variables';

type ParentProps = NavigationScreenProps;

export class NotesList extends Component<ParentProps> {
  renderItem = ({ item }: any) => (
    <View style={styles.listItem}>
      <CheckBox color={colors.mainTurquoise} style={styles.checkbox} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
  render() {
    return (
      <View>
        <ScrollView>
          <FlatList
            data={notesMock}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </ScrollView>
        <Icon
          style={styles.addIcon}
          name='add-circle'
          onPress={() =>
            this.props.navigation.navigate({ routeName: 'NoteForm' })
          }
        />
      </View>
    );
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
