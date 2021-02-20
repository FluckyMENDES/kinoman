export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const getRandomInteger = (min = +min, max = +max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const getArrayRandomItem = (arr) => {
  return arr[getRandomInteger(0, arr.length - 1)];
};

export const createRandomLengthUniqArray = (arr, max = arr.length) => {
  let result = new Set();
  for (let i = 0; i < max; i++) {
    if (i >= max) {
      i = 0;
    }
    if (Math.round(Math.random())) {
      result.add(getArrayRandomItem(arr));
    }
  }
  result = Array.from(result);

  if (!result[0]) {
    result.push(getArrayRandomItem(arr));
  }
  return result;
};

export const getRandomDate = (start, end, startHour = 0, endHour = 23) => {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
};

export const getYearFromDate = (date) => {
  return date.getFullYear();
};

export const getHumanlikeDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

export const getTimeFromDuration = (duration = 0) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

export const trimString = (str, maxLength = 140) => {
  if (str.length > maxLength) {
    const result = str.substr(0, maxLength - 1);
    return `${result}...`;
  }
  return str;
};
