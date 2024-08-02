import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw Error('floors must be a Number');
    }
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw Error('floors must be a Number');
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
