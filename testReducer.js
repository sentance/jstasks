/*
Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству. Функция принимает аргументами массив объектов и название свойства для группировки. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.
*/

const groupBy = (users, key) => {
   return users.reduce((acc, user)=>{
    (acc[user[key]] = acc[user[key]] || []).push(user);
    return acc;
    },{})
}

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
 
console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'))
