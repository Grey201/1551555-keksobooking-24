import {getMarker} from './card.js';
import './form.js';


fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((ads) => {
    const similarAds=ads;
    getMarker(similarAds);
  });

