import Abstract from '../abstract/abstract';

export default class ExtraFimlList extends Abstract {
  constructor(title, films) {
    super();
    this._title = title;
    this._films = films;
  }

  createTemplate(title = this._title, films = this._films) {
    return `
      <section class="films-list--extra">
        <h2 class="films-list__title">${title}</h2>
        <div class="films-list__container"></div>
      </section>
    `;
  }
}
