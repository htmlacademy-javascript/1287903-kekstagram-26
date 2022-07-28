//Функция получения данных с сервера
function getData(onSuccess, onFail) {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка загрузки данных с сервера');
      }})
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => onFail(err.message));
}

// Функция отправки данных на сервер
function sendData(onSuccess, onFail, body) {
  fetch('https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}
export {getData,sendData};
