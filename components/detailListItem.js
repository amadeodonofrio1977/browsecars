import React from 'react';
import { View, Text } from 'react-native';
import createStyles from '../assets/styles/styles.js';

// creates our default base stylesheet
const styles = createStyles();

export default (DetailListItem = props => {
	let item = props.item;
	if (
		typeof item.value === 'object' ||
		['id', 'carImg', 'dealer_id', 'updatedAt', 'createdAt'].indexOf(item.key) > -1
	) {
		// If any of hte above conditions are true
		// we don't want to show this item
		// leave now
		return null;
	}
	return (
		<View style={styles.carDetailItem}>
			<View style={styles.carDetailName}>
				<Text>{item.key}</Text>
			</View>
			<View style={styles.carDetailValue}>
				<Text style={styles.bold}>{item.value}</Text>
			</View>
		</View>
	);
});
