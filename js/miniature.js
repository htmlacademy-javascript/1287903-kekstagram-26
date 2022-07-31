const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const createPhotos = (data) => {
  const pictureFragment = document.createDocumentFragment();
  data.forEach( ({url,likes,comments,id}) => {
    const pictureImage = pictureTemplate.cloneNode(true);
    pictureImage.querySelector('.picture__img').src=url;
    pictureImage.querySelector('.picture__likes').textContent=likes;
    pictureImage.querySelector('.picture__comments').textContent=comments.length;
    pictureImage.dataset.pictureId = id;
    pictureFragment.appendChild(pictureImage);
  });
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());
  pictureList.appendChild(pictureFragment);
};
export {createPhotos};

