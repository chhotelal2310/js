/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/**************************************************************************/
/*********************************** Destructuring*************************/
/*------------------------------------Object destrucuring------------------*/
// let obj = { name: "chombi", age: 16 };
// let { name, age, country } = obj;
// console.log(name, age, country);//===>chombi 16 undefined

/*------------------------------------array destrucuring------------------*/
// let arr = [10, 20, 30, 40, 50]
// let [a, b, c, d, e, f] = arr;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// console.log(d); // 40
// console.log(e); // 50
// console.log(f); // undefined

/*------------------------------------destrucuring object in function parameter------------------*/
// function details({ name, age, city }) {
//    console.log(name); // chombi
//    console.log(age); // 16
//    console.log(city)// undefined
// }
// let obj = {
//    name: "chombi",
//    age: 16,
// }
// details(obj) // function cal

/*-------------------------------------------destrucuring Array in function parameter---------------*/
// function details([a, b]) {
//    console.log(a); // 10
//    console.log(b); // 20
// }
// let arr = [10, 20];
// details(arr) // function call


/*-------------------------------------------Argument Object---------------*/
// function add() {
//   console.log(arguments);
// }

// add(10, 20, 30);


/*---------------------------------------------- Promise-----------------------------*/
// Example-1
// const p = new Promise((resolve, reject) => {
//   let condition = true;
//   if (condition) {
//     return resolve("Sucess");
//   } else {
//     return reject("Rejected")
//   }
// });
// p.then((value) => {
//   console.log("Promise is resolve:", value)
//   //  output: Promise is resolve: Success.

// });
// p.catch((error) => {
//   console.log("Promise is rejected:", error)
//   //  output: Promise is rejected: Rejected.
// })
// p.finally(() => {
//   console.log("Promise is resolve rejected");
//   // output: Promise is resolve rejected

// })



// Example 2
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm a Promise!");
//   }, 5000);
// });
// promise
//   .then((value) => console.log(value)) // logs after 5 seconds: "I'm a Promise!"
//   .catch((error) => console.error(error)) // Handles any rejection
//   .finally(() => console.log("Done")); // runs regardless of success or failure


//Example 3 Promises chnaing
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });


//Example 4
// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// getData((data) => {
//   console.log(data);===>Data received
// });


/*------------------------------------- Promise Methode **************************/
//Methode Promise.all()
// Example-1
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
// .then((result) => {
//   console.log(result);
// });
// output:[ 'A', 'B', 'C' ]


// Example-2
// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B");
// const p3 = Promise.resolve("C");
// Promise.all([p1, p2, p3])
//   .then((result) => {
//   //this block is now execute
//     console.log(result);
//   }).catch((result) => {
//     console.log(result) output:==>B
//   })


// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3])
// .catch(console.log);
// output:B


//Methode Promise.race();
// Example-1
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("First"), 1000)
// );

// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 2000)
// );

// Promise.race([p1, p2])
// .then(console.log);

//Example-2
// const p1 = new Promise((resolve, reject) => {
//   let condition1 = true
//   setTimeout(() => {
//     if (condition1) {
//       return resolve("First")
//     } else {
//       return reject("Fail First")
//     }
//   }, 3000)
// }

// );

// const p2 = new Promise((resolve, reject) => {
//   let condition2 = false
//   setTimeout(() => {
//     if (condition2) {
//       return resolve("Second")
//     } else {
//       return reject("Fail Second")
//     }
//   }, 2000)
// }
// );


// Promise.race([p1, p2])
//   .then((result)=>{
//     console.log(result);
//   }).catch((error)=>{
//      console.log(error);==>Fail Second
//   });


// Example:3
const p1 = new Promise((resolve, reject) => {
  let condition1 = true
  setTimeout(() => {
    if (condition1) {
      return resolve("First")
    } else {
      return reject("Fail First")
    }
  }, 2000)
}

);

const p2 = new Promise((resolve, reject) => {
  let condition2 = false
  setTimeout(() => {
    if (condition2) {
      return resolve("Second")
    } else {
      return reject("Fail Second")
    }
  }, 2000)
}
);


Promise.race([p1, p2])
  .then((result)=>{
    console.log(result);
  }).catch((error)=>{
     console.log(error);
  });

  // output:fIRST