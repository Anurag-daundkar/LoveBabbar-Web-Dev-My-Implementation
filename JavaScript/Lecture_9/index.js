class Human{
    //properties
    age = 21;
    #weight = 60;   // Private
    height = 6;
    name;
    class;

    // Constructor
    constructor(newName, newClass)
    {
        this.name = newName;
        this.class = newClass; 
    }
    //behaviour
    running()
    {
        console.log("Hello I am Running");
    }
    walking()
    {
        console.log("Hello I am Walking");
    }

    // One way of Sending data outside the class
    get getter()
    {
        return this.#weight;
    }
    set setter(val)
    {
        this.#weight = val;
    }

    // Another way of sending data outside the class
    getter2()
    {
        return this.#weight;
    }
    setter2(value)
    {
        this.#weight = value;
    }
}

// Object Creation
let Obj = new Human;

// Printing one properties of class
console.log(Obj.age);
// Printing one function
Obj.running();


// console.log(#weight);   Error because weight is a private

// Using of Getter and Setters
console.log(Obj.getter);
Obj.setter =19;
console.log(Obj.getter);

console.log();

// Another way of using Getter and Setters
console.log(Obj.getter2());
Obj.setter2(100);
console.log(Obj.getter2());




// Creating Object 2
let Obj2 = new Human("Anurag" , "A");
console.log(Obj2.name);
console.log(Obj2.class);


// Default Parameter

// Basic Default parameter of multiple parameters
function sayName(first = "Hello", second = "World")
{
    console.log("My name is : ", first, second);
} 
sayName("Anurag");

// Of Object and array
function sayName1(first = {age : 12, wt : 60}, second = ["Anurag", "Santosh", "Daundkar"])
{
    console.log(first, second);
}
sayName1();

// of Null and undefined
function sayName3(first = "Anurag", second = "Daundkar")
{
    console.log(first, second);
}
sayName3(null, undefined);

// of Functions
function age(){
    return 21;
}

function utility()
{
    console.log(val = age());
}

utility();

