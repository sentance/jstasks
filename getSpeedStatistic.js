function getSpeedStatistic(testResults) {
    // write code herem
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY;
    let total =0;
    if (testResults.length === 0){
        return [0, 0, 0]
    }
    for(let i = 0; i < testResults.length; i++){
        if (testResults[i] <= min){
            min = testResults[i]
        }
    }
    for(let i = 0; i < testResults.length; i++){
        if (testResults[i] >= max){
            max = testResults[i]
        }
    }
    for(let i = 0; i < testResults.length; i++){
        total += testResults[i]
    }
    let avg = total/testResults.length
    return[min, Math.floor(avg), max]
}
console.log(getSpeedStatistic([1, 10, 10, 11, 9, 21, 12, 8]))