import { createMaterialTopTabNavigator } from 'react-navigation';

import { colors } from '../../config/variables';
import { NotesListContainer } from '../../modules/todo/containers/NotesListContainer';

export const NotesListsTab = createMaterialTopTabNavigator(
    {
      NotesDoneList: { screen: NotesListContainer, title: 'Done' },
      NoteNotDoneForm: { screen: NotesListContainer, title: 'To do' }
    },
    {
        tabBarOptions: {
            style: {
              backgroundColor: colors.mainTurquoise
            }
          }
    }
  );