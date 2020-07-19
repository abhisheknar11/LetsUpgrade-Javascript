console.log("Calculator");

//debugger

/*
let num1=prompt("enter first number");
let num2=prompt("enter second number");
let op=prompt("enter the operator");

switch(op)
    {
    case '+': result=(parseInt(num1) + parseInt(num2));break;
    case '-': result=(parseInt(num1) - parseInt(num2));break;
    case '*': result=(parseInt(num1) * parseInt(num2));break;
    case '/': result=(parseInt(num1) / parseInt(num2));break;
    case '%': result=((parseInt(num1) / parseInt(num2))*100);break;
    default:alert("Error");
    }

console.log(result);
*/


let num1=prompt("enter the equation SEPARATED BY SPACE","5 + 6");
let num = num1.split(" ")

switch(num[1])
    {
    case '+': res=(parseInt(num[0]) + parseInt(num[2]));break;
    case '-': res=(parseInt(num[0]) - parseInt(num[2]));break;
    case '*': res=(parseInt(num[0]) * parseInt(num[2]));break;
    case '/': res=(parseInt(num[0]) / parseInt(num[2]));break;
    case '%': res=((parseInt(num[0]) / parseInt(num[2]))*100);break;
    }

console.log(`${num1} = ${res}`);
