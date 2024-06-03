let arr=[1,2,3,4,5];

const sumArray=arr=>{
    let sum=0;
    arr.forEach((element)=>{
        sum+=element;
    })
    return sum;
}
console.log(sumArray(arr));