
// ===================    Перебор объекта     ======================================================================================

/*  В отличии от массива или строки, объект это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. */

// ===================    Цикл for...in     ==========================================

// for (key in object) {
//     // инструкции
//   }

/*  Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. 
Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок */

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//   }


// ===================    Метод hasOwnProperty()     ==========================================

/*  Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in. */

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Герда";
  
//   console.log(dog); // {name: 'Герда'}
//   console.log(dog.name); // 'Герда'
//   console.log(dog.legs); // 4

/* Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. 
Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, 
хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. 
Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. 
Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.  */

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

/*  Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. 
Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем. */

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }
  
//     // Если это не собственное свойство - ничего не делаем
//   }


// ===================     Метод Object.keys()    ==========================================

/* У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это Object.keys(obj),
 который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.  */

//  const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

/*  Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к 
использованию архаического цикла for...in с проверками принадлежности свойств. */

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
//     console.log(book[key]);
//   }

  /* Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом. */


  // ===================    Метод Object.values()     ==========================================

  /* Если метод Object.keys(obj) возвращает массив ключей собственных свойств обьекта, то метод Object.values(obj) возвращает
   массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив */

//    const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

  /* Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.

Допустим перед нами стоит задача посчитать общее количество продуктов в объекте формата имя-продукта: количество.
 Тогда подойдет метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить. */

//  const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };
  
//   const values = Object.values(goods); // [6, 3, 4, 7]
  
//   let total = 0;
  
//   for (const value of values) {
//     total += value;
//   }
  
//   console.log(total); // 20


  // ===================     Метод Object.entries()    ==========================================

  /* Метод Object.entries(obj) возвращает массив записей, каждым элементом которого будет 
  еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj. */

//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
//   const entries = Object.entries(book); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

  /* ИНТЕРЕСНО
На практике метод Object.entries(obj) используется редко, только для каких-то очень специфичных задач.
 В 99% случаев будет использован метод Object.keys() или Object.values(). */


  // ===================    МАССИВ ОБЪЕКТОВ     ==========================================

  /*  В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. 
  Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.*/

  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На берегу спокойных вод",
      author: "Роберт Шекли",
      rating: 8.51,
    },
    {
      title: "Сон смешного человека",
      author: "Федор Достоевский",
      rating: 7.75,
    },
  ];

  /* Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить
   используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения. */

   for (const book of books) {
    // Объект книги
    console.log(book);
    // Название
    console.log(book.title);
    // Автор
    console.log(book.author);
    // Рейтинг
    console.log(book.rating);
  }

  /* Например, получим список названий всех книг в коллекции books. */

  const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

  /* Узнаем средний рейтинг всей нашей коллекции. Для этого сложим все рейтинги,
   после чего разделим это значение на количество книг в коллекции. */

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

  /*  */


  // ===================         ==========================================

  /*  */

  /*  */

  // ===================         ==========================================

  /*  */

  /*  */