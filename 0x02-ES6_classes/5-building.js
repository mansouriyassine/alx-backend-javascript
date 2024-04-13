export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class Building');
    }

    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Must override evacuationWarningMessage');
  }
<<<<<<< HEAD
}
=======
  /* eslint-enable class-methods-use-this */
}
>>>>>>> f159c5b2718e2bfca4e3ed77343cac70e6711058
