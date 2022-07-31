import './util.js';
import './fullsize.js';
import './form.js';
import './editor-scale.js';
import './editor-effect.js';
import { getData}  from './api.js';
import {createPhotos} from './miniature.js';
import {getOpenPhoto,setMiniaturesClick} from './fullsize.js';
import {setUploadImageFormSubmit ,closeModalWindow } from './form.js';
import {showFailMessage} from './util.js';
import { debounce } from './debounce.js';
import { setRandomPhotosClick, showFilterBlock , getRandomPictures, setDefaultClick, setPopularPhotosClick,
  getPopularPhotos } from './filter.js';

getData((photosData) => {
  createPhotos(photosData);
  setMiniaturesClick((evt) => {
    getOpenPhoto(photosData,evt);
  });
  showFilterBlock();
  setRandomPhotosClick(debounce (() => {
    getRandomPictures(photosData);
  }));
  setDefaultClick(debounce (() => {
    createPhotos(photosData);
  }));
  setPopularPhotosClick(debounce (() => {
    getPopularPhotos(photosData);
  }));
},showFailMessage);

setUploadImageFormSubmit(closeModalWindow);
