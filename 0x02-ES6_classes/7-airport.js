export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw Error('name must be a string');
    }
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw Error('code must be a string');
    }
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw Error('name must be a string');
    }
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw Error('code must be a string');
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
