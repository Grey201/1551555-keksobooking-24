import {createAds} from './data.js';

const similarAds = createAds();
const address=document.querySelector('#address');

const getSimilarAd = (ad) => {
  const cardTemplate = document
    .querySelector('#card')
    .content.querySelector('.popup');
  const adElement = cardTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent =
    ad.offer.address;
  adElement.querySelector(
    '.popup__text--price',
  ).textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector(
    '.popup__description').textContent = ad.offer.description;
  adElement.querySelector('.popup__type').textContent = ad.offer.type;
  adElement.querySelector(
    '.popup__text--capacity',
  ).textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  const featureContainer = adElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const collectImg = adElement.querySelector('.popup__photos');
  const img = collectImg.querySelector('img');
  const modifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
  featureList.forEach((featureListItems) => {
    const modifier = featureListItems.classList[1];

    if (!modifiers.includes(modifier)) {
      featureListItems.remove();
    }
  });

  ad.offer.photos.forEach((photo) => {
    const imgBlock = img.cloneNode(true);
    imgBlock.src = photo;
    collectImg.appendChild(imgBlock);
  });

  collectImg.removeChild(img);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  return adElement;
};

const map=L.map('map-canvas').setView({
  lat: 35.6895,
  lng: 139.692,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon=L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt)=>{
  const coordinates=evt.target.getLatLng();
  address.value=`${coordinates.lat} ${coordinates.lng}`;
});

similarAds.forEach((similarAd) => {
  const {location} = similarAd;
  const icon=L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  });

  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: icon,
    });

  marker.addTo(map).
    bindPopup(getSimilarAd(similarAd));
});
