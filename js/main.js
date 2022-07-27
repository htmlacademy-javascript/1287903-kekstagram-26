import './util.js';
import './miniature.js';
import './fullsize.js';
import './form.js';
import './editor-scale.js';
import './editor-effect.js';
import {createPhotos} from './miniature.js';
import {renderCommentsData} from './fullsize.js';
fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    createPhotos(data);
  });

