import './util.js';
import './fullsize.js';
import './form.js';
import './editor-scale.js';
import './editor-effect.js';
import { getData}  from './api.js';
import {createPhotos} from './miniature.js';
import {QWERTY,setMiniaturesClick} from './fullsize.js';

getData((photosData) => {
  createPhotos(photosData);
  setMiniaturesClick((evt) => {
    QWERTY(photosData,evt);
  });
});

