import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import createStyles from '../assets/styles/styles.js';

// creates our default base stylesheet (no overrides)
const styles = createStyles();
 
export default class BrowseCarsApp extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AppNavigator />
			</View>
		);
	}
}
