import { createMaterialTopTabNavigator } from 'react-navigation';

import { colors } from '../../config/variables';
import { NotesListContainer } from '../../modules/todo/containers/NotesListContainer';

export const NotesListsTab = createMaterialTopTabNavigator(
  {

    NoteToDoForm: { screen: NotesListContainer, navigationOptions: {
      title: 'To do'
    }},

    NotesDoneList: { screen: NotesListContainer,
      navigationOptions: {
        title: 'Done'
      }}
    },
  {
    tabBarOptions: {
      style: {
        backgroundColor: colors.mainTurquoise
      }
    }
  }
);
