let arr=[1,2,3,4,5,6]

const sumArray=arr=>{
    let sum=0;
    const callback=(item)=>{
        sum+=item;
    }
    arr.forEach(callback)
    return sum;
}
console.log(sumArray(arr))