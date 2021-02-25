import Abstract from '../abstract/abstract';

export default class NoFilms extends Abstract {
  constructor() {
    super();
  }

  createTemplate() {
    return `
      <section class="films-list">
        <h2 class="films-list__title">There are no movies in our database</h2>
      </section>
    `;
  }
}
