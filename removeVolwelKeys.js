
function removeVowelKeys(keys) {
    // write code here
    let arr = [];
    const vovels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const ares = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'z'];
    for(let i = 0; i < keys.length; i++) {
        for(let a = 0; a < ares.length; a++){
            if(keys[i][0].toLowerCase() === ares[a]){
                arr.push(keys[i])
            }
        }
    }
    return arr;
  }

  console.log(removeVowelKeys(['alarm', 'chip', 'isValid', 'Advice', 'onClick']))