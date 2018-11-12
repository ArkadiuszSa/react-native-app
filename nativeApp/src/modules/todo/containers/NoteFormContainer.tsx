import React, { Component } from 'react';
import { View } from 'react-native';

import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';

export class NoteFormContainer extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.mainTurquoise
    },
    headerTintColor: '#fff'
  };
  render() {
    return (
      <View>
        <NoteForm />
      </View>
    );
  }
}
