import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {  CheckBox } from 'native-base';

import { colors } from '../../../config/variables';
import { Note } from '../models/todoModel';
import { updateNoteRequest } from '../actions/noteActions';

interface ParentProps {
  updateNoteRequest: typeof updateNoteRequest;
  note: Note
}

type NotesListProps = ParentProps;

export class NotesListElement extends Component<NotesListProps> {
  render() {
      const {note} = this.props;
    return (
        <View style={styles.listItem} >
        <CheckBox checked={this.props.note.isDone}
            color={colors.mainTurquoise}
            style={styles.checkbox}
            onPress={this.updateNote} />
        <Text style={note.isDone ? (styles.doneText) : (styles.text)}>{note.title}</Text>
      </View>
    );
  }

  private updateNote = (): void => {
      const {id, title, date} = this.props.note;
      const newNote = {
        id, title, date, isDone: true
      };
      this.props.updateNoteRequest(newNote);
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
  doneText: {
    fontSize: 17,
    textDecorationLine: 'line-through'

  }
});
