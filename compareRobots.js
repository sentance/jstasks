function compareRobots(firstRobotResults, secondRobotResults) {
    // write code here
    if(getTotalWeight(firstRobotResults) > getTotalWeight(secondRobotResults)) {
        return `First robot for sale!`
    }
    if(getTotalWeight(secondRobotResults) > getTotalWeight(firstRobotResults)) {
        return `Second robot for sale!`
    }
    if(getTotalWeight(firstRobotResults) === getTotalWeight(secondRobotResults)) {
        return `Both robots for sale!`
    }
  }

  function getTotalWeight(weights){
    let total = 0;
    for (let i = 0; i < weights.length; i ++) {
        total +=weights[i]
    }
    return total
  }
  console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12]))