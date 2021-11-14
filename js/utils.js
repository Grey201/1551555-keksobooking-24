const ALERT_SHOW_TIME=5000;
const messageError=document.querySelector('#error');
const messageSuccess=document.querySelector('#success');
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

export {showAlert, messageError, messageSuccess};

