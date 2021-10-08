function decryptMessage(message) {
    let result = '';
    for(let i = message.length; i >= 0; i--) {
      result += message.charAt(i)
    }
    return result
  }

  console.log(decryptMessage('reeb gniknird ekil eW'))