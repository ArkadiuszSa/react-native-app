import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { AppState } from '../../../appState';
import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest, updateNoteRequest } from '../actions/noteActions';
import { isDoneNotesList, getListNotes } from '../selectors/todoSelectors';
import { Note } from '../models/todoModel';

interface ActionsProps {
  fetchNotesRequest: typeof fetchNotesRequest;
  updateNoteRequest: typeof updateNoteRequest;
}

interface PropsFromState {
  notes: Note[];
}

type NotesListContainerProps = PropsFromState &
  NavigationScreenProps &
  ActionsProps;

interface NotesListContainerState {
  refreshFlag: boolean;
}

class NotesListComponent extends Component<
  NotesListContainerProps,
  NotesListContainerState
> {
  public state = {
    refreshFlag: false
  };

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
    this.props.navigation.addListener('didBlur', a => {
      this.setState(({ refreshFlag }) => ({
        refreshFlag: !refreshFlag
      }));

      this.props.fetchNotesRequest();
    });
  }

  public render() {
    return (
      <View style={styles.rootView}>
        <NotesList
          navigation={this.props.navigation}
          notes={this.props.notes}
          updateNoteRequest={this.props.updateNoteRequest}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

const mapStateToProps = (state: AppState, ownProps: NavigationScreenProps) => ({
  notes: getListNotes(state, ownProps),
  isDoneNotesList: isDoneNotesList(state, ownProps)
});

export const NotesListContainer = connect(
  mapStateToProps,
  { fetchNotesRequest, updateNoteRequest }
)(NotesListComponent);
