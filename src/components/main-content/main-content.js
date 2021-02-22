import {createElement} from './../../utils/utils';

export default class MainContent {
  constructor(films, SHOWING_FILMS_COUNT_ON_START) {
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

  removeElement() {
    this._element = null;
  }

  createTemplate() {
    return `
        <section class="films"></section>
    `;
  }
}
