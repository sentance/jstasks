function getSuccessRate(statistic) {
    let done = 0;
    let fail = 0;
    // write code here
    if(!statistic) return 0
    for(let i = 0; i <= statistic.length; i++) {
      if(statistic.charAt(i) === '0'){
        fail+=1
      }if (statistic.charAt(i) === '1'){
          done+=1
      }
    }
    const percent = Math.round(done * 100 / statistic.length)
    return percent
  }

 console.log(getSuccessRate('11100'))