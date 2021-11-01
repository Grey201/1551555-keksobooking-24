import {createAds} from './data.js';

const mapAd = document.querySelector('#map-canvas');
const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const similarAds = createAds();

const getSimilarAd = (ad) => {
  ad.forEach((getAd) => {
    const adElement = cardTemplate.cloneNode(true);
    adElement.querySelector('.popup__title').textContent = getAd.offer.title;
    adElement.querySelector('.popup__text--address').textContent =
    getAd.offer.address;
    adElement.querySelector(
      '.popup__text--price',
    ).textContent = `${getAd.offer.price} ₽/ночь`;
    adElement.querySelector(
      '.popup__description').textContent = getAd.offer.description;
    adElement.querySelector('.popup__type').textContent = getAd.offer.type;
    adElement.querySelector(
      '.popup__text--capacity',
    ).textContent = `${getAd.offer.rooms} комнаты для ${getAd.offer.guests} гостей`;
    adElement.querySelector(
      '.popup__text--time',
    ).textContent = `Заезд после ${getAd.offer.checkin}, выезд до ${getAd.offer.checkout}`;
    const featureContainer = adElement.querySelector('.popup__features');
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    const collectImg = adElement.querySelector('.popup__photos');
    const img = collectImg.querySelector('img');

    const modifiers = getAd.offer.features.map((feature) => `popup__feature--${feature}`);

    featureList.forEach((featureListItems) => {
      const modifier = featureListItems.classList[1];

      if (!modifiers.includes(modifier)) {
        featureListItems.remove();
      }
    });

    getAd.offer.photos.forEach((photo) => {
      const imgBlock = img.cloneNode(true);
      imgBlock.src = photo;
      collectImg.appendChild(imgBlock);
    });

    collectImg.removeChild(img);
    adElement.querySelector('.popup__avatar').src = getAd.author.avatar;
    mapAd.appendChild(adElement);
  });
};

getSimilarAd(similarAds);
