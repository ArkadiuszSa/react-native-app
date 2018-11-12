import { createStackNavigator } from 'react-navigation';
import { NotesListContainer } from '../../modules/todo/containers/NotesListContainer';
import { NoteFormContainer } from '../../modules/todo/containers/NoteFormContainer';
export const RootNavigator = createStackNavigator({
    NotesList: { screen: NotesListContainer },
    NoteForm: { screen: NoteFormContainer }
}, {
    initialRouteName: 'NotesList'
});
//# sourceMappingURL=RootNavigator.js.map