import { SET_FETCHING } from './_actionTypes';

export const setFetching = isFetching => {
	return {
        type: SET_FETCHING,
		payload: isFetching,
	};
};