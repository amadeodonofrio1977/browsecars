import { createAppContainer, createStackNavigator } from 'react-navigation';
import  FilterCarsScreen  from '../src/FilterCars';
import  CarDetail  from '../src/CarDetail';

const MainNavigator = createStackNavigator({
	FilterCars: FilterCarsScreen,
	CarDetail: CarDetail,
});
const App = createAppContainer(MainNavigator);

export default App;