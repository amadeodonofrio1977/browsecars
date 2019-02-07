import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import CarServices from '../services/carsService.js';
import createStyles, { colors } from '../assets/styles/styles.js';
import RNPickerSelect from 'react-native-picker-select';
import CarListItem from '../components/carListItem';
import { selectMake } from '../actions/makeActions';
import { selectModel } from '../actions/modelActions';
import { selectYear } from '../actions/yearActions';
import { selectCar } from '../actions/carActions';
import { setAllMakes } from '../actions/makeActions';
import { setAllModels } from '../actions/modelActions';
import { setAllYears } from '../actions/yearActions';
import { setCars } from '../actions/carActions';
import { setFetching } from '../actions/spinnerActions';

// creates our default base stylesheet
const styles = createStyles();
const cs = new CarServices();

class FilterCarsScreen extends React.Component {
	static navigationOptions = {
		title: 'Browse Cars',
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
	};

	/**
	 * Constructor Method
	 *
	 * @param  {Object} Props
	 * @return null
	 */
	constructor(props) {
		super(props);
		this.getCar = this.getCar.bind(this);
	}

	/**
	 * Pre-Render Lifecycyle Event
	 * Enable spinner
	 * Fetch data
	 * @return null
	 */
	componentWillMount = () => {
		this.props.setFetching(true);

		cs.getAllMakes().then(r => {
			// TODO: ADD VALID SUCCESS/ERROR PARSING LOGIC
			if (!!this.props.allMakes && !this.props.allMakes.length) {
				this.props.setAllMakes(this.formatDataForRNPicker(r));
			}
		});

		cs.filterCars(null, null, null)
			.then(r => {
				this.props.setCars(r);
			})
			.done(() => {
				this.props.setFetching(false);
			});
	};

	/**
	 * Select Make Filter Event Handler
	 * Dispatches actions
	 * Filters Car list
	 * @param {string}	make 	Make to filter cars list
	 * @return null
	 */
	selectMakeHandler = make => {
		if (make === 'null') {
			return;
		}
		this.props.setFetching(true);
		this.props.setCars([]);
		this.props.selectMake(make);
		this.props.selectModel(null);
		this.props.selectYear(null);
		this.props.selectCar(null);
		this.getModels(make);
		cs.filterCars(make, null, null).then(r => {
			this.props.setCars(r);
			this.props.setFetching(false);
		});
	};

	/**
	 * Select Model Filter Event Handler
	 * Dispatches actions
	 * Filters Car list
	 * @param {string}	model 	Model to filter cars list
	 * @return null
	 */
	selectModelHandler = model => {
		if (model === 'null') {
			return;
		}
		this.props.setFetching(true);
		this.props.setCars([]);
		this.props.selectModel(model);
		this.props.selectYear(null);
		this.props.selectCar(null);
		this.getYears(this.props.selectedMake, model);
		cs.filterCars(this.props.selectedMake, model, null)
			.then(r => {
				this.props.setCars(r);
			})
			.finally(() => {
				this.props.setFetching(false);
			});
	};

	/**
	 * Select Year Filter Event Handler
	 * Dispatches actions
	 * Filters Car list
	 * @param {string}	year 	YEar to filter cars list
	 * @return null
	 */
	selectYearHandler = year => {
		if (year === 'null') {
			return;
		}
		this.props.setFetching(true);
		this.props.selectYear(year);
		this.props.selectCar(null);
		cs.filterCars(this.props.selectedMake, this.props.selectedModel, year)
			.then(r => {
				this.props.setCars(r);
			})
			.finally(() => {
				this.props.setFetching(false);
			});
	};

	/**
	 * getModels method
	 * retrieves all relevant models
	 *
	 * @param  {String}   model  Model of Car
	 * @return null
	 */
	getModels = model => {
		if (!model) {
			return;
		}
		cs.getAllModels(model).then(r => {
			this.props.setAllModels(this.formatDataForRNPicker(r));
			this.props.setFetching(false);
		});
	};

	/**
	 * getYears method
	 * retrieves all relevant years
	 *
	 * @param  {String}   make   Make of Car
	 * @param  {String}   model  Model of Car
	 * @return null
	 */
	getYears = (make, model) => {
		if (!make || !model) {
			return;
		}
		cs.getAllYears(make, model).then(r => {
			this.props.setAllYears(this.formatDataForRNPicker(r));
			this.props.setFetching(false);
		});
	};

	/**
	 * getCar method
	 * retrieves a car details based on selectedMake, selectedModel, and selectedYear
	 *
	 * @return null
	 */
	getCar = () => {
		if (!this.props.selectedMake || !this.props.selectedModel || !this.props.selectedYear) {
			return;
		}
		cs.getCarDetail(this.props.selectedMake, this.props.selectedModel, this.props.selectedYear).then(r => {
			this.props.selectCar(r[0]);
		});
	};

