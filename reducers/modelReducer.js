import { SET_ALL_MODELS, SELECT_MODEL } from '../actions/_actionTypes';

const initialModelState = {
	selectedModel: '',
	allModels: [],
};

 export default modelReducer = (state = initialModelState, action) => {
	switch (action.type) {
		case SELECT_MODEL:
			return {
				...state,
				selectedModel: (state.selectedModel = action.payload),
			};
		case SET_ALL_MODELS:
			return {
				...state,
				allModels: (state.allModels = action.payload),
			};
		default:
			return state;
	}
};