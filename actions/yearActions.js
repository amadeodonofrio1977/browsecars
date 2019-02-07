import { SELECT_YEAR, SET_ALL_YEARS } from './_actionTypes';

export const selectYear = year => {
	return {
		type: SELECT_YEAR,
		payload: year,
	};
};

export const setAllYears = years => {
	return {
		type: SET_ALL_YEARS,
		payload: years,
	};
};
