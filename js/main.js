const MAX_VALUE= 10;
// Функция, возвращающая случайное целое число из переданного диапазона
function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}
// Функция для проверки максимальной длины строки.
function checkComment(comment,max) {
  return comment.length<=max;
}
checkComment('Привет всем,как дела?Как жизнь?!', MAX_VALUE);

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
const commentUser =  (digit) =>({
  id:digit,
  avatar:`img/avatar-${returnNumber(1,6)}.svg`,
  message:TEXT[returnNumber(0,TEXT.length-1)],
  name:NAMES[returnNumber(0,NAMES.length-1)]
});
// Функция для создания фотографии
const createPhoto =  (index) =>({
  id:index,
  url:`photos/${index}.jpg`,
  description:'Это самая лучшая фотография',
  likes:returnNumber(15,200),
  comments:commentUser(index+1)
});
// Массив из 25 сгенерированных объектов
const randomDescription = [];
for (let i=1;i<=25;i++) {
  randomDescription.push(createPhoto(i));
}

