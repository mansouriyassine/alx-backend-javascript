class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(Object.getPrototypeOf(this));

    for (const prop in this) {
      if (this.hasOwnProperty(prop) && prop.startsWith('_')) {
        clone[prop] = this[prop];
      }
    }

    return clone;
  }
}

export default Car;