import FilmList from './../film-list/film-list';
import ExtraFilmList from './../extra-film-list/extra-film-list';
import {createElement} from './../../utils/utils';

export default class MainContent {
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

  createTemplate({films, SHOWING_FILMS_COUNT_ON_START}) {
    // const filmListComponent = new FilmList(films, SHOWING_FILMS_COUNT_ON_START).getElement();

    // const createfilmListsTemplate = (films) => {
    //   if (films.length < 1) {
    //     return '«There are no movies in our database»';
    //   }
    //   return `
    //     ${filmListComponent}

    //   `;
    // };

    return `
      <section class="films">
          ${new FilmList(films, SHOWING_FILMS_COUNT_ON_START).getTemplate()}
          ${new ExtraFilmList('Top rated', films).getTemplate()}
          ${new ExtraFilmList('Most commented', films).getTemplate()}
      </section>
      `;
  }
}
