// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Tapas Jyoti",
//     () => {
//         console.log("Success : Your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "Tapu",
//                     () =>{
//                         console.log("success3 : data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("Failure : Week connection. data not saved");
//     }
// );

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         } else {
//             reject("failure : data was not saved");
//         }
//     });
// }

// savetoDb("Tapas Jyoti")
//     .then((result) => {
//         console.log("Data1 saved .");
//         console.log("result of promise :", result);
//         return savetoDb("Hello")
//     })
//     .then((result) => {
//         console.log("Data2 saved .");
//         console.log("result of promise :", result);
//         return savetoDb("Tapas")
//     })
//     .then((result) => {
//         console.log("Data3 saved .");
//         console.log("result of promise :", result);
//     })
//     .catch((error) => {
//         console.log("Promise was rejected")
//         console.log("Error of promise :", error);
//     });

// async function greet() {
//     throw "some random error!";
//     return "hello!";
// }
// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was :",result);
//     })
//     .catch((err) => {
//         console.log("promise was rejected with err : ", err);
//     })

// let demo = async() => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// let jsonRes = '{"fact": "Cats are the world\'s most popular pets, outnumbering dogs by as many as three to one","length": 84}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name:"Tapas",
//     marks:99.9,
// };

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log(data2.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data3) => {
//         console.log(data3.fact);
//     })
//     .catch((err) => {
//         console.log("Error - ", err);
//     });

// let url = "https://catfact.ninja/fact";

//-----------Using Fetch------------

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (e) {
//         console.log("error - ", e);
//     }
//     console.log("Hello");
// }

//----------------Using Axios--------------
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error -", e);
//         return "No Image found!";
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("error -", e);
//         return "No fact found!";
//     }
// }

//-----------------------Sending Header with API request--------------------------
// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json" }};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name="
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     let colArr = await getColleges(country);
//     show(colArr);
// });

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";

//     for(col of colArr) {
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     } catch (err) {
//         console.log("error : ", err);
//         return [];
//     }
// }

// var x = 7;

// function getName() {
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// var a = 10;
// function b() {
//     var x = 10;
// }

// console.log(window.a);
// // console.log(x); //error
// console.log(a);

// console.log(a);
// let a = 10;
// var b = 20;

//--------------Clouser-------------

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x() {
//     for(var i=1; i<=5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

// function x() {
//     for(let i=1; i<=5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

// function x() {
//     for(var i=1; i<=5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// var close = outer();
// close();

// function outer(b) {

//     function inner() {
//         console.log(a, b);
//     }
//     let a = 10;
//     return inner;
// }
// var close = outer("Hello World");
// close();

// function outest() {
//     var c = 20;
//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer
// }
// var close = outest()("Hello World");
// close();

// function outest() {
//     var c = 20;
//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         }
//         // let a = 10;
//         return inner;
//     }
//     return outer
// }
// // let a = 100;
// var close = outest()("Hello World");
// close()

//DataHiding
// function counter() {
//   var count = 0;
//   return function incremmentCounter() {
//     count++;
//     console.log(count);
//   };
// }

// var cnt1 = counter();
// cnt1();
// cnt1();

// var cnt2 = counter();
// cnt2();
// cnt2();
// cnt2();
// cnt2();
// cnt2();

// function Counter() {
//     var count = 0;
//     this.incrementCounter = function() {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function() {
//         count--;
//         console.log(count);
//     }
// }
// var cnt = new Counter();

// cnt.incrementCounter();
// cnt.incrementCounter();
// cnt.incrementCounter();
// cnt.incrementCounter();
// cnt.decrementCounter();
// cnt.decrementCounter();

// function a() {
//    var x = 0, z = 10;
//    return function b() {
//     console.log(x);
//    }
// }

// var y = a();
// y();

// //Function Statement
// function a() {
//     console.log("a called");
// }

// //Function Expresssion
// var b = function () {
//     console.log("b called");
// }

// a();
// b();

// //Function Declaration :- Function Statement is also known as Function Declaration

// //Anonymous Function
// // function () {

// // }

// //Named Function Expression
// var b = function xyz() {
//     console.log("b called");
// }
// b();
// //Difference between parameters & Arguments ?
// var b = function (param1, param2) { //parameters
//     console.log("b called");
// }
// b(1, 2); // Arguments
// //First Class Functions

// var b = function (param1) {
//     console.log(param1);
// }
// // b(function () {

// // });

// function xyz() {

// }
// b(xyz);

// var b = function (param1) {
//     return function xyz() {

//     }
// }

// console.log(b());
// //Arrow Functions

// ----------CallBack Function---------
// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// });

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("Click").addEventListener("click", function xyz() {
//     console.log("Button Clicked!", ++count);
//   });
// }
// attachEventListener();

// console.log("start");

// setTimeout(function cb() {
//   console.log("callback");
// }, 5000);

// console.log("End");

// //million of code

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("while expires");

// console.log("start");

// setTimeout(function cb() {
//   console.log("callback");
// }, 0);

// console.log("End");

//-------------Higher orderfunction--------------
// function x() {
//   console.log("Namaste");
// }

// function y(x) {
//   x();
// }
// y(x);

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));
//------------------------------
// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.map(area));

// console.log(radius.calculate(area));

//----------------Map()--------------

// const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// // function binary(x) {
// //   return x.toString(2);
// // }

// const output = arr.map((x) => x.toString(2));

// console.log(output);

//--------------Filter()-------------
// const arr = [5, 1, 3, 2, 6];

// function isOdd(x) {
//   return x % 2;
// }

// function isEven(x) {
//   return x % 2 === 0;
// }

// // function greaterThan4(x) {
// //   return x > 4;
// // }

// const output = arr.filter((x) =>  x > 4);

// console.log(output);

//-----------Reduce()-----------
//const arr = [5, 1, 3, 2, 6];

//finding sum in simple method

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

//Using reduce()

// const output = arr.reduce(function (acc, curr) {
//   acc += curr;
//   return acc;
// }, 0);
// console.log(output);

// const output = arr.reduce(function (max, curr) {
//   if(curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

//Other Examples
// const users = [
//   { firstName: "Tapas", lastName: "Jyoti", age: 19 },
//   { firstName: "Tapu", lastName: "Mohanta", age: 20 },
//   { firstName: "Sanjay", lastName: "Kumar", age: 21 },
//   { firstName: "Jacky", lastName: "Amarnath", age: 19 },
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

//Count age Group
// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

//First name of people whose age is lessthan 30

// const output = users.filter((x) => x.age < 20).map((x) => x.firstName);

// console.log(output);

//Using Reduce

// const output = users.reduce(function(acc, curr) {
//   if(curr.age < 20) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// console.log(output);

//-----------------Promises-----------------
// const GitHub_API = "https://api.github.com/users/";
// const user = fetch(GitHub_API);

// console.log(user);
// user.then( (data) =>{
//   console.log(data);
// });

//---------------------async & await-----------------------

// async function getData() {
//   return "Nameste";
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved!!");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved!!");
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved!!");
//   }, 20000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved!!");
//   }, 40000);
// });

//await can only be used inside an async function
// async function handlePromise() {
//   console.log("Hello World");
//   //js Engine was waiting for promise to resolved
//   const val = await p;
//   console.log("Namaste JavaScript");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Namaste JavaScript 2");
//   console.log(val2);
// }
// handlePromise();

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste JavaScript");
// }

// getData();

//--------------Real world example of async and await--------------

// const API_URL = "https://api.github.com/users/tapas20";

// async function handlePromise() {
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handlePromise();

//error handling

// const API_URL = "https://api.github.com/users/tapas20";

// async function handlePromise() {

//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);

// }

// handlePromise().catch ((err) => console.log(err));

//Promise.all-----------------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
//   // setTimeout(() => reject("p1 Fails"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 1000);
//   //   setTimeout(() => reject("p2 Fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 Sucess"), 2000);
//   //   setTimeout(() => reject("p3 Fails"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//promise.allSettled---------------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
//   // setTimeout(() => reject("p1 Fails"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("p1 Sucess"), 1000);
//   setTimeout(() => reject("p2 Fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 Sucess"), 2000);
//   //   setTimeout(() => reject("p3 Fails"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//promise.race------------------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 Sucess"), 3000);
//   // setTimeout(() => reject("p1 Fails"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("p1 Sucess"), 1000);
//   setTimeout(() => reject("p2 Fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 Sucess"), 2000);
//   //   setTimeout(() => reject("p3 Fails"), 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//promise.any-----------------

// const p1 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("p1 Sucess"), 3000);
//   setTimeout(() => reject("p1 Fails"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("p1 Sucess"), 1000);
//   setTimeout(() => reject("p2 Fails"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   // setTimeout(() => resolve("p3 Sucess"), 2000);
//   setTimeout(() => reject("p3 Fails"), 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });

//------------------------------------------this keyword-----------------------------------------
// "use strict";
// //this in global space
// console.log(this);

// //this inside a function
// function x() {
//   console.log(this);
// }
// x();
// window.x();

// //this inside a method
// const obj = {
//   a: 10,
//   x: function() {
//     console.log(this.a);
//   }
// }

// obj.x();

//call, apply & bind function
// const student = {
//   name: "Tapas",
//   printName: function() {
//     console.log(this.name);
//   }
// }

// student.printName();

// const student2 = {
//   name: "Tapu"
// }

// student.printName.call(student2);

//this inside arrow function

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this);
//   }
// }
// obj.x();

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this);
//   }
// }
// obj.x()

//call, apply & bind function
// let name1 = {
//   firstname: "Tapas",
//   lastname: "Jyoti",
//   printFullName: function () {
//     console.log(this.firstname + " " + this.lastname);
//   },
// };
// name1.printFullName();

// let name2 = {
//   firstname: "Tapu",
//   lastname: "Babu"
// }
// name1.printFullName.call(name2);


let name1 = {
  firstname: "Tapas",
  lastname: "Jyoti",
};

let printFullName = function (hometown, state) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}
//call
printFullName.call(name1, "Bhubaneswar", "Odisha");

let name2 = {
  firstname: "Tapu",
  lastname: "Babu"
}
//apply
printFullName.apply(name2, ["Keonjhar", "Uttarakhand"]);

//bind
let printMyName = printFullName.bind(name1, "Bhubaneswar", "Odisha");
printMyName();