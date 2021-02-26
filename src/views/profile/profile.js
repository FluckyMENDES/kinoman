import Abstract from '../abstract/abstract';

export default class Profile extends Abstract {
  constructor() {
    super();
    // this._element = null;
  }

  createTemplate() {
    return `
      <section class="header__profile profile">
          <p class="profile__rating">Movie Buff</p>
          <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>
    `;
  }
}
