import {createElement} from '../../utils/utils';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Метод createTemplate не определен');
    }
    this._element = null;
  }

  getTemplate() {
    return this.createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  createTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  removeElement() {
    this._element = null;
  }
}
