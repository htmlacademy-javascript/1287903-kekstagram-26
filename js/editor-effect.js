const imgUploadPreview=document.querySelector('.img-upload__preview img');
const effectsList=document.querySelector('.effects__list');
const effectLevelSlider=document.querySelector('.effect-level__slider');
const effectLevelValue=document.querySelector('.effect-level__value');
const imgUploadEffectLevel=document.querySelector('.img-upload__effect-level');
let cssFilter = '';
let cssFilterUnit = '';
// Создаём объект с свойствами эффектов
const effectsPreviewList = {
  none: {
    class: 'effects__preview--none',
    settings: {range: {min: 0, max: 1}, start: 0, step: 0.1, connect: 'lower'},
    filter: '',
    unit: '',
    display: 'none'
  },
  chrome: {
    class: 'effects__preview--chrome',
    settings: {range: {min: 0, max: 1}, start: 1, step: 0.1, connect: 'lower'},
    filter: 'grayscale',
    unit: '',
    display: 'block'
  },
  sepia: {
    class: 'effects__preview--sepia',
    settings: {range: {min: 0, max: 1}, start: 1, step: 0.1, connect: 'lower'},
    filter: 'sepia',
    unit: '',
    display: 'block'
  },
  marvin: {
    class: 'effects__preview--marvin',
    settings: {range: {min: 0, max: 100}, start: 100, step: 1, connect: 'lower'},
    filter: 'invert',
    unit: '%',
    display: 'block'
  },
  phobos: {
    class: 'effects__preview--phobos',
    settings: {range: {min: 0, max: 3}, start: 3, step: 0.1, connect: 'lower'},
    filter: 'blur',
    unit: 'px',
    display: 'block'
  },
  heat: {
    class: 'effects__preview--heat',
    settings: {range: {min: 1, max: 3}, start: 3, step: 0.1, connect: 'lower'},
    filter: 'brightness',
    unit: '',
    display: 'block'
  },
};

// Подключаем библиотеку
noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  imgUploadPreview.style.filter= `${cssFilter}(${effectLevelValue.value}${cssFilterUnit})`;
});

// Изменение фильтра при нажатии на кнопки
effectsList.addEventListener ('change', (evt) => {
  if (evt.target.nodeName === 'INPUT'|| evt.target.closest('input')) {
    const effectsValue = effectsPreviewList[evt.target.value];
    imgUploadPreview.className='';
    imgUploadPreview.classList.add(effectsValue.class);
    imgUploadEffectLevel.style.display = effectsValue.display;
    effectLevelSlider.noUiSlider.updateOptions(effectsValue.settings);
    cssFilter = effectsValue.filter;
    cssFilterUnit = effectsValue.unit;
    imgUploadPreview.style.filter ='';
  }
});

//Функция сброса эффектов картинки
function resetPictureEffects () {
  imgUploadPreview.classList = '';
  imgUploadPreview.style.filter = '';
}

//Функция сброса параметров слайдера
function resetSliderEffects () {
  imgUploadEffectLevel.style.display = 'none';
}
export {resetPictureEffects,resetSliderEffects};
