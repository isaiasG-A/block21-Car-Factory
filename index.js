class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

    getDescription() {
      const {make, model, year} = this;

      return `${model} from ${make} was released in ${year}`;
    }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super( make, model, year)
    this.range = range;
  }

    getDescription() {
      const {make, model, year, range} = this;

      return `${make} from ${model} was released in ${year} and has a range of ${range}`;
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 2019, 300).getDescription();

console.log(tesla);