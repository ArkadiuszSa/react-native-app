import React, { Component } from 'react';
import { View,  FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';

import { colors } from '../../../config/variables';
import { Note } from '../models/todoModel';
import { updateNoteRequest } from '../actions/noteActions';
import {NotesListElement} from './NoteListElement';

interface ParentProps {
  notes: Note[];
  updateNoteRequest: typeof updateNoteRequest;
}

type NotesListProps = NavigationScreenProps & ParentProps;

export class NotesList extends Component<NotesListProps> {
  renderItem = ({ item }: any) => (
    < NotesListElement note={item} updateNoteRequest={this.props.updateNoteRequest}></NotesListElement>
  )
  render() {
    return (
      <View style={styles.listWrapper}>
        <ScrollView>
          <FlatList
            data={this.props.notes}
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
  listWrapper: {
    minHeight:  Dimensions.get('window').height - 80
  },
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
