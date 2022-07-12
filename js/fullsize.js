import { pictureElement } from './miniature.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('.body');
// const bigPictureCancel = document.querySelector('.big-picture__cancel');
// const commmmentsFragment = document.createDocumentFragment();

// Вешаем обработчик на сетку
pictureElement.addEventListener('click' ,  (event) => {
  bigPicture.classList.remove('hidden');
  const eventTarget = event.target.closest('a');
  bigPictureImg.querySelector('img').src=eventTarget.querySelector('.picture__img').src;
  bigPicture.querySelector('.big-picture__img img').alt=eventTarget.querySelector('.picture__img').alt;
  bigPicture.querySelector('.likes-count').textContent=eventTarget.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.comments-count').textContent=eventTarget.querySelector('.picture__comments').textContent;
  bigPicture.querySelector('.social__caption').textContent=eventTarget.querySelector('.picture__img').alt;
  // Скрываем блоки ".social__comment-count" и  ".comments-loader".
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  // Фиксируем контейнер с фотографиями
  body.classList.add('modal-open');
});
