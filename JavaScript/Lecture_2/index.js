// Inside Var redecleration and Redefination is Possible
var a = 10;
console.log(a);
var a = 'Anurag';
console.log(a);
a = null;
console.log(a);


// Inside Let only Redefine is possible
let b = 10;
console.log(b);
// let b = 20; --> Not Possible
b = true;
console.log(b);


// Inside Const Redefine and Redeclearation is not possible
const c = 10;
// const c = 20;    Not Possible
// c = 20;      Not possible


function Multiply(num)
{
    let ans = num*num;
    return ans;
}

let answer = Multiply(10);
console.log(answer);


// -----------------------------------------------------

// Different Datatypes

let number = 10;
console.log(typeof(number), number);

let string = 'Krishna';
console.log(typeof(string), string);

let boolean = true;
console.log(typeof(boolean), boolean);

let undefine;
console.log(typeof(undefine), undefine);

let NULL = null;
console.log(typeof(NULL), NULL);

let BigInt = 100000000000000000000000000000000000000000;
console.log(typeof(BigInt), BigInt);