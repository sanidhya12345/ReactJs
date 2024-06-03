let arr=[1,23,4,5];

arr.forEach((element,index)=>{
    console.log(element,index);
})

let sum=0;
arr.forEach(num=>sum+=num)
console.log(sum)

let countries=["India","China","England","Finland"];

countries.forEach(country=>console.log(country.toUpperCase()));