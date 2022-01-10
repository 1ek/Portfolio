let arr = new Array(10);
let min = -100;
let max = 100;

function fillArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(min + Math.random() * (max + 1 - min));
  }
  console.log(arr);
}

function replaceFromArray() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}

function addToArray() {
    let arr2 = [];
    let j = 1;
    for (let i = 0; i < arr.length; i++){
        arr2[i] = arr[i];
    }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && i%2 == 0){
        arr2.splice(j, 0, -1);
    j++;}
  j++;}
  console.log(arr2);
}

fillArray();
replaceFromArray();
addToArray();