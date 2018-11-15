import { NavigationActions } from 'react-navigation';

let _navigator: any; // I don't know other way, this is from doc.

export function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

export function navigate(routeName: string, params: any) {
  _navigator.dispatch(
    NavigationActions.navigate({
        routeName,
      params
    })
  );
}