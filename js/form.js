import { body } from './fullsize.js';
import {changeScaleBigger,changeScaleSmaller,resetScale} from './editor-scale.js';
import { resetPictureEffects,resetSliderEffects } from './editor-effect.js';
import { sendData } from './api.js';
import { showMessage } from './util.js';
// Переменные для кнопок изменения масштаба
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
// Переменные для редактирования формы загрузки
const uploadFile = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.getElementById('upload-cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const imgUploadSubmit = document.querySelector('.img-upload__submit');

const imgUploadForm = document.querySelector('.img-upload__form');
// Подключение библиотеки
const pristine = new Pristine(imgUploadForm,
  { classTo: 'img-upload__field-wrapper',
    errorTextParent:'img-upload__field-wrapper',
    errorTextClass:'text__error'
  }
);

//Открытие формы редактирования изображения
uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeModalWindowEscape);
  //Обработчики изменения масштаба
  scaleControlSmaller.addEventListener('click',changeScaleSmaller );
  scaleControlBigger.addEventListener('click', changeScaleBigger);
  resetSliderEffects();
});
// Функция закрытия окна
const closeModalAndResetWindow = function () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  pristine.reset();
};

// Функция закрытия окна загрузки
function closeModalWindow () {
  closeModalAndResetWindow();
  resetScale();
  resetPictureEffects();
  scaleControlSmaller.removeEventListener('click',changeScaleSmaller);
  scaleControlBigger.removeEventListener('click', changeScaleBigger);
}
//Закрытие формы редактирования изображения по кнопке закрытия и ESC
uploadCancel.addEventListener('click', closeModalWindow);

function closeModalWindowEscape (evt) {
  if (evt.keyCode === 27 ) {
    evt.preventDefault();
    closeModalWindow ();
  }
}
// Код для отмены кнопки Esc при фокусе на комментарий
textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeModalWindow);
});
textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', closeModalWindow);
});


// Функция проверки на #,символы,длину хештега
function checkHashtag (currentValue) {
  const regular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return regular.test(currentValue);
}

function checkCorrectHashtags (value) {
  return !value.length || value.split(' ').every(checkHashtag);
}

pristine.addValidator(textHashtags,checkCorrectHashtags,'Неверный хештег:Хеш-тег начинается с #;Хеш-теги разделяются пробелом');

// Функция проверки количества хештегов
function checkAmountHashtags (value) {
  const hashtagsAmount = value.split(' ');
  return hashtagsAmount.length <= 5;
}
pristine.addValidator(textHashtags,checkAmountHashtags,'Не больше 5');

// Код для отмены кнопки Esc при фокусе на хештег
textHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeModalWindow);
});
textHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', closeModalWindow);
});

// Функция проверки одного и того же хеш-тега
function checkSimilarHashtags (value) {
  const hashtagsSimilar = value.split(' ');
  const hashtagsSimilarRegister = hashtagsSimilar.map((element) => element.toLowerCase());
  const checkElementHashtags = [...new Set(hashtagsSimilarRegister)];
  return checkElementHashtags.length === hashtagsSimilar.length;
}
pristine.addValidator(textHashtags,checkSimilarHashtags,'Одинаковый хеш-тег');

// Функция проверки отправки формы
function setUploadImageFormSubmit(onSuccess) {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      imgUploadSubmit.disabled = true;
      imgUploadSubmit.style.backgroundColor= '#000';
      sendData(
        () => {
          onSuccess();
          showMessage('success');
          imgUploadSubmit.disabled = false;
        },
        () => {
          showMessage('error');
          imgUploadSubmit.disabled = false;
        },
        new FormData(evt.target)
      );
    }
  });
}

export {setUploadImageFormSubmit,closeModalWindow};
