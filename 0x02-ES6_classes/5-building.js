export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    return 'This is a building, no evacuation necessary.';
  }
  /* eslint-enable class-methods-use-this */
}
