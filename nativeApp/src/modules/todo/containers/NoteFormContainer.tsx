import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';
import { createNoteRequest } from '../actions/noteActions';
import { Note } from '../models/todoModel';

interface ActionsProps {
  createNoteRequest: typeof createNoteRequest;
}

type ParentProps =  ActionsProps;

 class NoteFormComponent extends Component<ParentProps> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff'
  };

  public componentDidMount(): void {
    const note: Note = {
      id: -1,
      date: '2018',
      text: 'Kupić mleko',
      isDone: false
    };
    this.props.createNoteRequest(note);
  }

  render() {
    return (
      <View>
        <NoteForm />
      </View>
    );
  }
}

export const NoteFormContainer = connect(
  null,
  { createNoteRequest }
)(NoteFormComponent);
