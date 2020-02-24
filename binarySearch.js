function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 9))



function BinarySearch(arr, elem){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end) / 2);
    
  while(arr[middle] !== elem && start <= end){
      if(elem < arr[middle]) end = middle -1
      else start = middle + 1 
     middle = Math.floor((start + end ) / 2)

  }

  return arr[middle] === elem ? middle:  -1


}



console.log(BinarySearch([12, 16, 18, 20, 22, 24, 28, 30, 32], 24))