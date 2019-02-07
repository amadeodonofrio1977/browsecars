import { SELECT_CAR, SET_CARS } from '../actions/_actionTypes';

const initialCarsState = {
	car: null,
	filteredCars: [],
};

export default (carReducer = (state = initialCarsState, action) => {
	switch (action.type) {
		case SELECT_CAR:
			return {
				...state,
				selectedCar: (state.selectedCar = action.payload),
			};
		case SET_CARS:
			return {
				...state,
				filteredCars: (state.filteredCars = action.payload),
			};
		default:
			return state;
	}
});
