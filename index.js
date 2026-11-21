var num1= +prompt("Enter first number");
var num2= +prompt("Enter second number");

function calculate(operation){
    if(operation === "add"){
        var result = num1 + num2
    }
    else if(operation === "subtract"){
        var result = num1 - num2;
    }
    else if(operation === "multiply"){
        var result= num1 * num2;
    }
    else if(operation === "divide"){
        var result= num1 / num2;
    }
    else{
        alert("error");
    }
    
    return( alert(result));
}