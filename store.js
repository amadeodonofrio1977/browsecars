import { createStore, combineReducers  } from 'redux';
import makeReducer from './reducers/makeReducer';
import modelReducer from './reducers/modelReducer';
import yearReducer from './reducers/yearReducer';
import carReducer from './reducers/carReducer';
import spinnerReducer from './reducers/spinnerReducer';

const appReducer = combineReducers({
    selectedMake: makeReducer,
    selectedModel: modelReducer,
    selectedYear: yearReducer,
    selectedCar: carReducer,
    allMakes: makeReducer,
    allModels: modelReducer,
    allYears: yearReducer,
    carReducer: carReducer,
    spinnerReducer: spinnerReducer
});

const configureStore = () => {
    return createStore(appReducer);
}

export default configureStore;