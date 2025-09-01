// Basic for loop
for(let i = 0 ; i < 5 ; i++)
{
    console.log("Hello I am for loop");   
}

// Basic while loop
let t = 5;
while(t != 0)
{
    console.log("Hello I am while loop");
    t--;
}

// Basic do-while loop
t = 5;
do{
    console.log("Hello I am do-while loop");
    t--;
}while(t != 0)

// when Loop becomes infinite loop
// t = 5;
// while(t != 0)
// {
//     if(t == 3)
//         continue;   // Here no furthur priniting will be done because on 3 it does not go down it goes up with same value 3 so infinte loop
//     console.log("Hello");
//     t--;
// }

console.log();
console.log("SRTINGS: ");
console.log();
let a = "Anurag"; 
console.log(a);
console.log(`Hello I want 
me to be printed 
on multiple lines.....
....`);


let str1 = "a";             // primitive
let str2 = new String("a"); // object

console.log(str1 == str2);  // true   (values compared after type coercion)
console.log(str1 === str2); // false  (different types: string vs object)


// Concatination
str1 = "Anurag"
str2 = "Daundkar"

let ans = str1+" "+str2;        // one way
console.log(ans);
ans = `${str1} ${str2}`         // second way
console.log(ans);
ans = `${str1} Santosh ${str2}` // Third Way
console.log(ans);

console.log(`Length of ans is ${ans.length}`);

console.log(`UpperCase : ${ans.toUpperCase()}`);
console.log(`LowerCase : ${ans.toLowerCase()}`);


console.log(`substrings : ${ans.substring(0,3)}`)
console.log(`substrings : ${ans.substring(3)}`)

// Splliting sentence
let words = ans.split(' ');
console.log(words);
words = ans.split('r');
console.log(words);

// what if we want to display in double quotes
// console.log("A "S" D") ------------ it will show error
console.log("A \"S\" D");

console.log(words.join(" "));