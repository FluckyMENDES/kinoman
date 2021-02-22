import {getRandomInteger, getArrayRandomItem, getRandomDate, createRandomLengthUniqArray} from '../src/utils/utils';

import getMockCommentsData from './comments';

const comments = getMockCommentsData(100);

const MAX_COMMENTS_PER_FILM = 10;
const FIRST_FILM_DATE = new Date(`1950-01-01`);
const END_FILM_DATE = new Date(`1990-12-31`);

const titles = [
  'Страх и ненависть в Лас-Вегасе',
  'Армагеддон',
  'Криминальное чтиво',
  'Всё или ничено',
  'Аладдин',
  'Мгла',
  'Дьявол носит Prada',
  'Девять жизней',
];

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const directors = [
  'Крис Коламбус',
  'Квентин Тарантино',
  'Эльдар Рязанов',
  'Джордж Лукас',
  'Робер Земейкис',
  'Питер Джексон',
];

const writers = [
  'Вернон Дурсль',
  'Анджелика Джонс',
  'Златоуст Локхарт',
  'Рональд Уизли',
  'Люциус Малфой',
  'Сириус Блек',
  'Годрик Гриффиндор',
  'Рита Скитер',
  'Седрик Диггори',
  'Колин Криви',
  'Аргус Филч',
];

const actors = [
  'Антон Галыгин',
  'Илья Ильин',
  'Александр Степанов',
  'Алексей Ежов',
  'Михаил Гаврилин',
  'Светлана Волчанина',
  'Татьяна Чудакова',
  'Алексей Исаев',
  'Александр Захаров',
  'Рахим Халекпур',
  'Мария Вилочкина',
  'Алёна Грачёва',
  'Татьяна Сенина',
  'Максим Кононов',
  'Кирилл Комлев',
  'Сергей Гуров',
];

const ageLimits = ['0+', '6+', '12+', '16+', '18+'];

const countries = [
  'Russia',
  'USA',
  'France',
  'England',
  'Ireland',
  'Spain',
  'Italy',
  'Sweeden',
  'Mexico',
  'Canada',
  'Germany',
  'Maroco',
  'Thailand',
  'China',
];

const genres = [
  `Comedy`,
  `Action`,
  `Drama`,
  'Thriller',
  'Horror',
  'Musical',
  'Erotic',
  'Documentry',
  'Romance',
  'Film-Noir',
  'Mystery',
  'Western',
];

const generateMockFilmsData = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    const generatedComments = createRandomLengthUniqArray(comments, MAX_COMMENTS_PER_FILM).sort(
      (a, b) => a.date - b.date
    );
    const film = {
      id: i,
      comments: generatedComments,
      props: {
        title: getArrayRandomItem(titles),
        originalTitle: `Original title of the movie`,
        rating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
        posterUrl: getArrayRandomItem(posters),
        releaseDate: getRandomDate(FIRST_FILM_DATE, END_FILM_DATE),
        director: getArrayRandomItem(directors),
        writers: createRandomLengthUniqArray(writers, 6),
        actors: createRandomLengthUniqArray(actors, 15),
        genres: createRandomLengthUniqArray(genres, 4),
        durationMinutes: getRandomInteger(30, 200),
        country: getArrayRandomItem(countries),
        ageLimit: createRandomLengthUniqArray(ageLimits, 1),
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Scripta periculis ei eam, te pro movet reformidans.
        Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri
        persius vituperata ei nec.
        `,
      },
      userProps: {
        willWatch: !!Math.round(Math.random()),
        isWatched: !!Math.round(Math.random()),
        isFavorite: !!Math.round(Math.random()),
      },
    };

    result.push(film);
  }

  return result;
};

export default generateMockFilmsData;
