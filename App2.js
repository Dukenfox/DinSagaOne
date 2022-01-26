import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'mobx-react';
import { AppContainer } from './ser/common';

const rootStore = new RootStore();

export default function () {
    return (
        <AppContainer />
    )
}