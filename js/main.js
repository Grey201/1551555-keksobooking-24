import {getRandomIntenger, getRandomArray, getRandomPositiveFloat} from './utils.js';

import { TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, MINPRICE, MAXPRICE, MINNUMBEROFROOMS, MAXNUMBEROFROOMS, MINNUMBEROFGUESTS, MAXNUMBEROFGUESTS, LOCATIONLATMIN, LOCATIONLATMAX, LOCATIONLATPRECISION, LOCATIONLNGMIN, LOCATIONLNGMAX, LOCATIONLNGPRECISION, AD_COUNT} from './directory.js';
// console.log(getRandomIntenger);
// console.log(MAXPRICE);

const getRandomArrayElement = (elements) =>
  elements[getRandomIntenger(0, elements.length - 1)];

const createAd = () => {
  const lat = getRandomPositiveFloat(
    LOCATIONLATMIN,
    LOCATIONLATMAX,
    LOCATIONLATPRECISION,
  );
  const lng = getRandomPositiveFloat(
    LOCATIONLNGMIN,
    LOCATIONLNGMAX,
    LOCATIONLNGPRECISION);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntenger(1, 10)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      adress: `${(lat)}, ${(lng)}`,
      price: getRandomIntenger(MINPRICE, MAXPRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomIntenger(MINNUMBEROFROOMS, MAXNUMBEROFROOMS),
      guests: getRandomIntenger(MINNUMBEROFGUESTS, MAXNUMBEROFGUESTS),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};
const similaAd = Array.from({ length: AD_COUNT }, createAd);


