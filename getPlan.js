function getPlan(currentProduction, months, percent) {
   let result = [];
   let total = currentProduction;
    for(let i = 0; i < months; i++) {
        total += Math.floor(total  * (percent / 100))
        result.push(total)
    }
    return result
}
  
console.log(getPlan(1000, 6, 30))  