// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async work complete");
//     resolve();
//   }, 3000);
// });

// promise.then(() => {
//   console.log("Success");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello");
//     resolve();
//   }, 3000);
// }).then(() => {
//   console.log("World");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello");
//     resolve({ name: "Tapas", age: 20 });
//   }, 3000);
// });

// promiseThree.then((data) => {
//   console.log(data);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ userName: "Tapas", password: 1234 });
//     } else {
//       reject("ERROR : Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((data) => {
//     console.log(data);
//     return data.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise is finally resolved or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "JavaScript", password: 1234 });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 3000);
// });

// async function comsumePromiseFive() {
//   try {
//     const data = await promiseFive;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// comsumePromiseFive();

// Fetch API using async await

// async function allUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E : ", error);
//   }
// }

// allUserData();

// using .then() method

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
