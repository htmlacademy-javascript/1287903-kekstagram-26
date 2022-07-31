const ALERT_SHOW_TIME = 5000;

// Функция, возвращающая случайное целое число из переданного диапазона
function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}

// Функция для проверки максимальной длины строки.
function checkComment(comment,max) {
  return comment.length<=max;
}

//Функция, возвращающая набор случайных неповторяющихся цифр из заданного диапазона
function getRandomNumbers(min, max, countNumbers) {
  const rangeLength = (Math.floor(Math.max(Math.abs(min), Math.abs(max))) - Math.ceil(Math.min(Math.abs(min), Math.abs(max)))) + 1;
  const arrayNumbers = [];
  if (countNumbers <= rangeLength) {
    for (let i = 0; i < countNumbers; i++) {
      let currentNumber = returnNumber(min, max);
      while (arrayNumbers.includes(currentNumber)) {
        currentNumber = returnNumber(min, max);
      }
      arrayNumbers[i] = currentNumber;
    }
    return arrayNumbers;
  }
  return false;
}

// Функция сообщения об ошибке загрузки данных
function showFailMessage (message) {
  const failMessageContainer = document.createElement('div');
  failMessageContainer.style.zIndex = '100';
  failMessageContainer.style.position = 'absolute';
  failMessageContainer.style.left = '0';
  failMessageContainer.style.top = '0';
  failMessageContainer.style.right = '0';
  failMessageContainer.style.padding = '20px 10px';
  failMessageContainer.style.fontFamily = '"Open Sans", "Arial", sans-serif';
  failMessageContainer.style.fontSize = '32px';
  failMessageContainer.style.fontWeight = 'bold';
  failMessageContainer.style.textAlign = 'center';
  failMessageContainer.style.backgroundColor = 'red';
  failMessageContainer.textContent = message;
  document.body.append(failMessageContainer);
  setTimeout(() => {
    failMessageContainer.remove();
  }, ALERT_SHOW_TIME);
}

// Функция сообщения об отправке данных на сервер
function showMessage (typeOfMessage) {
  const messageTemplateUpload = document.querySelector(`#${typeOfMessage}`).content.querySelector(`.${typeOfMessage}`);
  const messageElementUpload = messageTemplateUpload.cloneNode(true);
  messageElementUpload.style.zIndex = 100;
  document.body.append(messageElementUpload);
  messageElementUpload.querySelector(`.${typeOfMessage}__button`).addEventListener('click', () => {
    closeMessage();
  });
  function closeMessage() {
    messageElementUpload.remove();
    document.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onMessageEscKeydown);
  }
  document.addEventListener('click', onOutsideClick);
  function onOutsideClick(evt) {
    if (!evt.target.closest(`div.${typeOfMessage}__inner`)) {
      closeMessage();
    }
  }
  document.addEventListener('keydown', onMessageEscKeydown);
  function onMessageEscKeydown(evt) {
    if (evt.keyCode === 27) {
      closeMessage();
    }
  }
}
export {returnNumber,checkComment,showFailMessage,showMessage,getRandomNumbers};
