// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntenger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*Функция от Кекса, возвращающая случайное число с плавающей точкой из переданного диапазона
включительно. Будет использоваться для генерации временных географических координат
в следующем задании.*/
function getRandomPositiveFloat(number1, number2, digits = 1) {
  const lower = Math.min(Math.abs(number1), Math.abs(number2));
  const upper = Math.max(Math.abs(number1), Math.abs(number2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const TITLE = [
  'У оленя',
  'В госях у Красной Шапочки',
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

const AD_COUNT = 10;
const getRandomArrayElement = (elements) => elements[getRandomIntenger(0, elements.length - 1)];
const getRandomArray = (arr) => {
  const randomArray = [];
  for (let element = 0; element < getRandomIntenger(0, arr.length); element++) {
    randomArray.push(arr[element]);
  }
  return randomArray;
};

const createAd = () => {
  const AUTHOR = new Object();
  AUTHOR.avatar = `img/avatars/user0${getRandomIntenger(1, 10)}.png`; //Адреса
  const OFFER = new Object();
  OFFER.title = getRandomArrayElement(TITLE);
  OFFER.adress = `${(location.lat = getRandomPositiveFloat(
    35.65,
    35.7,
    5,
  ))}, ${(location.lng = getRandomPositiveFloat(139.7, 139.8, 5))}`;
  OFFER.price = getRandomIntenger(100, 2000);
  OFFER.type = getRandomArrayElement(TYPE);
  OFFER.rooms = getRandomIntenger(1, 6);
  OFFER.guests = getRandomIntenger(1, 7);
  OFFER.checkin = getRandomArrayElement(CHECKIN);
  OFFER.checkout = getRandomArrayElement(CHECKOUT);
  OFFER.features = getRandomArray(FEATURES);
  OFFER.description = getRandomArrayElement(DESCRIPTION);
  OFFER.photos = getRandomArray(PHOTOS);
  const LOCATION = new Object();
  LOCATION.lat = location.lat;
  LOCATION.lng = location.lng;

  return {
    AUTHOR,
    OFFER,
    LOCATION,
  };
};
const similaAd = Array.from({ length: AD_COUNT }, createAd);

// console.log(similaAd);