import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { AppState } from '../../../appState';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest } from '../actions/noteActions';
import { getNotes } from '../selectors/todoSelectors';
import { Note } from '../models/todoModel';

interface ActionsProps {
  fetchNotesRequest: typeof fetchNotesRequest;
}

interface PropsFromState {
  notes: Note[];
}

type NotesListContainerProps = PropsFromState &
  NavigationScreenProps &
  ActionsProps;

class NotesListComponent extends Component<NotesListContainerProps> {
  static navigationOptions = {
    title: 'To do:',
    headerStyle: {
      backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  public componentDidMount(): void {
    this.props.fetchNotesRequest();
  }

  public render() {
    return (
      <View style={styles.rootView}>
        <NotesList navigation={this.props.navigation} notes={this.props.notes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

const mapStateToProps = (state: AppState) => ({
  notes: getNotes(state)
});

export const NotesListContainer = connect(
  mapStateToProps,
  { fetchNotesRequest }
)(NotesListComponent);
