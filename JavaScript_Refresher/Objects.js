const rectangle={
    width:100,
    height:200
}
console.log(rectangle.width);
console.log(rectangle.height);


const profile={
    name:"sanidhya varshney",
    age:21,
    from:"Aligarh",
    profession:"software developer",
    skills:[
        "Python","CSS","Java","Javascript","SQL","C","HTML","Node"
    ],
    isMarried:false
}
 console.log(profile)
console.log(profile.profession);
console.log(profile.skills[4]);

//Object Methods:-

//1.copy the object:- copy the object without modifying it

const copyProfile=Object.assign({},profile);
console.log(copyProfile);

//2.Getting Object keys:- To get the keys or properties of an object as an array

const keys=Object.keys(profile);
console.log(keys);

//3.Getting Object values: To get values of an object as an array

const values=Object.values(profile);
console.log(values);

//Getting object keys and values using Object.entries()

//Object.entries:To get the keys and values in an array

const enteries=Object.entries(profile);
console.log(enteries);

//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object

console.log(profile.hasOwnProperty('name'))