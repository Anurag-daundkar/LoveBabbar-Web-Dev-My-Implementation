let obj = {
    age : 21,
    height : 6,
    weight : 60
};

// we can assign property outside too
obj.color = "White"; 

// We can directly assign obj
let obj2 = obj;
console.log(obj2);      // Here it is not passed but it is another reference for the same obj

// We need to clone the object using three was

// 1. Spread
let dest = {...obj};
dest.color = "Black";
console.log(dest);

// 2. Using Assign Operator
let dest2 = Object.assign({}, obj);
console.log(dest2);

// we can assign two objects too
let obj3 = {
    school : "PPS",
    Home : "World"
}

let dest3 = Object.assign({}, obj, obj3);
console.log(dest3);

// 3. Using Itration
let dest4 = {};

for(let a in obj)
{
    let newKey = a;
    let newValue = obj[a];
    dest4[newKey] = newValue;
}
console.log(dest4);