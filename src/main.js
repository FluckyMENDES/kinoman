import MainController from './controllers/main-controller';
import generateMockFilmsData from '../mock/films';

const FILMS_COUNT = 20;
// Генерация моковых данных
const films = generateMockFilmsData(FILMS_COUNT);

// Создание массивов просмотренных и любимых фильмов
const favoriteFilms = films.slice().filter((film) => film.userProps.isFavorite === true);
const watchedFilms = films.slice().filter((film) => film.userProps.isWatched === true);
const willWatchFilms = films.slice().filter((film) => film.userProps.willWatch === true);

const data = {
  films,
  favoriteFilms,
  watchedFilms,
  willWatchFilms,
};

export const CLASSES = {
  header: '.header',
  main: '.main',
  films: '.films',
  filmsList: '.films-list',
  filmListContainer: '.films-list__container',
  popup: '.film-details',
};

const siteMainElement = document.querySelector(CLASSES.main);

const main = new MainController(siteMainElement);
main.render(data);
