function splitString(str) {
    // write code here
    let arr = [];
    if(str.length % 2 === 0){
        for(let i = 0; i < str.length-1; i++){
            arr.push(str[i]+str[i+1])
        }
        return arr
    }
    for(let i = 0; i < str.length; i++){
        arr.push(str[i]+str[i+1])
    }
    arr.pop(arr.length)
    arr.push(str[str.length-1]+'_')
    return arr
}
