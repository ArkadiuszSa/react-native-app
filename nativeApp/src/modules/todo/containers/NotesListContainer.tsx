import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';
import { fetchNotesRequest } from '../actions/noteActions';

interface ActionsProps {
  fetchNotesRequest: typeof fetchNotesRequest;
}

type ParentProps = NavigationScreenProps & ActionsProps;

class NotesListComponent extends Component<ParentProps> {
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
        <NotesList navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1
  }
});

export const NotesListContainer = connect(
  null,
  { fetchNotesRequest }
)(NotesListComponent);
