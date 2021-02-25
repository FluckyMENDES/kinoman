import {getTimeFromDuration, getHumanlikeDate} from '../../utils/utils';
import Abstract from '../abstract/abstract';

export default class DetailsPopup extends Abstract {
  constructor(film) {
    super();
    this._film = film;
  }

  createTemplate({comments, props, userProps} = this._film) {
    const {
      title,
      originalTitle,
      posterUrl,
      ageLimit,
      rating,
      director,
      writers,
      actors,
      releaseDate,
      durationMinutes,
      country,
      genres,
      desc,
    } = props;

    const {isWatched, isFavorite, willWatch} = userProps;

    const createGenresTemplate = (arr) => {
      return arr
        .map((genre) => {
          return `<span class="film-details__genre">${genre}</span>`;
        })
        .join('\n');
    };

    const createCommentsTemplate = (arr) => {
      const formateDateForComment = (date) => {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month < 10 ? (month = `0${month}`) : null;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${year}/${month}/${day} ${hours}:${minutes}`;
      };
      return arr
        .map((comment) => {
          return `
            <li class="film-details__comment">
            <span class="film-details__comment-emoji">
                <img
                  src="./images/emoji/${comment.emotion}.png"
                  width="55"
                  height="55"
                  alt="${comment.emotion}">
            </span>
            <div>
                <p class="film-details__comment-text">${comment.text}</p>
                <p class="film-details__comment-info">
                <span class="film-details__comment-author">${comment.author}</span>
                <span class="film-details__comment-day">${formateDateForComment(comment.date)}</span>
                <button class="film-details__comment-delete">Delete</button>
                </p>
            </div>
            </li>
          `;
        })
        .join('\n');
    };

    const genresTemplate = createGenresTemplate(genres);

    return `
      <section class="film-details">
          <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
              <div class="film-details__close">
              <button class="film-details__close-btn" type="button">close</button>
              </div>
              <div class="film-details__info-wrap">
              <div class="film-details__poster">
                  <img
                    class="film-details__poster-img"
                    src="./images/posters/${posterUrl}"
                    alt="${title}"
                  >
                  <p class="film-details__age">${ageLimit}</p>
              </div>

              <div class="film-details__info">
                  <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                      <h3 class="film-details__title">${title}</h3>
                      <p class="film-details__title-original">
                        Original: ${originalTitle}
                      </p>
                  </div>

                  <div class="film-details__rating">
                      <p class="film-details__total-rating">${rating}</p>
                  </div>
                  </div>

                  <table class="film-details__table">
                  <tr class="film-details__row">
                      <td class="film-details__term">Director</td>
                      <td class="film-details__cell">${director}</td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Writers</td>
                      <td class="film-details__cell">${writers.join(', ')}</td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Actors</td>
                      <td class="film-details__cell">${actors.join(', ')}</td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Release Date</td>
                      <td class="film-details__cell">
                        ${getHumanlikeDate(releaseDate)}
                      </td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Runtime</td>
                      <td class="film-details__cell">
                        ${getTimeFromDuration(durationMinutes)}
                      </td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Country</td>
                      <td class="film-details__cell">${country}</td>
                  </tr>
                  <tr class="film-details__row">
                      <td class="film-details__term">Genres</td>
                      <td class="film-details__cell">
                        ${genresTemplate}
                      </td>
                  </tr>
                  </table>

                  <p class="film-details__film-description">
                  ${desc}
                  </p>
              </div>
              </div>

              <section class="film-details__controls">
              <input
                class="film-details__control-input visually-hidden"
                type="checkbox"
                id="watchlist"
                name="watchlist"
                ${willWatch ? 'checked' : ''}
              >
              <label
                class="
                  film-details__control-label
                  film-details__control-label--watchlist
                "
                for="watchlist"
              >
                Add to watchlist
              </label>

              <input
                class="film-details__control-input visually-hidden"
                type="checkbox"
                id="watched"
                name="watched"
                ${isWatched ? 'checked' : ''}
              >
              <label
                for="watched"
                class="
                  film-details__control-label
                  film-details__control-label--watched
                "
              >
                Already watched
              </label>

              <input
                class="
                  film-details__control-input
                  visually-hidden
                "
                type="checkbox"
                id="favorite"
                name="favorite"
                ${isFavorite ? 'checked' : ''}
              >
              <label
                class="
                  film-details__control-label
                  film-details__control-label--favorite
                "
                for="favorite"
              >
                Add to favorites
              </label>
              </section>
          </div>

          <div class="form-details__bottom-container">
              <section class="film-details__comments-wrap">
              <h3 class="film-details__comments-title">
                Comments
                <span class="film-details__comments-count">
                  ${comments.length}
                </span>
              </h3>

              <ul class="film-details__comments-list">
                ${createCommentsTemplate(comments)}
              </ul>

              <div class="film-details__new-comment">
                  <div for="add-emoji" class="film-details__add-emoji-label"></div>

                  <label class="film-details__comment-label">
                  <textarea
                    class="film-details__comment-input"
                    placeholder="Select reaction below and write comment here"
                    name="comment"
                  >
                  </textarea>
                  </label>

                  <div class="film-details__emoji-list">
                  <input
                    class="film-details__emoji-item visually-hidden"
                    name="comment-emoji"
                    type="radio"
                    id="emoji-smile"
                    value="smile"
                  >
                  <label class="film-details__emoji-label" for="emoji-smile">
                      <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                  </label>

                  <input
                    class="film-details__emoji-item visually-hidden"
                    name="comment-emoji"
                    type="radio"
                    id="emoji-sleeping"
                    value="sleeping"
                  >
                  <label class="film-details__emoji-label" for="emoji-sleeping">
                      <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                  </label>

                  <input
                    class="film-details__emoji-item visually-hidden"
                    name="comment-emoji"
                    type="radio"
                    id="emoji-puke"
                    value="puke"
                  >
                  <label class="film-details__emoji-label" for="emoji-puke">
                      <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                  </label>

                  <input
                    class="film-details__emoji-item visually-hidden"
                    name="comment-emoji"
                    type="radio"
                    id="emoji-angry"
                    value="angry"
                  >
                  <label class="film-details__emoji-label" for="emoji-angry">
                      <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                  </label>
                  </div>
              </div>
              </section>
          </div>
          </form>
      </section>
    `;
  }
}
