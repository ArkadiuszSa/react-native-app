import React from 'react';
import { Provider } from 'react-redux';

import { store } from './config/store';
import { AppContainer } from './common/containers/AppContainer';

export const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
