//  ======= ВВОД пользователем ==============
// let quantity = prompt('Enter quontity of products');
// quantity=Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);


//  ==============  Приведение к числу    ======================
// Большинство арифметических операций и математических функций преобразуют значение в число автоматически. 
// Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.
// Если значение не возможно привести к числу, результатом будет специальное числовое значение NaN (Not a Number). 
// Аналогичным образом происходит преобразование и в других математических операторах и функциях.
// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// =============       Выделение ТОЛЬКО ЦИФР !!!!! INT  or FLOAT   =============== 
// ============    Методы Number.parseInt() и Number.parseFloat()   v==========
// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// let elementWidth ='50.98px'; 
// const result = Number.parseInt(elementWidth);
// console.log(result);
// elementWidth = Number.parseFloat(elementWidth);
// console.log(elementWidth);


// ============    Проверка на число
// Для проверки на число можно использовать метод Number.isNaN(val). Он проверяет, является ли указанное значение NaN или нет.
// Метод отвечает на вопрос "Это Not A Number?" и возвращает:
//      true - если значение val это NaN
//     false - если значение val это не NaN
//   Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false. 
//  Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true


// ==========    Удаление лишних цифр после точки   toFixed()       ===============
// ==============   Еще один способ - сложить, а результат отсечь до определённого знака после запятой при помощи метода toFixed(). =======
// Метод число.toFixed(digits) =================  Удаление лишних цифр после точки
//  Sample console.log(Number(число.toFixed(digits)))

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// const salary = 1300.987654;
// console.log(salary);
// console.log(Number(salary.toFixed()))
// console.log(Number(salary.toFixed(2)))

// let salary1 = 1990.9876;
// // возвращает строку !!
// salary1 = Number(salary1.toFixed(2)); 
// console.log(salary1);

// console.log(Number(true));
// console.log(Number(false));

// ===============    Библиотека Math          =============================

// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// Возведение в степень 
// exponent operator 
//  console.log(Math);

//  const base =2;
//  const power =5;
//  console.log(Math.pow(base, power));
//  const res = Math.pow(base+3, power*5); 
//  console.log(res);

//  console.log(power**7);

//  let value = prompt('Enter digit!');
//  value=Number(value);
//  let power =prompt('Enter the power you need');
//  power=Number(power);
//  const result = value**power;
//  console.log(`The digit ${value} in a power ${power} = ${result}`);


// Math.random();
// Math.random() *(max - min) + min
// const max =50;
// const min =10;
// const result =Math.round(Math.random()* (max-min)+min);
// console.log(result);

// const colors =  ['orange', 'tomato', 'teal', 'deeeppink', 'skyblue']
// const max = colors.length-1;
// const min =0;
// const index =Math.round(Math.random()* (max-min)+min);
// const color =colors[index];
// console.log(color);
// document.body.style.backgroundColor =color;
