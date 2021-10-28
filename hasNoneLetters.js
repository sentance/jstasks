function hasNoneLetters(blacklist, phrase) {
    // write code here
    for (let i = 0; i < phrase.length; i++) {
        for (let a = 0; a < blacklist.length; a++){
            if(phrase[i].toLowerCase() == blacklist[a].toLowerCase()) {
                return false
            }
        }
    }
    return true
}
  

 console.log(hasNoneLetters('asbi', 'ASAB'))