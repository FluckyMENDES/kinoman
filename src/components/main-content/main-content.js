import Abstract from '../abstract/abstract';

export default class MainContent extends Abstract {
  constructor(films, SHOWING_FILMS_COUNT_ON_START) {
    super();
  }

  createTemplate() {
    return `
        <section class="films"></section>
    `;
  }
}
