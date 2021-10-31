import {createAds} from './data.js';

const mapAd = document.querySelector('#map-canvas');
const descriptionAd = document.querySelector('#description');
const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const similarAds = createAds();

similarAds.forEach((ad) => {
  const adElement = cardTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent =
    ad.offer.address;
  adElement.querySelector(
    '.popup__text--price',
  ).textContent = `${ad.offer.price} ₽/ночь`;
  descriptionAd.value = adElement.querySelector(
    '.popup__description',
  ).textContent = ad.offer.description;
  adElement.querySelector('.popup__type').textContent = ad.offer.type;
  adElement.querySelector(
    '.popup__text--capacity',
  ).textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  const featureContainer = adElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const features = ad.offer.features;
  const photos = ad.offer.photos;
  const collectImg = adElement.querySelector('.popup__photos');
  const img = collectImg.querySelector('img');

  const modifiers = features.map((feature) => `popup__feature--${  feature}`);

  featureList.forEach((featureListItems) => {
    const modifier = featureListItems.classList[1];

    if (!modifiers.includes(modifier)) {
      featureListItems.remove();
    }
  });

  photos.forEach((photo) => {
    const imgBlock = img.cloneNode(true);
    imgBlock.src = photo;
    collectImg.appendChild(imgBlock);
  });

  collectImg.removeChild(img);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;
  mapAd.appendChild(adElement);
});
