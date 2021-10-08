function isWerewolf(target) {
    let result = '';
    for(let i = target.length; i >= 0; i--) {
      result += target.charAt(i)
    }
    console.log(result.replace( /\W/g, "").toLocaleLowerCase())
    console.log(target.replace( /\W/g, "").toLocaleLowerCase())
    if (result.replace( /\W/g, "").toLocaleLowerCase() === target.replace( /\W/g, "").toLocaleLowerCase()){
        return true
    }else return false
  }
console.log(isWerewolf('Was it a rat I saw?'))