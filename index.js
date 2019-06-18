
const a = [1, 2, 3]
const doubled = a.forEach((num, index) => a[index] = num * 2)
console.log(a)

const b = [1, 2, 3]
const triple = b.map((num, index) => {
  return num * 3})
console.log(triple)

var log = () => console.log("document")
log()

let val = 10
val = 11
console.log(val)

// variables & function hosting
function myFunction() {
  console.log(myVar)
  var myVar = 1
  console.log(myVar)
  test()
  function test() {
    let t = 2
    console.log(t)
  }
}
myFunction();

// returns from arrow functions
(() => {console.log("arrow functions")})()
// myFunc()

// new prototype
function Person (name) {
}
Person.prototype.name = 'Alice';
var person = new Person();
console.log(Person.hasOwnProperty("name"));
// person.name = "Jonson";
console.log(person.__proto__.hasOwnProperty("name"));


// ajax
// This is the client-side script.

// Initialize the HTTP request.
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open('GET', '/send-ajax-data.php');

// Track the state changes of the request.
xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); // 'This is the output.'
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
};

// Send the request to send-ajax-data.php
xhr.send(null);