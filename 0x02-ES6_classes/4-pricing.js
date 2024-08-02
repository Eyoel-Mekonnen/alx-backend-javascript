import Currency from './3-currency';

export default class Building {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw Error('amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw Error('currency must be class Currency');
    }
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw Error('amount must be a number');
    }
  }

  set currency(value) {
    if (value instanceof Currency === 'True') {
      this._currency = value;
    } else {
      throw Error('currency must be class Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
