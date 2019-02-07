import { SET_ALL_MODELS, SELECT_MODEL } from './_actionTypes';

export const selectModel = model => {
	return {
		type: SELECT_MODEL,
		payload: model,
	};
};

export const setAllModels = models => {
	return {
		type: SET_ALL_MODELS,
		payload: models,
	};
};
