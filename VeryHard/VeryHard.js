function add(p1,p2){
    return p1 + p2;
}
function subtract(p1,p2){
    return p1 - p2;
}
function multiply(p1,p2){
    return p1 * p2;
}
function divide(p1,p2){
    return p1 / p2;
}

var num1 = prompt("Please input your first number");
var operator = prompt("Please input your operator");
var num2 = prompt("Please input your second number");
num1 = parseInt(num1);
num2 = parseInt(num2);

if(operator === "+"){
    console.log(`${num1} + ${num2} = ${add(num1,num2)}`);
} else if(operator === "-"){
    console.log(`${num1} - ${num2} = ${subtract(num1,num2)}`);
}else if(operator === "*"){
    console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);
} else if(operator === "/"){
    console.log(`${num1} / ${num2} = ${divide(num1,num2)}`);
}