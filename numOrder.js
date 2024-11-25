function inAscOrder(arr) {
    return arr.join('') === arr.sort((a,b)=> a-b).join('') ? true : false;
  }
  console.log(inAscOrder([1,3,4,5,7,9,6]));