import { getMarker } from './card.js';

const getData = () => {

  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      const similarAds = ads;
      getMarker(similarAds);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
