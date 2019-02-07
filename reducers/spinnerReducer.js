import { SET_FETCHING } from '../actions/_actionTypes';

const initialSpinnerState = {
	isFetching: false,
};

export default (spinnerReducer = (state = initialSpinnerState, action) => {
	switch (action.type) {
        case SET_FETCHING:
			return {
				...state,
				isFetching: (state.isFetching = action.payload),
			};
		default:
			return state;
	}
});
