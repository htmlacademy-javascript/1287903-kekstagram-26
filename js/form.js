import { body } from './fullsize.js';
const uploadFile = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.getElementById('upload-cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

//Открытие формы редактирования изображения
uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});
// Функция закрытия окна
const closeModal = function () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
};
//Закрытие формы редактирования изображения по кнопке закрытия и ESC
uploadCancel.addEventListener('click', () => {
  closeModal();
});
function closeModalWindow (evt) {
  if (evt.code === 'Escape' ) {
    evt.preventDefault();
    closeModal();
  }
}
// Код для отмены кнопки Esc при фокусе на комментарий
textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeModalWindow);
});
textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', closeModalWindow);
});
// Код для отмены кнопки Esc при фокусе на хештег
textHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', closeModalWindow);
});
textHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', closeModalWindow);
});
// Хэш-теги
// imgUploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
// });

// Подключение библиотеки
const imgUploadForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(imgUploadForm,
  {classTo: 'text__hashtags',
    errorTextParent:'text__hashtags',
    errorTextClass:''
  },
  {classTo: 'text__description',
    errorTextParent:'text__description',
    errorTextClass:''
  },
);
imgUploadForm.addEventListener ('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

