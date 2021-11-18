const CENTER_POINT_LAT = 35.6895;
const CENTER_POINT_LNG = 139.692;
const ZOOM_LEVEL = 10;
const ICON_SIZE = [36, 36];
const ICON_ANCHOR = [18, 36];
const SIMILAR_AD_COUNT= 10;
const address = document.querySelector('#address');
const mapFilters=document.querySelector('.map__filters');
const typeHousingInput=mapFilters.querySelector('#housing-type');
const housingGuestsInput=mapFilters.querySelector('#housing-guests');

const getSimilarAd = (ad) => {
  const cardTemplate = document
    .querySelector('#card')
    .content.querySelector('.popup');
  const adElement = cardTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__description').textContent =
    ad.offer.description;
  adElement.querySelector('.popup__type').textContent = ad.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = (
    `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`
  );
  adElement.querySelector('.popup__text--time').textContent = (
    `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`
  );
  const featureContainer = adElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const collectImg = adElement.querySelector('.popup__photos');
  const img = collectImg.querySelector('img');

  if(ad.offer.features!==undefined){

    const modifiers = ad.offer.features.map((feature) => `popup__feature--${feature}`);
    featureList.forEach((featureListItems) => {
      const modifier = featureListItems.classList[1];

      if (!modifiers.includes(modifier)) {
        featureListItems.remove();
      }
    });
  }

  if(ad.offer.photos!==undefined){

    ad.offer.photos.forEach((photo) => {
      const imgBlock = img.cloneNode(true);
      imgBlock.src = photo;
      collectImg.appendChild(imgBlock);
    });
  }
  collectImg.removeChild(img);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  return adElement;
};

const map = L.map('map-canvas').setView(
  {
    lat: CENTER_POINT_LAT,
    lng: CENTER_POINT_LNG,
  },
  ZOOM_LEVEL,
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const mainMarker = L.marker(
  {
    lat: CENTER_POINT_LAT,
    lng: CENTER_POINT_LNG,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat} ${coordinates.lng}`;
});

const getAdRang=(ad)=>{
  let rank=0;

  if(ad.offer.type===typeHousingInput.value){
    rank+=2;
  }

  if(ad.offer.guests===housingGuestsInput.value){
    rank+=1;
  }

  return rank;
};

const compareAd = (adA, adB) => {
  const rankA = getAdRang(adA);
  const rankB = getAdRang(adB);

  return rankB - rankA;
};

const getMarker=(similarAds)=>{

  similarAds.slice().sort(compareAd).slice(0, SIMILAR_AD_COUNT).forEach((similarAd) => {
    const { location } = similarAd;
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: icon,
      },
    );

    marker.addTo(map)
      .bindPopup(getSimilarAd(similarAd));
  });

  return similarAds;

};

export {getMarker, getSimilarAd, typeHousingInput, housingGuestsInput};

