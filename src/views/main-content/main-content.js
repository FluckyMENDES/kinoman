import Abstract from '../abstract/abstract';

export default class MainContent extends Abstract {
  constructor() {
    super();
  }

  createTemplate() {
    return `
        <section class="films"></section>
    `;
  }
}
