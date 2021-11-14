// import {onResetForm} from './form.js';

const ALERT_SHOW_TIME=5000;
const messageError=document.querySelector('#error');
const messageSuccess=document.querySelector('#success');
const buttonReset=document.querySelector('.ad-form__reset');
const containerForm=document.querySelector('.ad-form');
const itemForm =containerForm.querySelectorAll('input');
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  document.body.append(message.content.cloneNode(true));
  let alertContainer;
  if(message===messageError){

    alertContainer=document.querySelector('.error');
    const errorButton=document.querySelector('.error__button');

    errorButton.addEventListener('click', ()=>{
      alertContainer.remove();
    });

    document.addEventListener('click', ()=>{
      alertContainer.remove();
    });

    document.addEventListener('keydown', (evt)=>{

      if(isEscapeKey){
        evt.preventDefault();
        alertContainer.remove();
      }
    });
  }

  else {
    alertContainer=document.querySelector('.success');

    setTimeout(() => {
      alertContainer.remove();
    }, ALERT_SHOW_TIME);

    document.addEventListener('click', ()=>{
      alertContainer.remove();
    });

    document.addEventListener('keydown', (evt)=>{

      if(isEscapeKey){
        evt.preventDefault();
        alertContainer.remove();
      }
    });
  }
};

const resetForm=()=>itemForm.forEach((listForm)=>{
  listForm.textContent='';
});

buttonReset.addEventListener('click', resetForm);

export {showAlert, messageError, messageSuccess};

