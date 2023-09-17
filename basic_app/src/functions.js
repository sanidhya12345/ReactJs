const number1=parseInt(prompt("Enter number 1"))
const number2=parseInt(prompt("Enter number 2"))
export const addition=()=>{
    console.log(`Addition of ${number1} and ${number2} is ${number1+number2}`);
}
export const multiply=(n1,n2)=>{
    console.log(`Multiplication of ${number1} and ${number2} is ${number1*number2}`);
}
export const subtract=(n1,n2)=>{
    console.log(`Subtraction of ${number1} and ${number2} is ${number1-number2}`);
}
export const division=(n1,n2)=>{
    console.log(`Division of ${number1} and ${number2} is ${number1/number2}`);
}
export default(function doSomething(){
    return {addition,multiply,subtract,division};
})()