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
// const p1 = new Promise((resolve, reject) => {
//   let condition1 = true
//   setTimeout(() => {
//     if (condition1) {
//       return resolve("First")
//     } else {
//       return reject("Fail First")
//     }
//   }, 2000)
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
//   .then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });

// output:fIRST


//Promise.allSettled()
//Case 1: All Promises Resolved

// const p1 = Promise.resolve("HTML");
// const p2 = Promise.resolve("CSS");
// const p3 = Promise.resolve("JavaScript");

// Promise.allSettled([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   });
// output:
// [
//   { status: "fulfilled", value: "HTML" },
//   { status: "fulfilled", value: "CSS" },
//   { status: "fulfilled", value: "JavaScript" }
// ]


// Case 2: All Promises Rejected
// const p1 = Promise.reject("API Error");
// const p2 = Promise.reject("Network Error");
// const p3 = Promise.reject("Server Error");

// Promise.allSettled([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   });
// output:
// [
//   { status: "rejected", reason: "API Error" },
//   { status: "rejected", reason: "Network Error" },
//   { status: "rejected", reason: "Server Error" }
// ]

// Case 3: Some Resolved and Some Rejected
// const p1 = Promise.resolve("Data Loaded");
// const p2 = Promise.reject("API Failed");
// const p3 = Promise.resolve("User Found");

// Promise.allSettled([])
//   .then((result) => {
//     console.log(result);
//   });
// output:
// [
//   { status: "fulfilled", value: "Data Loaded" },
//   { status: "rejected", reason: "API Failed" },
//   { status: "fulfilled", value: "User Found" }
// ]

// Promise.any()
// case-1 First Promise Resolved
// const p1 = Promise.resolve("HTML");
// const p2 = Promise.resolve("CSS");
// const p3 = Promise.resolve("JavaScript");

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   output:HTML

// Case 2: Some Rejected and One Resolved
// const p1 = Promise.reject("API Failed");
// const p2 = Promise.reject("Server Failed");
// const p3 = Promise.resolve("Data Loaded");

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   output:Data Loaded

// Case 3: All Promises Rejected

// const p1 = Promise.reject("API Error");
// const p2 = Promise.reject("Network Error");
// const p3 = Promise.reject("Server Error");

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(error.errors);
//   });

// output:
// AggregateError: All promises were rejected

// ["API Error", "Network Error", "Server Error"]



// Case 4: Fastest Promise Wins

// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Server 1"), 3000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Server 2"), 1000);
// });

// const p3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Server 3"), 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   });

//   output:Server 2

// Case 5: Empty Array

// Promise.any([])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// output: AggregateError: All promises were rejected



// Case 6: Mix of Delayed Resolve and Reject
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Failed 1"), 1000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Success 2"), 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Failed 3"), 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// output:Success 2

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Failed 1"), 3000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Success 2"), 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Failed 3"), 3000);
// });

// Promise.race([p2, p1, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// output:Failed 1

/*------------------------------------- async and awit **************************/
// Example:1
// async function greet() {
//   return "Hello";
// }

// console.log(greet()) ==> Promise { 'Hello' }
// greet().then((result) => {
//   console.log(result);==> Hello
// })

// output:Promise { 'Hello' }

// function greet() {
//   return Promise.resolve("Hello");
// }


// Example-2

// async function demo() {
//   console.log("1");

//   await Promise.resolve();

//   console.log("2");
// }

// demo();

// console.log("3");

// output:1 3 2



// Example-3

// async function demo() {
//   const result1 = "1";

//   await Promise.resolve();

//   const result2 = "2";

//   return { result1, result2 };
// }

//   demo().then((result) => {
//     console.log(result);
//   })

// console.log("3");


// output:
// 3
// { result1: '1', result2: '2' }

// Example-4:
// async function demo() {
//   await new Promise(resolve =>
//     setTimeout(resolve, 3000)
//   );

//   console.log("Done");
// }

// demo();

// console.log("Running");

// output:
// Running
// Done




/********************************************** Event loop*********************** */
// Example-1
// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

// outOut:Start, End, Promise, Timeout

// Example-2
// async function demo() {
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
// }
// console.log("Start");
// demo();
// console.log("End");

// Output: A, END, B


// Example-5
// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3");
// });

// console.log("4");

// output:1,4, 3, 4



/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/***********************************************************************************************************/
/*************************** micro and marcko task based question ******************************************/
/*-------------------------------------------------------------BASIC QUESTION----------------------------------------------*/
// Q.1
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C")
// output:A, C, B

//Q.2
// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// console.log("C");
// Output: A,C, B

//Q.3
// setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// console.log("C");
//Output:C, B, A

//Q.4
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");
//Output: A, D, C, B


//Q.5
// console.log("Start");
// Promise.resolve().then(() => console.log("Promise"));
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");
// Output:Start, End, Promise, Timeout

//Q.6
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// });
// console.log("D");
// Output:A, D, B, C

