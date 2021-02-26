import Abstract from '../abstract/abstract';

export default class ShowMoreButton extends Abstract {
  constructor() {
    super();
  }

  createTemplate() {
    return `
          <button class="films-list__show-more">Show more</button>
    `;
  }
}
