import { SELECT_YEAR, SET_ALL_YEARS } from '../actions/_actionTypes';

const initialState = {
    selectedYear: null,
    allYears: []
};

const yearReducer = (state = initialState, action) => {
    switch (action.type) {
		case SELECT_YEAR:
			return {
				...state,
				selectedYear: (state.selectedYear = action.payload),
			};
		case SET_ALL_YEARS:
			return {
				...state,
				allYears: (state.allYears = action.payload),
			};
		default:
			return state;
	}
}

export default yearReducer;