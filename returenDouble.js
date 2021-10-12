function doublePower(currentPowers) {
    // write code here
    const arr = [];
  
    for (let i = 0; i < currentPowers.length; i++) {
      arr.push(currentPowers[i] * 2);
    };
  
    return arr;
  }

  console.log(doublePower([100, 150, 200, 220]))