	formatDataForRNPicker = data => {
		return data.map((item, index) => {
			return { label: item, value: item };
		});
	};
	/**
	 * Reset Method
	 * Clears all filters
	 * Resets cars list
	 *
	 * @return null
	 */
	clearFilter = () => {
		this.props.setFetching(true);
		this.props.selectMake(null);
		this.props.selectModel(null);
		this.props.selectYear(null);

		cs.filterCars(null, null, null)
			.then(r => {
				this.props.setCars(r);
			})
			.done(() => {
				this.props.setFetching(false);
			});
	};

	/**
	 * Render method
	 *
	 * @return {Object}  markup   	UI for Screen
	 */
	render = () => {
		let carDetailDisplayName;
		let friendScore;
		let spinner = null;
		let scrollView = null;
		let disableModelPicker = true;
		let disableYearPicker = true;

		// If props.allMakes is not yet updated
		// let's bomb out early
		if (!!this.props.allMakes && !this.props.allMakes.length) {
			return null;
		}

		if (!!this.props.selectedMake) {
			disableModelPicker = false;
		}

		if (!!this.props.selectedModel) {
			disableYearPicker = false;
		}

		if (this.props.isFetching) {
			spinner = (
				<View style={styles.spinner}>
					<ActivityIndicator size="large" color="#00ff00" />
				</View>
			);
		}

		if (!this.props.isFetching && this.props.filteredCars.length) {
			scrollView = (
				<View>
					<View style={styles.header2}>
						<Text style={styles.header2Title}>
							Viewing {this.props.filteredCars.length}{' '}
							{this.props.filteredCars.length === 1 ? 'Car' : 'Cars'}
						</Text>
					</View>
					<ScrollView removeClippedSubviews={true}>
						{this.props.filteredCars.map((car, index) => (
							<CarListItem navigation={this.props.navigation} car={car} key={car.id} />
						))}
					</ScrollView>
				</View>
			);
		}

		// DEFINE MARKUP FOR UI
		return (
			<View>
				<View style={styles.header2}>
					<View>
						<Text style={styles.header2Title}>Filter Cars</Text>
					</View>
					<View style={styles.flexSpacer} />
					<TouchableOpacity style={styles.buttonPrimary} onPress={() => this.clearFilter()}>
						<Text style={{ color: colors._50 }}>Clear Filter</Text>
					</TouchableOpacity>
				</View>

				<RNPickerSelect
					style={styles.picker}
					placeholder={{
						label: 'Filter make...',
						value: 'null',
						color: colors._100,
					}}
					items={this.props.allMakes}
					value={this.props.selectedMake}
					onValueChange={value => this.selectMakeHandler(value)}
				/>

				<RNPickerSelect
					style={styles.picker}
					placeholder={{
						label: 'Filter model...',
						value: 'null',
						color: colors._100,
					}}
					items={this.props.allModels}
					value={this.props.selectedModel}
					onValueChange={value => this.selectModelHandler(value)}
					disabled={disableModelPicker}
				/>

				<RNPickerSelect
					style={styles.picker}
					placeholder={{
						label: 'Filter year...',
						value: 'null',
						color: colors._100,
					}}
					items={this.props.allYears}
					value={this.props.selectedYear}
					onValueChange={value => this.selectYearHandler(value)}
					disabled={disableYearPicker}
				/>
				{spinner}
				{scrollView}
			</View>
		);
	};
}

const mapStateToProps = state => {
	return {
		selectedMake: state.selectedMake.selectedMake,
		selectedModel: state.selectedModel.selectedModel,
		selectedYear: state.selectedYear.selectedYear,
		selectedCar: state.selectedCar,
		allMakes: state.allMakes.allMakes,
		allModels: state.allModels.allModels,
		allYears: state.allYears.allYears,
		filteredCars: state.carReducer.filteredCars,
		isFetching: state.spinnerReducer.isFetching,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setAllMakes: makes => {
			dispatch(setAllMakes(makes));
		},
		setAllModels: models => {
			dispatch(setAllModels(models));
		},
		setAllYears: years => {
			dispatch(setAllYears(years));
		},
		selectMake: make => {
			dispatch(selectMake(make));
		},
		selectModel: model => {
			dispatch(selectModel(model));
		},
		selectYear: year => {
			dispatch(selectYear(year));
		},
		selectCar: car => {
			dispatch(selectCar(car));
		},
		setCars: cars => {
			dispatch(setCars(cars));
		},
		setFetching: isFetching => {
			dispatch(setFetching(isFetching));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterCarsScreen);
