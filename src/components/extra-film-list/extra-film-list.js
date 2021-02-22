import {createElement} from './../../utils/utils';

export default class ExtraFimlList {
  constructor(title, films) {
    this._title = title;
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return this.createTemplate(this._title, this._films);
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

  createTemplate(title, films) {
    return `
      <section class="films-list--extra">
        <h2 class="films-list__title">${title}</h2>
        <div class="films-list__container"></div>
      </section>
    `;
  }
}
