import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
