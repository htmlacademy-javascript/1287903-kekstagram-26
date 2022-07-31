import { getRandomNumbers } from './util.js';
import { createPhotos } from './miniature.js';
const imgFilters = document.querySelector('.img-filters');
const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
const filterDiscussed= imgFilters.querySelector('#filter-discussed');

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
  buttonActive.classList.remove('img-filters__button--active');
  if(eventTarget) {
    eventTarget.classList.add('img-filters__button--active');
  }
}

// Фунуция отображения фотографий по-умолчанию
function setDefaultClick (callBack){
  filterDefault.addEventListener('click', () => {
    callBack();
  });
}

// Функция отображения случайных фотографий
function getRandomPhotos(photosData, number) {
  const randomIdNumbers = getRandomNumbers(0, 24, number);
  return photosData.filter((photo) => randomIdNumbers.includes(photo.id));
}

function getRandomPictures (photosData) {
  const randomPictures = getRandomPhotos(photosData,10);
  createPhotos(randomPictures);
}

// Обработчик отображения случайных фотографий
function setRandomPhotosClick (callBack) {
  filterRandom.addEventListener('click', () => {
    callBack();
  } );
}

// Функция отображения обсуждаемых фотографий
function compareCommentsLength(photoA,photoB) {
  return photoB.comments.length-photoA.comments.length;
}

function getPopularPhotos (photosData) {
  const popularPhotos = photosData.slice().sort(compareCommentsLength);
  createPhotos(popularPhotos);
}

function setPopularPhotosClick (callBack) {
  filterDiscussed.addEventListener ('click', () => {
    callBack();
  });
}

export {showFilterBlock,getRandomPictures,setRandomPhotosClick,setDefaultClick,setPopularPhotosClick,getPopularPhotos};
