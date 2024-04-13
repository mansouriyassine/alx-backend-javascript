class Building {
  constructor(sqft) {
      if (new.target === Building) {
          throw new TypeError("Cannot construct Building instances directly");
      }
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
          throw new Error("Class extending Building must override evacuationWarningMessage");
      }
      this._sqft = sqft;
  }

  get sqft() {
      return this._sqft;
  }

  evacuationWarningMessage() {
      throw new Error('Method "evacuationWarningMessage" must be implemented');
  }
}

export default Building;