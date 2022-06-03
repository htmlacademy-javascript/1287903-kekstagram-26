const MAX_VALUE= 10;
function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}
returnNumber();
function checkComment(comment,max) {
  return comment.length<=max;
}
checkComment('Привет всем,как дела?Как жизнь?!', MAX_VALUE);
