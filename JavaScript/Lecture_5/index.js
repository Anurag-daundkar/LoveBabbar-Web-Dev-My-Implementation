
// Basic Function
function Name()
{
    console.log("Anurag Santosh Daundkar");
}
Name();

// Parameter Function
function printNumber(number)
{
    console.log(number);
}
printNumber('Hello');
printNumber('1');
printNumber(2);
printNumber(null);

// Two Parameters
function multiply(a, b)
{
    return a*b;
}
console.log("Multiplication of two numbers : ", multiply(5,2));

// Another Way
let Multiplication = function(a, b)
{
    return a*b;
}
console.log("Multiplication of two numbers : ", Multiplication(15,2));

// Using Arrow Function
let Mul = (a, b)=>{
    return a*b;
}
console.log("Multiplication of two numbers : ", Mul(25,2));


const print = ()=>{
    console.log("Hello I am Arrow Function");
}
print();