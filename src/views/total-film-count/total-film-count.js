import Abstract from '../abstract/abstract';

export default class TotalFilmsCount extends Abstract {
  constructor(counter) {
    super();
    this._counter = counter;
  }

  createTemplate(counter = this._counter) {
    return `
      <p>${counter} movies inside</p>
    `;
  }
}
