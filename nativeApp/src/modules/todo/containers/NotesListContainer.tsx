import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { colors } from '../../../config/variables';
import { NotesList } from '../components/NotesList';

type ParentProps = NavigationScreenProps;

export class NotesListContainer extends Component<ParentProps> {
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
  render() {
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
