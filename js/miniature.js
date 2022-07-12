import {randomDescriptions} from  './data.js';
const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

randomDescriptions.forEach( ({url,likes,comments})=>{
  const pictureImage = pictureTemplate.cloneNode(true);
  pictureImage.querySelector('.picture__img').src=url;
  pictureImage.querySelector('.picture__likes').textContent=likes;
  pictureImage.querySelector('.picture__comments').textContent=comments.length;
  pictureFragment.appendChild(pictureImage);
});
pictureElement.appendChild(pictureFragment);
