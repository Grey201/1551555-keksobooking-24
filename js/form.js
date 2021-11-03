
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const MIN_TITLE_LENGTH = title.minLength;
const MAX_TITLE_LENGTH = title.maxLength;
const MAX_PRISE = price.max;
const roomNumber = document.querySelector('#room_number');
const capacities = document.querySelector('#capacity');

title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} символов.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(
      `Удалите ${valueLength - MAX_TITLE_LENGTH} лишних символов.`,
    );
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

price.addEventListener('input', () => {
  const valuePrice = price.value;

  if (valuePrice > MAX_PRISE) {
    price.setCustomValidity('Сумма не может быть больше 1 000 000');
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});

roomNumber.addEventListener('change', () => {

  for (const capacity of capacities) {

    if (roomNumber.value === '1') {
      capacity.disabled = true;
      capacities[2].disabled = false;
    } else if (roomNumber.value === '2') {
      capacity.disabled = false;
      capacities[0].disabled = true;
      capacities[3].disabled = true;
    } else if (roomNumber.value === '3') {
      capacity.disabled = false;
      capacities[3].disabled = true;
    } else if (roomNumber.value === '100') {
      capacity.disabled = false;
      capacities[1].disabled = true;
      capacities[0].disabled = true;
      capacities[2].disabled = true;
    }
  }
  capacities.reportValidity();
});
