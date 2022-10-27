

//  --------------  Объявление функции multiply

// function multiply() {
//     // Тело функции
//     console.log("Это лог при вызове функции multiply");
//   }
  
//   // 2. Вызовы функции multiply
//   multiply(); // 'Это лог при вызове функции multiply'
//   multiply(); // 'Это лог при вызове функции multiply'
//   multiply(); // 'Это лог при вызове функции multiply'


// --------   Объявление параметров x, y, z

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }
  
//   //  Передача аргументов
//   multiply(2, 3, 5); // Результат умножения равен 30
//   multiply(4, 8, 12); // Результат умножения равен 384
//   multiply(17, 6, 25); // Результат умножения равен 2550


// ====================   Параметры по умолчанию    --------------------------- 

/*  Иногда необходимо объявить функцию, у параметров которой будут значения отличные от undefined, 
даже если для них не передали аргументы. Это делается очень простым и очевидным образом, достаточно указать 
значение по умолчанию прямо при объявлении параметров в подписи функции. При такой записи, если для 
параметра не передано значение аругмента, используется значение по умолчанию. */

// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   }
  
//   count(1, 5); // countFrom = 1, countTo = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(); // countFrom = 0, countTo = 10, step = 1

// ==================   Псевдомассив arguments   --------------------------- 

/*  Доступ к списку всех аргументов можно получить при помощи специальной переменной arguments, которая доступна только 
внутри функции и хранит все аргументы как псевдомассив.

Псевдомассив - коллекция, со свойством length и возможностью обратиться к элементу по индексу, но отсутствием 
большинства методов для работы с массивом. */

// function multiply() {
//     let total = 1;
  
//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120


// ===================    Преобразование псевдомассива     ==========================================

/*  Обычно псевдомассив необходимо преобразовать в полноценный массив, так как у псевдомассива нет методов массива, 
например slice() или includes(). На практике применяют несколько основных способов.

Используя метод Array.from(), который создаст массив из псевдомассива. */

// function fn() {
//     // В переменной args будет полноценный массив
//     const args = Array.from(arguments);
//   }

/*  Используя операцию ... (rest), она позволяет собрать произвольное количество элементов,  !!!!!!!!!!!!!!!!!!!!!
в нашем случае аргументов, в массив и сохранить его в переменную. 

Собираем все аргументы используя операцию rest прямо в подписи функции. */

// function fn(...args) {
//     // В переменной args будет полноценный массив
//   }


// ===================     Паттерн «Ранний возврат»    ==========================================

/*  Оператор if...else - это основной способ создания ветвлений. Тем не менее, сложные вложенные ветвления делают код запутанным для понимания.

Создадим функцию, которая обрабатывает снятие денег с личного счета в банке. 
Она получает сумму для снятия и текущий баланс счета, после чего, в зависимости от условия, выполняет тот или иной блок кода.  */

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведения операции введите сумму больше нуля");
//     } else if (amount > balance) {
//       console.log("Недостаточно средств на счету");
//     } else {
//       console.log("Операция снятия средств проведена успешно");
//     }
//   }
  
//   withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//   withdraw(500, 300); // "Недостаточно средств на счету"
//   withdraw(100, 300); // "Операция снятия средств проведена успешно"

/*  Даже в таком простом примере есть группа вложенных условных операторов, среди которых не сразу можно выделить понять логику выполнения кода.

В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, 
и весь код него после будет проигнорирован в текущем вызове функции.

Паттерн «Ранний возврат» - это способ использовать возможность досрочного возврата из функции с помощью оператора return. 
Используя этот приём мы получаем более чистый, плоский и понятный код, который легче рефакторить.

Выделим все проверки условий в отдельные операторы if, после чего добавим код, идущий в теле else. В идеальном случае, должен получиться плоский 
список условных операторов, идущих один за другим, а в конце блок, который выполнится только в том случае, если не выполнится ни один if. */

