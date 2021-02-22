import FilmCard from './../film-card/film-card';
import ShowMoreBtn from './../show-more-button/show-more-button';
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

  createTemplate(films, SHOWING_FILMS_COUNT_ON_START) {
    let filmRenderCounter = SHOWING_FILMS_COUNT_ON_START;
    if (SHOWING_FILMS_COUNT_ON_START >= films.length) {
      filmRenderCounter = films.length;
    }

    let result = ``;

    const createfilmCardsTemplate = (films) => {
      for (let i = 0; i < filmRenderCounter; i++) {
        result += new FilmCard(films[i]).getTemplate();
      }
      return result;
    };

    return `
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">
          ${createfilmCardsTemplate(films)}
        </div>

        ${new ShowMoreBtn().getTemplate()}
      </section>
      `;
  }
}
