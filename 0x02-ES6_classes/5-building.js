class Building {
  constructor(sqft) {
<<<<<<< HEAD
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
=======
    if (this.constructor === Building) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }

>>>>>>> 1cda869d3fd7c646470eccc60b0084988b24fc81
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
<<<<<<< HEAD
    throw new Error('Method "evacuationWarningMessage" must be implemented');
=======
    throw new Error("Class extending Building must override evacuationWarningMessage");
>>>>>>> 1cda869d3fd7c646470eccc60b0084988b24fc81
  }
}

export default Building;
