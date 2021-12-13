/*
Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.
*/

const compare = (a, b) => {
    const userA = Date.parse(a.birthday);
    const userB = Date.parse(b.birthday);
    if (userA === userB) {
      return 0;
    }
  
    return userA > userB ? 1 : -1;
  };
  
  const takeOldest = (array, userToReturn = 1) => {
    const sortedUsers = array.sort(compare);
    const newMassiv = [];
    for (let i = 0; i < userToReturn; i += 1) {
      newMassiv.push(sortedUsers[i]);
    }
    return newMassiv;
  };
  

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users, 3))

export default takeOldest;