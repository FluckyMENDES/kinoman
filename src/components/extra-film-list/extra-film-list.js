import FilmCard from './../film-card/film-card';

const ExtraFimlList = (title, films) => {
  let filmRenderCounter = 2;
  if (filmRenderCounter >= films.length) {
    filmRenderCounter = films.length;
  }
  const getTopFilms = (arr) => {
    const result = arr.slice().sort((a, b) => {
      return b.props.rating - a.props.rating;
    });
    return result;
  };

  const getPopularFilms = (arr) => {
    const result = arr.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    });
    return result;
  };

  const topFilms = getTopFilms(films);
  const popularFilms = getPopularFilms(films);

  const createExtraFilmsTemplate = (length) => {
    let arr = films;
    if (title === 'Top rated') {
      arr = topFilms;
    } else if (title === 'Most commented') {
      arr = popularFilms;
    }
    let result = ``;
    for (let i = 0; i < length; i++) {
      result += FilmCard(arr[i]);
    }
    return result;
  };

  return `
        <section class="films-list--extra">
            <h2 class="films-list__title">${title}</h2>

            <div class="films-list__container">
              ${createExtraFilmsTemplate(filmRenderCounter)}
            </div>
        </section>

    `;
};

export default ExtraFimlList;
