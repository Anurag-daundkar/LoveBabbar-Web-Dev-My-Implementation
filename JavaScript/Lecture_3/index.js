// Operators and Conditions
console.log("Some Operations ");
let a = 2+4;
console.log("Addition: ", a);
a = 2/3;
console.log("Division: ", a);
a = 2%4;
console.log("Modolus: ", a);
a = 2**4;
console.log("Power of: ", a);


// ________________________________________

// Increment and Decrement Operators
console.log("Increment and Decrements ");
a = 16;
console.log(a, a);
console.log(a++, a);
console.log(++a, a);
console.log(a--, a);
console.log(--a, a);


// __________________________________________

// Comparision Operators
console.log("Comparision Operators");
a = 4;
let b = 10;
console.log(`a: ${a}, b: ${b}  a < b `, a < b);
console.log(`a: ${a}, b: ${b}  a > b` , a > b);
console.log(`a: ${a}, b: ${b}  a <= b` , a <= b);
console.log(`a: ${a}, b: ${b}  a>=b`, a >= b);
console.log(`a: ${a}, b: ${b}  a == b`, a == b);
console.log(`a: ${a}, b: ${b}  a === b`, a === b);
console.log(`a: ${a}, b: ${b}  a != b`, a != b);
console.log(`a: ${a}, b: ${b}  a !== b`, a !== b);


// _________________________________________

// Ternary Operator
console.log("Ternary Operators");

let c = (a > b) ? a : b;
console.log("c :", c);

// ___________________________________________

// Logical Operators && || !
console.log("Logical Operators");
console.log((-1 && -1));
console.log(1 && 1);

console.log(1 || -1);
console.log(4 || 2);

console.log(!(1 && -1));

// ________________________________________

// Bitwise Operators
console.log("Bitwise Operators ");
console.log(2&3);
console.log(2|3);
console.log(~2);
console.log(4<<2);
console.log(8>>2);
console.log(1 ^ 1);


// _____________________________________________

// Conditions "if" and "else" and also "else if"
console.log("If and Else Conditions");
if(2 > 3)
    console.log('Yes1');
else if(3 < 2)
    console.log('Yes2');
else    
    console.log('No');

// ______________________________________________

// Switch
console.log("Switch");
let d = 2;
switch(d)
{
    case 1:
        console.log("1111111");
        break;
    case 2:
        console.log("2222222");
        break;
        
    case 3:
        console.log("3333333");
        break;
    case 4:
        console.log("4444444");
        break;
}
