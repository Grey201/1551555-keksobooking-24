// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntenger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomIntenger(12, 25);
/*Функция, возвращающая случайное число с плавающей точкой из переданного диапазона
включительно. Будет использоваться для генерации временных географических координат
в следующем задании.*/
const getRandomCoordinates = (min, max, precision) => {
  if (min < 0 || max < 0 || min >= max) {
    // eslint-disable-next-line quotes
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  const randomNumber = Math.random() * (max - min + 1) + min;
  return randomNumber.toFixed(precision);
};
getRandomCoordinates(1, 10, 3);
