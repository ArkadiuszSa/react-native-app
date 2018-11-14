import { AppState } from '../../appState';
import { NavigationScreenProps } from 'react-navigation';

export const navigationState = (_: AppState, props: NavigationScreenProps) => props.navigation.state;
export const getRouteName = (state: AppState, props: NavigationScreenProps) => navigationState(state, props).routeName;