// Функция, возвращающая случайное целое число из переданного диапазона
function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}
// Функция для проверки максимальной длины строки.
function checkComment(comment,max) {
  return comment.length<=max;
}
export {returnNumber,checkComment};
