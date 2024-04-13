class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
<<<<<<< HEAD
      throw new Error('Abstract classes cannot be instantiated directly.');
=======
      throw new Error('Class extending Building must override evacuationWarningMessage');
>>>>>>> 9bc89a9e2e635aae02d53b282d60ddac48877489
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

<<<<<<< HEAD
class ResidentialBuilding extends Building {
  constructor(sqft, residents) {
    super(sqft);
    this._residents = residents;
  }

  get residents() {
    return this._residents;
  }

  evacuationWarningMessage() {
    return `Attention! Please evacuate the residential building. Total residents: ${this._residents}`;
  }
}

export { Building, ResidentialBuilding };
=======
export default Building;
>>>>>>> 9bc89a9e2e635aae02d53b282d60ddac48877489
