// what is symbol:
// Symbol is a data type in typescript which is used to create unique and constant identifiers for objects. It was introduced in ES6.
var sym01 = Symbol("key1");
var sym02 = Symbol("key1");
var sym03 = Symbol("key1");

var symA = Symbol();
var symB = Symbol();
console.log(sym01); // Symbol(key1)
console.log(sym02); // Symbol(key1)
console.log(sym03); // Symbol(key1)
console.log(symA); // Symbol()
console.log(symB); // Symbol()

console.log(symA === symB); // false
console.log(symA == symB); // false
console.log(sym01 == sym02); // false
console.log(sym01 == sym03); // false
console.log(sym02 == sym03); // false