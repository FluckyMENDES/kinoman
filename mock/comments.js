import {getRandomInteger, getArrayRandomItem, getRandomDate} from '../src/utils/utils';

const START_COMMENTS_DATE = new Date('2015-01-01');
const END_COMMENTS_DATE = new Date();

const authors = [
  'Papo',
  'Zwitter',
  'Shadow',
  'robinhood',
  'DAR',
  'fiaska',
  'Ebower',
  'Sunrise',
  'Ded',
  'Ment',
  'Terra',
  'necrofil',
  'Eater-M',
  'Vitamin',
];

const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const getRandomLengthComment = (str) => {
  const minSentences = 1;
  const arr = str.split('. ');
  const randomLength = getRandomInteger(minSentences, arr.length - 1);
  const result = [];

  for (let i = 0; i < randomLength; i++) {
    result.push(arr[getRandomInteger(0, arr.length - 1)]);
  }

  return result.join('. ') + '.';
};

const getMockCommentsData = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    const comment = {
      id: i + 1,
      author: getArrayRandomItem(authors),
      text: getRandomLengthComment(message),
      date: getRandomDate(START_COMMENTS_DATE, END_COMMENTS_DATE),
      emotion: getArrayRandomItem(emotions),
    };
    result.push(comment);
  }

  return result;
};

export default getMockCommentsData;
