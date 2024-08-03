export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw Error('size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw Error('location must be a string');
    }
  }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw Error('size must be a number');
    }
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw Error('location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
