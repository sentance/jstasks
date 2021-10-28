function fakeBin(input) {
    // write code here
    let arr = [];
    for (let i = 0; i < input.length; i++){
        if(input[i] < 5){
            arr.push(0)
        }else {
            arr.push(1)
        }
    }
    return arr.join('')
    
  }

console.log(fakeBin("12345"))