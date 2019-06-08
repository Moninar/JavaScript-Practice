
const a = [1, 2, 3]
const doubled = a.forEach((num, index) => a[index] = num = num * 2)
console.log(a)

const b = [1, 2, 3]
const triple = b.map((num, index) => num * 3)
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
myFunction()

// returns from functions


