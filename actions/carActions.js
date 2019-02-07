import { SELECT_CAR, SET_CARS } from './_actionTypes';

export const selectCar = car => {
	return {
		type: SELECT_CAR,
		payload: car,
	};
};

export const setCars = cars => {
	return {
		type: SET_CARS,
		payload: cars,
	};
};