// function withdraw(amount, balance) {
//     // Если  условие выполняется, вызывается console.log
//     // и выход из функции. Код идущий после тела if не выполнится.
//     if (amount === 0) {
//       console.log("Для проведения операции введите сумму больше нуля");
//       return;
//     }
  
//     // Если условие первого if не выполнилось, его тело пропускается
//     // и интерпретатор доходит до второго if.
//     // Если условие выполняется, вызывается console.log и выход из функции.
//     // Код идущий после тела if  не выполнится.
//     if (amount > balance) {
//       console.log("Недостаточно средств на счету");
//       return;
//     }
  
//     // Если ни один из предыдущих if не выполнился,
//     // интерпретатор доходит до этого кода и выполняет его.
//     console.log("Операция снятия средств проведена");
//   }
  
//   withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//   withdraw(500, 300); // "Недостаточно средств на счету"
//   withdraw(100, 300); // "Операция снятия средств проведена"


// ===================    Функциональное выражение     ==========================================

/*  Функциональное выражение (function expression) - обычное объявление переменной, значение которой будет функция. 
Альтернативный способ объявления функции. */

// Объявление функции (function declaration)
// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   }
  
//   // Функциональное выражение (function expression)
//   const multiply = function (x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
//   };



// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for( let i = min; i<=max; i+=1){
//       numbers.push(i);
//     }

//     // Change code above this line
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//     // Change code below this line
//   let newArr =[];
//  for(let i =0; i<numbers.length; i+=1){
//    if(numbers[i]>value){
//     newArr.push(numbers[i]);
//    }
//  }
//  return newArr;

//  }

//  function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);
//   }
//   console.log(checkFruit("plum"));

// function getCommonElements(array1, array2) {
//   let arr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arr.push(array1[i]);
//     }
//   }
//   return arr;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([3, 77, 27, 24, 11, 12], [3, 8, 12, 36, 11]));

// function calculateTotalPrice(order) {
//   let total=0;
// for( let variable of order){
//    total+=variable;
// }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

// for (let number of numbers){
//   if( number > value){
//     filteredNumbers.push(number);
//   }
// }
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(getEvenNumbers(3, 11));

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   // let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return  i;
//       // break;
//     }
//   }

//   // return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5))

// function includes(array, value) {
//   let flag = false;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] !== value) {
//       // flag = true;
//       continue;
//     } else {
//       flag = true;
//     }
//   }
//   return flag;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     // console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

// "Лог перед вызовом fnA"
// "Лог внуртри функции fnA до вызова fnB"
// "Лог внутри функции fnB"
// "Лог внуртри функции fnA после вызова fnB"
// "Лог после вызова fnA"

/*  == Напиши функцию add, для сложения произвольного количевтва аргументов (чисел)
операция ...(rest)
*/
// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 4, 7));
// console.log(add(99, 4, -4));
// console.log(add('digit', 3, -4, 1000));

/*  == Напиши функцию filterNumbers(array, [, number1, ..., ..., ]);
 которая первым аргументом принимает массив чисел,
  после первого аргумента может быть произвольное количево аргументов которые будут числами,
Функция должна вернуть новый массив, в Котором будут только те агументы (начиная со второго)
для которых есть аналог в оригинальном массиве
*/

// const filterNumbers = function (array, ...args) {
//   const theSameElements = [];
//   console.log('array: ', array);
//   console.log('args: ', args);

//   for (const element of array) {

//     if (args.includes(element)) {
//       theSameElements.push(element);
//       console.log(`Element-- ${element} массива, есть в списке ${args} !`);
//     }
//   }
//   return theSameElements;
// };
// console.log(filterNumbers([2, 3, '13oihyybyi', 4, 5, 99], 5, 8, 9, 11, 99, 13, '13oihyybyi')); //5, 99
// console.log(filterNumbers([10, 15, 25, 30, 13], 5, 18, 15, 30, 23, 13)); // 15, 30, 13
