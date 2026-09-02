/*-------------------------------------------var variable -------------------------------*/
/*
console.log(a);===>output: undefined
var a;
*/

/*------------------------------------- Function-----------------------------------------*/
// 1.Anonymous
// const greet = function () {
//     console.log("Hello greet this is anonymous function.");
// };
// greet();

//2.IIF

// Example:1
// (function () {
//     console.log("Hello this is runs immediately");
// })();

//Example:2
// (() => {
//     console.log("Hello this is runs immediately");
// })();

//3.Function Expression
// const greet = function () {
//     console.log("This is the function expression.")
// }
// greet();

//4.callback function

//Example1
// function greet(name, callback) {
//     console.log("Hello, " + name)
//     callback();
// }
// function afterGreet() {
//     console.log("I am callback function.")
// }

// console.log("Nice to meet you!");
// greet("Alice", afterGreet);

// Example:2
// console.log("line number one executed");
// setTimeout(() => {
//     console.log("line number two executed")
// }, 4000)
// console.log("execution was gone");

//5.Higher Order function
// function greet(name, callback) {===>this is the higher order function
//     console.log("Hello, " + name)
//     callback();
// }
// function afterGreet() {
//     console.log("I am callback function.")
// }

//6.Arrow function
// const banaras = () => {
//     console.log("I am arrow function.");
// };
// banaras();

//nested function
// function outer() {
//     console.log("Outer Function.");
//     return function inner() {
//         console.log("Inner function.");
//     }
// }
//first ways calling
// let fun = outer();
// fun();

//second ways calling
// outer()();