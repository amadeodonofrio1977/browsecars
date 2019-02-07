import { SET_ALL_MAKES, SELECT_MAKE } from './_actionTypes';

export const selectMake = make => {
	return {
		type: SELECT_MAKE,
		payload: make,
	};
};

export const setAllMakes = allMakes => {
	return {
		type: SET_ALL_MAKES,
		payload: allMakes,
	};
};