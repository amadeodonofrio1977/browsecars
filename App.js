import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrowseCarsApp from './src/BrowseCarsApp';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore();
export default class App extends React.Component {
	// BEGIN BOILER PLATE APP LOADING STUFF
	render() {
		return (
			<Provider store={store}>
				<BrowseCarsApp />
			</Provider>
		);
	}
}


