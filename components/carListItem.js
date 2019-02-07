import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import createStyles from '../assets/styles/styles.js';

// creates our default base stylesheet
const styles = createStyles();

export default (CarListItem = props => {
    let car = props.car;
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('CarDetail', { car: car , navigation: props.navigation});
			}}
		>
			<View style={styles.listItem}>
				<View style={styles.carListImageContainer}>
					<Image source={{ uri: props.car.carImg }} style={styles.carListImage} />
				</View>
				<Text style={[styles.carListName, styles.bold]}>{props.car.name}</Text>
				<View style={styles.flexSpacer} />
				<Icon style={styles.carListArrow} name="angle-right" size={24} />
			</View>
		</TouchableOpacity>
	);
});
