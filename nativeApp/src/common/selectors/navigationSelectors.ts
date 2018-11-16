import { AppState } from '../../appState';
import { NavigationScreenProps } from 'react-navigation';

export const navigationState = (_: AppState, props: NavigationScreenProps) => props.navigation.state;
export const getRouteName = (_: AppState, props: NavigationScreenProps) => navigationState(_, props).routeName;
export const getRouteParams = (_: AppState, props: NavigationScreenProps) => navigationState(_, props).params;
export const getRouteId = (_: AppState, props: NavigationScreenProps) => getRouteParams(_, props).id;