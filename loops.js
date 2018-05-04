function forLoop(array){
  var i = 0;
  for (i; i < 24; i++){
    if (i === 1){
      array[i]= "I am 1 strange loop";
    }
    else {
      array[i]= `I am ${i} strange loops.`;
    }
  }
}

function whileLoop(n) {
  while (n > 0){
    console.log(n--)
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
}