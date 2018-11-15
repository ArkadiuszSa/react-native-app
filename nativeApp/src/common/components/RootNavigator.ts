import { createStackNavigator } from 'react-navigation';

import { colors } from '../../config/variables';
import { NoteFormContainer } from '../../modules/todo/containers/NoteFormContainer';
import { NotesListsTab } from './NotesListNavigator';

export const RootNavigator = createStackNavigator({
  Tab: {
    screen: NotesListsTab,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.mainTurquoise,
        height: 0
      },
      lazy: true
    }
  },
  NoteForm: { screen: NoteFormContainer }
});
