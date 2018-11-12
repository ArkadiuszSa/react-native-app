import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import { AppContainer } from './common/containers/AppContainer';
export const Root = () => (React.createElement(Provider, { store: store },
    React.createElement(AppContainer, null)));
//# sourceMappingURL=Root.js.map