import {createElement} from './../../utils/utils';

export default class TotalFilmsCount {
  constructor(counter) {
    this._counter = counter;
    this._element = null;
  }

  getTemplate() {
    return this.createTemplate(this._counter);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  createTemplate(counter) {
    return `
          <p>${counter} movies inside</p>
      `;
  }
}
