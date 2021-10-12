function isSorted(boxNumbers){
    const limit = boxNumbers.length - 1;
    return boxNumbers.every((_, i) => (i < limit ? boxNumbers[i] <= boxNumbers[i + 1] : true));
}
console.log(isSorted([0, -2, 6, 11, 13, 16])) 

function anotherIsSorted(boxNumbers){
    for(let i = 1; i < boxNumbers.length; i ++) {
        if(boxNumbers[i - 1] > boxNumbers[i]) {
            return false
        }
    }
    return true
}
console.log(anotherIsSorted([0, -2, 6, 11, 13, 16]))