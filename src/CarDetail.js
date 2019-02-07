import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import CarServices from '../services/carsService.js';
import createStyles, { colors } from '../assets/styles/styles.js';
import DetailListItem from '../components/detailListItem';

// creates our default base stylesheet
const styles = createStyles();
const cs = new CarServices();

/**
 * Car Detail Class
 */
class CarDetailScreen extends React.Component {
    
	static navigationOptions = {
		title: 'Car Detail',
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
		headerLeft: null
	};

	/**
	 * Constructor Method
	 *
	 * @param  {Object} Props
	 * @return null
	 */
	constructor(props) {
        super(props);
    }

    /**
     * Mock Purchase Method
     * 
     * @return null
     */
    buyNow = () => {
		Alert.alert('Thank You!', 'Your credit card has been charged!', [{ text: 'OK' }], { cancelable: false });
    }

	/**
	 * Render method
	 *
	 * @return {Object}  markup   UI for screen
	 */
    render = () => {
		const car = this.props.navigation.state.params.car;

		// DEFINE MARKUP FOR UI
		return (
			<View style={styles.detailContainer}>
				<Image source={{ uri: car.carImg }} style={styles.carDetailImage} />
				<View style={styles.carDetailInfo}>
					<View style={styles.header2}>
						<Text style={styles.header2Title}>{car.name}</Text>
						<View style={styles.flexSpacer} />
						<TouchableOpacity style={styles.buttonPrimary} onPress={() => this.buyNow()}>
							<Text style={{ color: colors._50 }}>Buy Now</Text>
						</TouchableOpacity>
					</View>
					<ScrollView removeClippedSubviews={true}>
						{Object.keys(car).map(detail => (
							<DetailListItem key={detail} item={{ key: detail, value: car[detail] }} />
						))}
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default CarDetailScreen;