import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { AppState } from '../../../appState';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest } from '../actions/noteActions';
import { isDoneNotesList, getListNotes } from '../selectors/todoSelectors';
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
    headerStyle: {
      backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  public componentWillMount(): void {
    this.props.fetchNotesRequest();
  }

  public render() {
    console.log('navCont');
    console.log(this.props.navigation.state.routeName);
    console.log('navCont');

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

const mapStateToProps = (state: AppState, ownProps: NavigationScreenProps) => {
  console.log(ownProps);
  return {notes: getListNotes(state, ownProps),
  isDoneNotesList: isDoneNotesList(state, ownProps)};
};

export const NotesListContainer = connect(
  mapStateToProps,
  { fetchNotesRequest }
)(NotesListComponent);
