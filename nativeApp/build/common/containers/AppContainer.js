import React, { Component } from 'react';
import { Root } from 'native-base';
import { RootNavigator } from '../components/RootNavigator';
export class AppContainer extends Component {
    render() {
        return (React.createElement(Root, null,
            React.createElement(RootNavigator, null)));
    }
}
//# sourceMappingURL=AppContainer.js.map