const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP = 25;
// Редактирование масштаба\
function onScaleSmallerChange () {
  const valueScale =parseFloat(scaleControlValue.value);
  if (valueScale>MIN_SCALE) {
    scaleControlValue.value=`${valueScale - STEP} %`;
    imgUploadPreview.style.transform=`scale(${(valueScale - STEP)/100})`;
  }
}
function onScaleBiggerChange () {
  const valueScale =parseFloat(scaleControlValue.value);
  if (valueScale<MAX_SCALE) {
    scaleControlValue.value=`${valueScale + STEP} %`;
    imgUploadPreview.style.transform=`scale(${(valueScale + STEP)/100})`;
  }
}
//Сброс масштаба
function resetScale() {
  imgUploadPreview.style.transform = '';
}

export {onScaleSmallerChange,onScaleBiggerChange,resetScale};
