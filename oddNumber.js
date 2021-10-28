function isOdd(num) { 
    const i = num.filter(n => n % 2);

    return i;
    
}
const myArray = [];

// Only change code below this line
for(let i = 1; i <=9; i++){
  if(i % 2 != 0){
    myArray.push(i)
  }
}