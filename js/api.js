//Функция получения данных
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
};
export {getData};
