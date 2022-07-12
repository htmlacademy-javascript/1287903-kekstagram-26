import { returnNumber } from './util.js';
const TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Иван',
  'Артем',
  'Мария',
  'Сергей',
  'Виктор',
  'Юлия',
  'Настя',
  'Анна',
];
// Функция для создания комментария
function createUserComment (digit=returnNumber(1,6)) {
  const commentsArray = [];
  for (let i=0;i<digit;i++) {
    commentsArray[i] ={
      id:i+1,
      avatar:`img/avatar-${returnNumber(1,6)}.svg`,
      message:TEXT[returnNumber(0,TEXT.length-1)],
      name:NAMES[returnNumber(0,NAMES.length-1)]
    };
  }
  return commentsArray;
}
// Функция для создания фотографии
function createPhoto  (index) {
  return {
    id:index,
    url:`photos/${index}.jpg`,
    description:'Это самая лучшая фотография',
    likes:returnNumber(15,200),
    comments:createUserComment()
  };
}
// Массив из 25 сгенерированных объектов
const randomDescriptions = [];
for (let i=1;i<=25;i++) {
  randomDescriptions.push(createPhoto(i));
}
export {randomDescriptions};
