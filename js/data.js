import {getRandomIntenger, getRandomArray, getRandomPositiveFloat} from './utils.js';

const TITLE = [
  'У оленя',
  'В гостях у Красной Шапочки',
  'Дом трех поросят',
  'E-flat',
  'Васюкинские зори',
  'Hiroto apartment',
  'Lastel',
  'Love Hotel',
  'bungalow sushi',
  'Shinjuku Gyo-en',
];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Хейтеров просьба не беспокоить.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MINPRICE = 100;
const MAXPRICE = 2000;
const MINNUMBEROFROOMS = 1;
const MAXNUMBEROFROOMS = 6;
const MINNUMBEROFGUESTS = 1;
const MAXNUMBEROFGUESTS = 7;
const LOCATIONLATMIN = 35.65;
const LOCATIONLATMAX = 35.7;
const LOCATIONLATPRECISION = 5;
const LOCATIONLNGMIN = 139.7;
const LOCATIONLNGMAX = 139.8;
const LOCATIONLNGPRECISION = 5;
const AD_COUNT = 3;

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
      address: `${(lat)}, ${(lng)}`,
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
const createAds =()=> Array.from({ length: AD_COUNT }, createAd);
export {createAds};
