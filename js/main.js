import {getData} from './api.js';
import {setFormSubmit, setTypeChange} from './form.js';
import{getMarker} from './card.js';

getData((similarAds)=>{
  getMarker(similarAds);
  setTypeChange(()=>getMarker(similarAds));
});

setFormSubmit();
