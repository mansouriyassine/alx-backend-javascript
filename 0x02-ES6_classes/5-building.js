class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    const className = this.constructor.name;
    throw new Error(`${className} must override evacuationWarningMessage`);
  }
}

export default Building;