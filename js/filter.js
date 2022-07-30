import { getRandomNumbers } from './util.js';
import { createPhotos } from './miniature.js';
const imgFilters = document.querySelector('.img-filters');
// const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
// const filterDiscussed= imgFilters.querySelector('#filter-discussed');

// Функция ,отображающая блок с фильтрами
function showFilterBlock  () {
  imgFilters.classList.remove('img-filters--inactive');
}

// Обработчик кнопок фильтрации
imgFilters.addEventListener('click', choiceButton);

// Функция кнопок фильтрации изображений
function choiceButton (evt) {
  const eventTarget = evt.target.closest('.img-filters__button');
  const buttonActive = imgFilters.querySelector('.img-filters__button--active');
  if(eventTarget) {
    eventTarget.classList.add('img-filters__button--active');
    buttonActive.classList.remove('img-filters__button--active');
  }
}

// Функция отображения случайных фотографий

function getRandomPhotos(photosData, number) {
  const randomIdNumbers = getRandomNumbers(0, 24, number);
  return photosData.filter((photo) => randomIdNumbers.includes(photo.id));
}

function randomPictures () {
  createPhotos(getRandomPhotos(10));
}
// Обработчик отображения случайных фотографий
filterRandom.addEventListener('click',randomPictures );

export {showFilterBlock};
