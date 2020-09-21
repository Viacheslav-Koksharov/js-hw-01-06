// Задача 1 (из нашего потока)
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в
// консоль сообщение в формате[номер элемента]-[значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента
// массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function (array) {
//     let result = '';
//     for (let i = 0; i < array.length; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`
//     }
//     return result;
// }

// console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));


// Задача 2 (из нашего потока)
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию
// calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach
// или функциональных методов.
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.


// let message = 'Proin sociis natoque et magnis parturient montes mus';
// let pricePerWord = 10;
// let array = message.split(' ');
// let calculateEngravingPrice = array.length * pricePerWord;

// console.log('стоимость гравировки:', calculateEngravingPrice); // 80
// const calculateEngravingPrice = function (message, pricePerWord) {

//     let array = message.split(' ');
//     let result = array.length * pricePerWord;
//     return result;
// }

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// ); // 160

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// №3
// Напиши фукцнию findLongestWord(string), которая принимает параметром 
// произвольную строку(в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

// const findLongestWord = function (string) {

//     let array = string.split(' ');
//     let LongestWord = array[0];
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i].length > LongestWord.length) { LongestWord = array[i] }
//     }
//     return LongestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

// №4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// •	Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// •	Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет
// в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function (string) {
//     console.log(string.length)
//     let maxLength = 40;
//     if (string.length <= maxLength) {
//     } else {
//         string = string.slice(0, maxLength) + '...';
//     }
//     return string
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// // вернется форматированная строка

// №5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//     let normalize = message.toLowerCase();
//     console.log(normalize);
//     let ban1 = 'spam';
//     let ban2 = 'sale';

//     return normalize.includes('spam') || normalize.includes('sale')
// };


// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// №6
// •	При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// •	Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//     пока пользователь не нажмет Cancel в prompt.
// •	После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//     необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
//  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов,
//     не обязательно.Если хочешь, в случае некорректного ввода,
//     показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//     при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю
// предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// for (let i = 0; i !== null; i += 1) {

//     input = prompt(`Введите число`);
//     numbers[i] = +input;
//     total += numbers[i]
//     if (input === null) {
//         break;
//     }
// }
// alert(`Общая сумма чисел равна ${total}`);

// Задача 6(из нашего потока)
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его
// числами из массива array умноженными на 10. Для перебора массива и добавления новых значений
// используй цикл for.По завершению перебора массива array возвращается массив numbers.

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => message.split(' ').length * pricePerWord;

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
// console.log(calculateEngravingPrice('Uno', 100)); // 100

// function mapArray(array) {
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         numbers.push(array[i] * 10);

//     }
//     return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]
// console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]


// function filterArray(array) {
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (Number.isFinite(array[i])) {
//             numbers.push(array[i])
//         };

//     }
//     return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]
// console.log(filterArray([1, NaN, Infinity]));
// // [1]
// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]
// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]
// console.log(filterArray([{}, () => { }, 2]));
// [2]



// function reduceArray(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         if (array.length === 0) {
//             total;
//         } else { total += array[i] }
//     }
//     return total;
// };

// console.log(reduceArray([1, 2, 3]));
// // 6
// console.log(reduceArray([-2, 0, 2]));
// // 0
// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// function isLoginValid(login, min = 4, max = 16) {
//     return login.length >= min && login.length <= max;
// }

// function isLoginUnique(allLogins, login) {
//     return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {

//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     for (const log of allLogins) {
//         if (!isLoginValid(login)) {
//             message = ERROR;
//         } else if (isLoginUnique(allLogins, login)) {
//             message = REFUSAL;
//         } else {
//             allLogins.push(login);
//             message = SUCCESS;
//         }
//     }
//     return message;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// //
// console.log(addLogin(logins, 'Ajax'));
// // // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // // 'Ошибка! Логин должен быть от 4 до 16 символов'