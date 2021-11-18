import {getData} from './api.js';
import {setFormSubmit} from './form.js';
import{housingGuestsInput, typeHousingInput} from './map.js';

getData();

typeHousingInput.addEventListener('change',(evt)=>{

  if(evt.target.value){
    getData();
  }
});

housingGuestsInput.addEventListener('change',(evt)=>{

  if(evt.target.value){
    getData();
  }
});

setFormSubmit();
