import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  set range(value) {
    this._range = value;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  get range() {
    return this._range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
