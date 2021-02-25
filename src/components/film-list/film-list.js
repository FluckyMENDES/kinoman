import Abstract from '../abstract/abstract';

export default class FilmList extends Abstract {
  constructor(films, SHOWING_FILMS_COUNT_ON_START) {
    super();
    this._films = films;
    this._SHOWING_FILMS_COUNT_ON_START = SHOWING_FILMS_COUNT_ON_START;
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
