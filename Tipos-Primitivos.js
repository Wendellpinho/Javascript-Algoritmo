// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let myvariable = "My String";
let myvariable2 = 'My "String" com aspas simples';
var myvariable3 = `My Template Literal`;

let Ideal = 40;
// let msg = "I Need " + Ideal + " Years";
let msg = `I Need ${Ideal} Years`;

console.log(msg);
console.log("Hello " + "World");
console.log(typeof msg, typeof Ideal, typeof myvariable, " -- ", 20);

const n1 = 10;
const n2 = 1.1;
console.log(`A Typo Of n1 And ${typeof n1} and your value is ${n1}`);
console.log(`A Typo Of n2 And ${typeof n2} and your value is ${n2}`);

const isValid = false;
console.log(`isValid: ${isValid}`);

let varTest = null;
console.log(varTest);
console.log(typeof varTest);
varTest = 10;
console.log(typeof varTest, varTest);
