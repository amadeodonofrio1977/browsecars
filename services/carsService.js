/**
 * Mock Data service
 * data from cars.json
 *
 * With a proper API we'd use fetch method below
 */

import carsData from '../data/cars.json';

export default class CarServices {
	/**
	 * getCarsData
	 * Method to retrieve all available cars
	 * @return {Promise} 	Array of all cars
	 */
	getAllCarsData = () => {
		return new Promise(resolve => {
			// Force timeout to mock API response time
			setTimeout(() => resolve(carsData), 500);
		});
	};

	/**
	 * getAllMakes
	 * Method to retrieve all available makes
	 * Leverages getCarsData
	 * @return {Promise} 	Array of all makes
	 */
	getAllMakes = () => {
		return new Promise(resolve => {
			resolve(this.getAllCarsData());
		}).then(cars => {
			let makes = [];
			for (const car of cars) {
				if (car.make !== '' && makes.indexOf(car.make) === -1) {
					makes.push(car.make);
				}
			}
			return makes.sort();
		});
	};

	/**
	 * getAllModels
	 * Method to retrieve all available models
	 * for a given make
	 * Leverages getCarsData
	 * @param   {string}    make    Make Filter String
	 * @return  {Promise} 	Array of all models
	 */
	getAllModels = make => {
		if (!make) {
			return [];
		}

		return new Promise(resolve => {
			resolve(this.getAllCarsData());
		}).then(cars => {
			const models = [];
			for (const car of cars) {
				if (car.make === make && models.indexOf(car.model) === -1) {
					models.push(car.model);
				}
			}
			return models.sort();
		});
	};

	/**
	 * getAllYears
	 * Method to retrieve all available years
	 * for a given make and model
	 * Leverages getCarsData
	 * @param   {string}    make    Make Filter String
	 * @param   {string}    model   Model Filter String
	 * @return  {Promise} 	        Array of all makes
	 */
	getAllYears = (make, model) => {
		if (!make || !model) {
			return [];
		}

		return new Promise(resolve => {
			resolve(this.getAllCarsData());
		}).then(cars => {
			let years = [];
			for (const car of cars) {
				if (car.make === make && car.model === model && years.indexOf(car.year) === -1) {
					years.push(car.year);
				}
			}
			return years.sort();
		});
	};

	/**
	 * getCarDetail
	 * Method to retrieve a car
	 * by make, model, and year
	 * Leverages getCarsData
	 * @param   {string}    make    Make Filter String
	 * @param   {string}    model   Model Filter String
	 * @param   {string}    year    Year Filter String
	 * @return  {Promise} 	        Car Object
	 */
	getCarDetail = (make, model, year) => {
		if (!make || !model || !year) {
			return [];
		}
		return new Promise(resolve => {
			// MOCK API RESPONSE TIME TO FORCE SPINNER IN UI
			setTimeout(() => {
				resolve(this.getAllCarsData());
			}, 500);
		}).then(cars => {
			let carDetail = [];
			for (const car of cars) {
				if (car.make === make && car.model === model && car.year === year) {
					car.displayName = car.name;
					carDetail.push(car);
				}
			}
			return carDetail;
		});
	};

	/**
	 * filterCars
	 * Method to filter cars list
	 * by make, model, and year
	 * Leverages getCarsData
	 * Excludes entries with no 'name'
	 * @param   {string}    make    Make Filter String
	 * @param   {string}    model   Model Filter String
	 * @param   {string}    year    Year Filter String
	 * @return  {Promise} 	        Array of Cars matching filter criteria
	 */
	filterCars = (make, model, year) => {
		return new Promise(resolve => {
			resolve(this.getAllCarsData());
		}).then(cars => {
			const filteredCars = cars.filter(car => {
				if (make && car.make !== make) {
					return false;
				}
				if (model && car.model !== model) {
					return false;
				}
				if (year && car.year !== year) {
					return false;
				}
				if (car.name.trim() === '0') {
					return false;
				}
				return true;
			});
			return filteredCars.sort();
		});
	};
}
