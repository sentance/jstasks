function makeStickers(detailsCount, robotPart) {
  // write code here
  if (detailsCount === 0) {
    return [];
  }
  const arr = [];
  for(let i = 1; i <= detailsCount; i++){
    arr.push(`${robotPart} #${i}`)
  }
  return arr;
}

console.log(makeStickers(3, 'Ear detail'))