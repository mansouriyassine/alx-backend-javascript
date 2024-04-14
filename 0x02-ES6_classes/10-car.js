class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(Object.getPrototypeOf(this));

    const ownProps = Object.getOwnPropertyNames(this);
    for (const prop of ownProps) {
      if (prop.startsWith('_')) {
        clone[prop] = this[prop];
      }
    }

    return clone;
  }
}

export default Car;