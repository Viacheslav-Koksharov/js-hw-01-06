// const string = 'Welcome to Bahamas!';
// const array = string.split(' ');
// let quantity;
// console.log(quantity = array.length);

// const lists = ['box', 'fox', 'cox', 'dox'];
// const lastIndex = lists.length - 1;

// console.table(lists);
// for (let i = 0; i <= lastIndex; i += 1) { console.log(lists[i]); }



// №1
// const numbers = [30, 60, 40, 20, 10, 50];
// let total = 0;

// first
// console.log(numbers);
// console.table(numbers);

// second
// for (number of numbers) { total += number };
// console.log('total:', total);

// third
// for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = Math.round(numbers[i] *= 1.2)
// }
// console.log('on 20% more=', numbers);
// for (number of numbers) { total += number };
// console.log('total:', total);

// №2
// const numbers = [1, 5, 8, 10, 13, 18, 22, 28, 31];
// let total = 0;

// first
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log('Четное!!!!');
//         total += number;
//     }
// }
// console.log('общая сумма четных чисел:', total);

// second
// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log('Четное!!!!');
//         total += number;
//     }
// }
// console.log('общая сумма четных чисел:', total);

// third
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Эту итерацию нужно пропустить', number);
//         continue;
//     }
//     console.log(`${number} - четное!!!!`);
//     total += number;
// }
// console.log('общая сумма четных чисел:', total);

// №3
// const logins = ['asdFFg', 'lkjHHg', 'qweRRt', 'poiUUy'];
// const loginToFind = 'qweRRt';

// first
// let message = `Пользователь ${loginToFind}  не найден`;

// for (login of logins) {

//     console.log('login-', login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message);

// second
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} найден`;

// console.log(message);

// №4
// const numbers = [40, 50, 7, 10, 8, 30, 25, 19, 26];
// let smallestNumber = numbers[0];

// console.table(numbers);

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('Smallest number of array:', smallestNumber);



// Задача 8(из нашего потока)
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива,
// используя цикл for.Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.

// const array = [20, 10, 30, 25];
// let total = 0;
// let arr;

// first
// for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
// }
// console.log(total);

// second
// for (arr of array) { total += arr };
// console.log(total);

// third
// const reduceArray = function (array) {
//     let total = 0;
//     let arr;
//     for (arr of array) {
//         total += arr
//     }
//     return total;

// }
// const array = [20, 10, 30, 25];
// console.log(reduceArray(array));



// Задача 1(Саша решал на уроке)
//  Посчитать общую сумму покупок в корзине, к стоимости каждого товара добавить НДС 20%

// const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// let total = 0;
// let cart;

// for (let i = 0; i < carts.length; i += 1) {
//     carts[i] = Math.round((carts[i] *= 1.2))
//     total += carts[i];

// }

// console.log(total);


// -2-
// for (cart of carts) {
//     total += cart * 1.2;
// }
// console.log(total);
// console.log(Math.round(total));


// Задача 2(Саша решал на уроке)
//  Напиши скрипт который подсчитывает сумму всех чётных и нечетных чисел в массиве.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         total += numbers[i];
//     }
// }
// console.log(total);


// Задача 3(Саша решал на уроке)
// Напиши скрипт поиска логина
// Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
// Сначала через for
// Потом через for...of
// Логика break
// Метод includes() с тернарным оператором


// const logins = ['m4ngoDoge', 'k1widab3st1', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'k1widab3st';

// let message = `Пользователь ${loginToFind} не найден.`;
// for (let i = 0; i < logins.length; i += 1) {
//     if (logins[i] === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// } console.log(message);

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;

// console.log(message);



// Задача 4(Саша решал на уроке)
// Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }
// console.log(smallestNumber);

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

//
// Задача 5(Саша решал на уроке)
// Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
// Элементов может быть произвольное кол-во.
// Пусть элементы массива  в строке будут разделены запятой.
// Сначала через for
// Потом через join()


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ', '
// }
// string = string.slice(0, string.length - 2)
// console.log(string)
// console.log(string.length)

// console.log(friends.join(', '));


// Задача 6(Саша решал на уроке)
// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
// Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».


// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//  first  
// if (letter === letter.toLowerCase()) {
//         invertedString += letter.toUpperCase()
//     } else { invertedString += letter.toLowerCase() }

// second
//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }
// console.log(invertedString)


// Задача 7(Саша решал на уроке)
// // Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов
// Нормализируем строку
// Разбиваем по словам
// Сшиваем в строку с разделителями


// const title = 'Top 10 benefits of React framework';

// const normalize = title.toLowerCase();
// console.log(normalize);
// const slug = normalize.split(' ');
// console.log(slug);
// console.log(slug.join('-'));

// console.log(title.toLowerCase().split(' ').join('-'));


// Задача 8(Саша решал на уроке)
// Напиши скрипт который считает сумму элементов двух массивов.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const array3 = array1.concat(array2);
// console.log(array3);
// for (let arr of array3) {
//     total += arr
// }
// console.log(total)


// Задача 9(Саша решал на уроке)
// Работем с коллекцией карточек в trello
// Метод splice()
// Удалить
// Добавить
// Обновить

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

// const delcards = cards.splice(3, 2);
// console.log(cards);
// console.log(delcards);

// const addcards = cards.splice(5, 0, 'Карточка-6', 'Карточка-7')
// console.log(cards);

// const refcards = cards.splice(0, 2, 'Карточка-1.1', 'Карточка-2.2');
// console.log(cards);