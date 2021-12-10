function countdown(n){
    if(n < 1){
      return []
    }else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}


function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

console.log(rangeOfNumbers(1, 10))