/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */
// 'Все хорошо, снимаем деньги... Спасибо за покупку!'
// let balance = 10000;
// const payment = 3000;

// console.log(
//   `Общая стоимость заказа ` +
//     payment +
//     ` кредитов. Проверяем кол-во доступных средств на счету`,
// );

// if (balance > payment) {
//   console.log(`На счету осталось ${balance - payment} кредитов`);
//   console.log(`Все хорошо, снимаем деньги... Спасибо за покупку!`);
// } else {
//   console.log(`На счету недостаточно средств для проведения операции`);
//   console.log(`Операция завершена`);
// }
/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// const newLocal = payment + totalSpent;

// if (newLocal >= 100 && newLocal <= 1000) {
//   discount = 2;
//   console.log(`Оформляем заказ на сумму`, payment, `со скидкой`, discount, '%');
//   console.log('Бронзовый партнер, скидка 2%');
// } else if (newLocal > 1000 && newLocal < 5000) {
//   discount = 5;
//   console.log(`Оформляем заказ на сумму`, payment, `со скидкой`, discount, '%');
//   console.log('Серебрянный партнер, скидка 5%');
// } else if (newLocal > 5000) {
//   discount = 10;
//   console.log(`Оформляем заказ на сумму`, payment, `со скидкой`, discount, '%');
//   console.log('Золотой партнер, скидка 10%');
// } else {
//   console.log(`Оформляем заказ на сумму`, payment, `со скидкой`, discount, '%');
//   console.log('У вас еще нет партнерской скидки');
// }
// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'
//
// WORK-1
// •	Объяви две переменные хранящие название и цену товара: name и price
// •	Присвой переменным следующие характеристики товара(сразу при объявлении)
// o	название: Генератор защитного поля
// o	цена: 1000
// •	Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// •	Присвой товару новую цену - 2000
// •	Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// WORK-2
// Напиши скрипт проверки количества товаров на складе.Есть переменные total(количество товаров на складе) и ordered(единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// •	Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// •	В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// let ordered = 100;

// if (ordered > total) {
//   alert('На складе недостаточно товаров!');
// } else {
//   alert('Заказ оформлен, с вами свяжется менеджер');
// }

// WORK-3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// •	Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// •	В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// •	В противном случае, то есть если ни одно из предыдущих условий не
// выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// •	После всех проверок вывести в alert значение переменной message.
//
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt('Введите пароль');

// if (message === null) {
//   alert((message = 'Отменено пользователем!'));
// } else if (message === ADMIN_PASSWORD) {
//   alert((message = 'Добро пожаловать!'));
// } else {
//   alert((message = 'Доступ запрещен, неверный пароль!'));
// }

// WORK-4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits(создай и присвой).Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.Цена одного дроида хранится в переменной pricePerDroid(создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
// •	Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// •	В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// •	Проверяет сможет ли пользователь оплатить заказ:
// o	если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// o	в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// const pricePerDroid = 3000;
// let value = prompt('Какое количество дроидов вы хотите купить?');

// if (value === null) {
//   alert((value = 'Отменено пользователем'));
// } else if (value * pricePerDroid > credits) {
//   alert((value = 'Недостаточно средств на счету!'));
// } else {
//   alert(
//     `Вы купили ${value} дроид(-a,-ов), на счету осталось ${
//       credits - value * pricePerDroid
//     } кредитов.`,
//   );
// }

//  Пользователь может оформить доставку товара к себе в страну, указав ее при посещении
// страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра,
//   а к примеру 'кИтАЙ'.
//  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
//  Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.
//  Ниже приведен список стран и стоимость доставки.
// •	Китай - 100 кредитов
// •	Чили - 250 кредитов
// •	Австралия - 170 кредитов
// •	Индия - 80 кредитов
// •	Ямайка - 120 кредитов

// const CHINA = `Китай`;
// const CHILI = `Чили`;
// const AUSTRALIA = `Австралия`;
// const INDIA = `Индия`;
// const JAMAICA = `Ямайка`;

// let country;
// let delivery;

// let message = prompt('Введите название страны');

// if (message === null) {
//   alert((message = 'Отменено пользователем'));
// }
// switch (message[0].toUpperCase() + message.slice(1).toLowerCase()) {
//   case (country = CHINA):
//     delivery = 100;
//     break;
//   case (country = CHILI):
//     delivery = 250;
//     break;
//   case (country = AUSTRALIA):
//     delivery = 170;
//     break;
//   case (country = INDIA):
//     delivery = 80;
//     break;
//   case (country = JAMAICA):
//     delivery = 120;
//     break;
//   default:
//     alert((message = 'В вашей стране доставка не доступна'));
// }
// if (delivery > 0) {
//   alert((message = `Доставка в ${country} будет стоить ${delivery} кредитов`));
// }

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
//   пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// •	При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total.
// •	Операция ввода числа продолжается до тех пор, пока пользователь не нажмет
// кнопку Cancel в prompt.
// •	После того как пользователь прекратил ввод нажав кнопку Cancel,
//   показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число,
//   а не произвольный набор символов, не нужно.Если хочешь,
//   в случае некорректного ввода, показывай alert с
// текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать
// к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let value;
// let total = 0;


// for (let i = 0; i !== null; i += 1) {
//     input = prompt(`Введите число`);
//     value = +input;
//     total += value;
//     if (input === null) {
//         break;
//     }
// }
// alert(`Общая сумма чисел равна ${total}`);








