import {
	SELECT_MAKE,
	SET_ALL_MAKES
} from '../actions/_actionTypes';

const initialMakeState = {
	selectedMake: null,
	allMakes: [],
};

export default (makeReducer = (state = initialMakeState, action) => {
	switch (action.type) {
		case SELECT_MAKE:
			return {
				...state,
				selectedMake: (state.selectedMake = action.payload),
			};
		case SET_ALL_MAKES:
			return {
				...state,
				allMakes: (state.allMakes = action.payload),
			};
		default:
			return state;
	}
});
