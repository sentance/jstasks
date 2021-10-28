function factorial(x){
    if(x === 1){
        return 1
    }else return x*factorial(x-1)
}

console.log(factorial(5))


function  sum(arr, n) {
    let summa = 0;
    if(n < 1){
        return summa
    }else return summa += arr[n-1] + sum(arr, n-1)
}

console.log(sum([2, 3, 4], 1))