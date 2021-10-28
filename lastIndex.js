function getLongestString(strings) {
    // write code here
    let s = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      if (s.length <= strings[i-1].length) {
        s = strings[i-1];
      }
    }
  
    return s;
  }

  console.log(getLongestString(['Python', 'JavaScript', 'Ruby', 'Java']))