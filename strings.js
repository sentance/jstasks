/* 
Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке.
Количество символов передаётся в takeLast() вторым параметром. 
Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
*/
takeLast = (str, n) =>{
    if (str.length < n || str.length <= 0){
           return null
    }

   let a = str.substring(str.length - n)
   let newStr = []
   for(let i = a.length-1; i >= 0; i--) {
        newStr.push(a[i])
   }
   return newStr.join('')

}

console.log(takeLast('Hello', 2))