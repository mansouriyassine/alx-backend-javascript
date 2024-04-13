class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract classes cannot be instantiated directly.');
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