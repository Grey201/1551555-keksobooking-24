// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomIntenger = (min, max) => {

  if (min < 0 || max < 0 || min >= max) {

    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = (arr) => {
  const randomArray = [];

  for (let element = 0; element < getRandomIntenger(0, arr.length); element++) {
    randomArray.push(arr[element]);
  }

  return randomArray;
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

export {getRandomIntenger, getRandomArray, getRandomPositiveFloat};
