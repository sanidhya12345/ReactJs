const areaOfRectangle=(length,breadth)=>{
    return length*breadth;
}

function calculateArea(areaOfRectangle,len,bre){
    return areaOfRectangle(len,bre);
}
console.log(calculateArea(areaOfRectangle,30,10))