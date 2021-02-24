import {createElement} from './../../utils/utils';

export default class NoFilms {
  constructor() {
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
      <section class="films-list">
        <h2 class="films-list__title">There are no movies in our database</h2>
      </section>
    `;
  }
}
