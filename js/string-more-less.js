//  ===== Длина строки св-ва length ==================================== ===========
//  const message = 'In this string are 29 letters';
//  console.log(message.length);

//  ======== Конкатенация строк =======================================================================
/* 
Если применить оператор + к строке и любому другому типу данных, результатом операции «сложения» будет строка. 
Эта операция называется конкатенация, или сложение строк. Во время конкатенации, любой тип данных приводится к 
строке и сшивается со строкой, но есть особенность - последовательность записи операндов. 
Последовательность операций имеет значение, преобразование типов происходит только в момент операции сложения со строкой, 
до этого момента действуют привычные правила математики. */

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// const fitstName ='Chelsey';
// const lastName = 'Masha';
// const message1 = fitstName +" "+ lastName;
// console.log(message1);

// const quantity = 15;
// const orderMsq =`You are ordered ${quantity} freedges`;
// console.log(orderMsq);

// =================================     Методы toLowerCase() и toUpperCase()       ================

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const brand ='Samsung';
// const normalisedBrand =brand.toLowerCase();
// console.log(normalisedBrand);

// let brand1=prompt('Input are brand name!');
// brand1 = brand1.toLowerCase()
// console.log(brand1);

// let brand ='SamSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// ============ >=  <=
// console.log(15>10);

// ===== Приведение (преобразование) типов к числу
// console.log("11">10);
// console.log("itv87v">0);

// const isEqual = 5 ==5;
// console.log(isEqual);
// const isEqual = 5 == '5';
// console.log(isEqual);
// const isEqual = 5 === '5';
// console.log(isEqual);

// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.clear();


// =========================     Метод indexOf() =================
/*Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено. */

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("helo")); // -1
// console.log(message.indexOf("as")); 
// console.log(message.length);


//  ========================      Метод includes() ===========
// Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. 
// Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А" 

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false


// ===============                Метод endsWith() =====================
// Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// ========================         Методы replace() и replaceAll() =============
//  Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"


// =======================        Метод slice()  ============================
//  Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. 
// Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
