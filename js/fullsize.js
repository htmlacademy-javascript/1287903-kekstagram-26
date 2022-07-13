import { pictureElement } from './miniature.js';
import { randomDescriptions } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('.body');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const commmmentsFragment = document.createDocumentFragment();

// Список комментариев под фотографией:
const renderComments = function () {
  socialComments.innerHTML='';
  randomDescriptions[0].comments.forEach((comment) => {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialPicture = document.createElement('img');
    socialPicture.classList.add('social__picture');
    socialPicture.src=comment.avatar;
    socialPicture.alt=comment.name;
    socialPicture.width=35;
    socialPicture.height=35;
    socialComment.appendChild(socialPicture);

    const socialText = document.createElement('p');
    socialText.classList.add('social__text');
    socialText.textContent=comment.message;
    socialComment.appendChild(socialText);
    commmmentsFragment.appendChild(socialComment);
  });
  socialComments.appendChild(commmmentsFragment);
};

// Вешаем обработчик на сетку
pictureElement.addEventListener('click' ,  (event) => {
  bigPicture.classList.remove('hidden');
  const eventTarget = event.target.closest('a');
  bigPictureImg.querySelector('img').src=eventTarget.querySelector('.picture__img').src;
  bigPicture.querySelector('.big-picture__img img').alt=eventTarget.querySelector('.picture__img').alt;
  bigPicture.querySelector('.likes-count').textContent=eventTarget.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.comments-count').textContent=eventTarget.querySelector('.picture__comments').textContent;
  bigPicture.querySelector('.social__caption').textContent=eventTarget.querySelector('.picture__img').alt;
  renderComments();
  // Скрываем блоки ".social__comment-count" и  ".comments-loader".
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  // Фиксируем контейнер с фотографиями
  body.classList.add('modal-open');
});

// Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});
document.addEventListener('keydown' ,  (evt) =>{
  if (evt.code === 'Escape' ) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
