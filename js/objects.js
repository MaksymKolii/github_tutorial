





// const myObj = new Object(),
//     str = "myString",
//     rand = Math.random(),
//     obj = new Object()

// myObj.type = "Dot syntax";
// myObj.str = "another string";
// myObj["date created"] = "String with space";
// myObj[str]   = "String value";
// myObj[rand]             = "Random Number";
// myObj[obj]              = "Object";
// myObj[""]               = "Even an empty string";

// console.log(myObj);

// const arr =[];
// console.log(arr);

// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'Track-2', 'track-3'],
//     // trackCount: 3,
//     changeName(newName){
//     this.name = newName;
//     console.log('this inside changeName', this);
//     },
//     addTrack(track){
//         this.tracks.push(track);
//         // this.trackCount =
//     },
//     getTrackCount(){
//         return this.tracks.length;
//     },
// };

// console.log(playlist);
// console.log(playlist.getTrackCount());
// playlist.changeName('simple super playlist');
// playlist.addTrack('track-99');
// playlist.addTrack('new-track');
// playlist.addTrack('one-more-track');
// console.log(playlist);
// console.log(playlist.getTrackCount());

/*========== REPETA LESSONS ================================================== */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
//   difficult: -1,
// };

// Number.
// Boolean.
// Array.
// Object.

// let totalFeedback = 0;
// ======== Object.keys(feedback) ========

// const keyyys = Object.keys(feedback);

// console.log(keyyys);

// for (const key of keyyys) {

//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
//  console.log('totalFeedback: ', totalFeedback);

// ======== Object.vaues(feedback) ========
// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

// =============   Работа с массивом объектов   =================  ========
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Orange', online: true },
//   { name: 'Avocado', online: false },
//   { name: 'Ajax', online: true },
// ];

// friends[1].gender = 'male';

// console.table(friends);
// for (const friend of friends) {

//     // console.log(friend);
//     console.log(friend.name);
//     friend.newProp = 555;

//     // delete friend.online;

// }
// console.table(friends);

// ========    Ищем имя в массиве обЪектов друзей =============================
// const findFrendbyName = function (allFriends, friendName) {

//      for (const friend of allFriends) {

//     //    console.log(friend);
//     //    console.log(friend.name);

//         if(friend.name === friendName){
//             return `Name ${friendName} are exist ;) !!`;
//         }
//      }
//      return `Name ${friendName} are  NOT exist :(`;
// }

// console.table(friends);
// console.log(findFrendbyName(friends, 'av0ocado'));
// console.log(findFrendbyName(friends, 'Ajax'));

// ============================ Получаем имена всех друзей     ========================
// function getAllNames(allFriends){
//    const allNames =[];
//     for (const friend of allFriends) {
//         allNames.push(friend.name);
//     }
//     return allNames;
// }
// console.log(getAllNames(friends));

// === Получаем всех друзей которые онлайн (Не только имена, а целиком массив объектов)====
// const getOnlineFriends = function (allFriends){
//     const names =[];
//     for (const friend of allFriends) {
//         if(friend.online){
//             names.push(friend);
//         }
//     }
//     return names;
// }
// console.log(getOnlineFriends(friends));

// === Получаем всех друзей которые Оффлайн (Не только имена, а целиком массив объектов)====
// const getOfflineFriends = function (allFriends){
//     const names =[];
//     for (const friend of allFriends) {
//         if(!friend.online){
//             names.push(friend);
//         }
//     }
//     return names;
// }
// console.log(getOfflineFriends(friends));

// const getFriendsByOnlineStatus = function (allFriends){

//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {

//         if(friend.online){
//             friendsByStatus.online.push(friend);
//             continue;
//         }

//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// }
// console.log(getFriendsByOnlineStatus(friends));

// ===  Как подсчитать количество свойств в ОБЪЕКТЕ ===
//   const x = {
//     a: 10,
//     b: 22,
//     c: 8,
//     d: 199,
//   }
//   console.log(Object.keys(x).length);

//  ======  Работаем с коллекцией товаров в корзине  ===================
// const cart = {

//     items: [],
//     getItems() {},
//     add(product) {},
//     remove(productName) {},
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// }
// console.table(cart.getItems());

// cart.add({name: '', price: 50});
// cart.add({name: '1F34F' , price: 50});

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   for (const key in apartment) {
//     if (Object.hasOwnProperty.call(apartment, key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//   }
//   console.table(apartment);
//   console.log(keys);
//   console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
//   console.log(keys);
//   console.log(values);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {

//     return Object.keys(object).length;
// }

//   console.log(countProps(apartment));

// function countTotalSalary(salaries) {

//   let totalSalary = 0;
//   const payments = Object.values(salaries);

//   for (const payment of payments) {

//     totalSalary += payment;
//   }

//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

/*Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену 
(свойство price). Если продукт с таким названием не найден, функция должна возвращать null. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const product of products) {

//     if (product.name === productName){

//         // return `Product ${product.name} has price ${product.price}`;
//         return product.price;
//     }
//   }
//   return null;
// }
//  console.log(getProductPrice("Radar"));

//================================================================================================================================
/*  19 Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const allNamesValuesArr =[];
//   const key = propName;

//   for (const object of products) {

//     allNamesValuesArr.push(object[key]);
//   }
//   return allNamesValuesArr;
// } 

// function getAllPropValues(propName) {
//     const allNamesValuesArr =[];

//   for (const object of products) {
//     const keys = Object.keys(object);
//     for (const key of keys) {

//       if (key === propName) {

//         allNamesValuesArr.push(object[key]);
//       }
//     } 
//   }
//   return allNamesValuesArr;
// } 

// console.log(getAllPropValues("namtte"));
// console.log(getAllPropValues('quantity'));
//==========================================================================================================================

/*Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.*/

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {

//     for (const product of products) {

//         if(product.name === productName){

//             return product.price * product.quantity;
//         }
        
//     }
//     return 0;
//   }

//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));


/* Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). 
Замени объявления переменных yesterday, today и tomorrow одной операцией 
деструктуризации свойств объекта highTemperatures. */

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const {yesterday, 
//     today, 
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

// } =  highTemperatures;
  
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(icon);

//   console.log(meanTemperature);

// const firstBook = {
//     title: "Последнее королевство",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title: firstTitle,
//     // т.к. значение переменной coverImage в объекте firstBook было до переименования ТО оно не записывается на новое (как имя)
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;
  
//   console.log(firstTitle); // Последнее королевство
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

//   const secondBook = {
//     title: "Сон смешного человека",
//   };
  
//   const {
//     title: secondTitle,
//     // Переменной coverImage в объекте secondBook НЕ  было до переименования И оно записывается вместе с новым именем
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;
  
//   console.log(secondTitle); // Сон смешного человека
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480

  /*Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией 
  деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию 
  для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

  // const highTemperatures = {
  //   yesterday: 28,
  //   today: 26,
  //   tomorrow: 33,
  // };
  
//   const highYesterday = highTemperatures.yesterday;
//   const highToday = highTemperatures.today;
//   const highTomorrow = highTemperatures.tomorrow;
//   const highIcon = highTemperatures.icon;
  
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/*Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. 
Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных 
todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//   const {
//     today: {low: lowToday, high:highToday, icon: todayIcon},
//     tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}

//   } = forecast;

//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;
  
//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;
  
