import {createElement} from './../../utils/utils';

export default class FilmList {
  constructor(films, SHOWING_FILMS_COUNT_ON_START) {
    this._films = films;
    this._SHOWING_FILMS_COUNT_ON_START = SHOWING_FILMS_COUNT_ON_START;
    this._element = null;
  }

  getTemplate() {
    return this.createTemplate(this._films, this._SHOWING_FILMS_COUNT_ON_START);
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
      <section class="films">

        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          <div class="films-list__container">
          </div>
        </section>

      </section>
    `;
  }
}