//Q.7
// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// }, 0);
// console.log("D");
// Output:A, D, B, C

//Q.8
// Promise.resolve().then(() => console.log("A"));
// Promise.resolve().then(() => console.log("B"));
// console.log("C");
// Output:C, A,B

//Q.9
// setTimeout(() => console.log("A"), 0);
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// Output:C, A, B

//Q.10
// console.log("A");
// (async () => {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// })();
// console.log("D");
// Output:A, B, D, C

// Note:functions are called synchnously, and async functions do not go to queues, micro and macro tasks go.
// so function will run as it is and executes sync then push micro into microQueue, and macro to macroQueue

/*------------------------------------------------MEDIAM QUESTION----------------------------------------------*/
//Q.11
// async function test() {
//     console.log("A");
//     await null;
//     console.log("B");
// }
// test();
// console.log("C");

//Output:A, C, B

// Q.12
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("C");
// });
// console.log("D");

// Output: A, D, C, B


//Q.13
// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));
// Output:A, D, B, C


// Q.14
// Promise.resolve().then(() => {
//     console.log("A");
//     setTimeout(() => console.log("B"), 0);
// });
// console.log("C");
// Output:C, A, B


//Q.15
// console.log("A");
// async function foo() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }
// foo();
// console.log("D");
// Output:A, B, D, C

//Q.16
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
// }).then(() => {
//     console.log("C");
// });
// console.log("D");
//Output: A, D, B, C

//Q.17
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => {
//     console.log("C");
//     setTimeout(() => console.log("D"), 0);
// });
// console.log("E");

//Output: A, E, C, B, D


//Q.18
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     return Promise.resolve();
// }).then(() => {
//     console.log("C");
// });
// console.log("D");
//Output: A, D, B, C

//Q.19
// console.log("A");
// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }
// test();
// Promise.resolve().then(() => console.log("D"));
// Output:A, B, C, D


//Q.20
// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// }, 0);
// Promise.resolve().then(() => console.log("D"));
// console.log("E");
//Output:A, E, D, B, C


//Q.21
// console.log("A");
// queueMicrotask(() => console.log("B"));
// Promise.resolve().then(() => console.log("C"));
// console.log("D");
//Output: A, D, B, C


//Q.22
// console.log("A");
// queueMicrotask(() => {
//     console.log("B");
//     queueMicrotask(() => console.log("C"));
// });
// console.log("D");
// Output:A, D, B, C


//Q.23
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// queueMicrotask(() => console.log("C"));
// console.log("D");
//Output: A, D, C, B


//Q.24
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
// });
// console.log("D");
//Output: A, D, B, C


//Q.25
// console.log("A");
// (async () => {
//     console.log("B");
//     await null;
//     console.log("C");
// })();
// Promise.resolve().then(() => console.log("D"));
//Output:A, B, C, D


//Q.26
// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
// }, 0);
// console.log("D");
//Output: A, D, B, C

//Q.27
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// });
// console.log("D");
//Output: A, D, B, C



//Q.28
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// setTimeout(() => console.log("D"), 0);
// console.log("E");
//Output: A, E, C, B, D


//Q.29
// console.log("A");
// async function foo() {
//     console.log("B");
//     await null;
//     console.log("C");
// }
// foo();
// console.log("D");
// Promise.resolve().then(() => console.log("E"));
//Output: A, B, D, C, E



//Q.30
// console.log("A");
// Promise.resolve()
//     .then(() => console.log("B"))
//     .then(() => console.log("C"));
// setTimeout(() => console.log("D"), 0);
// console.log("E");
//Output:A, E, B, C, D

/*----------------------------------------------------ADVANCE QUESTION-----------------------------------*/
//Q.31
// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => console.log("C"));
// }, 0);
// Promise.resolve().then(() => {
//     console.log("D");
// });
// console.log("E");
// Output: A, E, D, B, C


//Q.32
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 0);
// (async () => {
//     console.log("C");
//     await null;
//     console.log("D");
// })();
// console.log("E");
//Output: A, C, E, D, B


//Q.33
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     setTimeout(() => console.log("C"), 0);
// });

// setTimeout(() => console.log("D"), 0);
//Output: A, B, D, C

// console.log("A");


// Q.34
// (async () => {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// })();
// setTimeout(() => console.log("D"), 0);
// Promise.resolve().then(() => console.log("E"));
// output:B, C, E, D


//Q.35
// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
//     setTimeout(() => {
//         console.log("C");
//         Promise.resolve().then(() => console.log("D"));
//     }, 0);
// });
// console.log("E");
//Output:A, E, B, C,  D


//Q.36
// console.log("A");
// async function foo() {
//     console.log("B");
//     await null;
//     console.log("C");
//     await null;
//     console.log("D");
// }
// foo();
// console.log("E");
//Output:A, B, E, C, D


// Q.37
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
//     setTimeout(() => console.log("D"), 0);
// });
// console.log("E");
// Output: A, E, C, B, D

/******************************************* */