import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View , StyleSheet} from 'react-native';

import {routeConfig} from '../../../config/appConfig';
import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';
import { createNoteRequest } from '../actions/noteActions';
import { Button, Text } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';

interface ActionsProps {
  createNoteRequest: typeof createNoteRequest;
}

type ParentProps =  ActionsProps & NavigationScreenProps;

interface NoteFormComponentState {
  title: string
}

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: colors.mainTurquoise
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    padding: 10
  }
});

class NoteFormComponent extends Component<ParentProps, NoteFormComponentState> {
  public state = {
    title: ''
  };

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      headerStyle: {
        backgroundColor: colors.mainTurquoise
      },
      headerTintColor: '#fff',
      headerRight: (
        <Button
          onPress={navigation.getParam('handleNoteFormSubmit')}
          transparent
        ><Text style={styles.saveButtonText}>Save</Text></Button>
      )
    };
  }

  public componentDidMount(): void {
    this.props.navigation.setParams({ handleNoteFormSubmit: this._handleNoteFormSubmit });
  }

  render() {
    return (
      <View>
        <NoteForm noteValue={this.state.title} handleNoteFormChange={this.handleNoteFormChange}/>
      </View>
    );
  }

  private handleNoteFormChange = (title: string) => {
    this.setState({title: title});
  }

  private _handleNoteFormSubmit = () => {
    this.props.createNoteRequest({
      id: -1,
      title: this.state.title,
      isDone: false,
      date: ''
    });

    this.props.navigation.navigate({ routeName: routeConfig.notesToDoList });
  }
}

export const NoteFormContainer = connect(
  null,
  { createNoteRequest }
)(NoteFormComponent);
