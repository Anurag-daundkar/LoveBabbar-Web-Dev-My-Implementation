// Compile Time Error
// console.log(10;

// Runtime error
// console.log(x);




// try and Catch
try{
    console.log(x);
}
catch(err)
{
    console.log("Declear X first then use it");
    console.log("And the error is : ", err);
}


console.log();



try{
    console.log("Hello I am inside Try");
    console.log(x);
}
catch(err)
{
    // console.log(x);          -> if this is their then after finally no line will be executed only till finally
    console.log("Hello I am inside Catch");

    try{
        console.log("Inside Catch's Try")
        console.log(x);
    }
    catch(e){
        console.log("Inside Catch's catch")
    }
}
finally{
    console.log("Hello I am inside Finally");
}


try {
    if(true) {
        throw new Error("Ok");
    }
    
} 
catch (err) {
    console.log("Caught an error:", err.message);
}