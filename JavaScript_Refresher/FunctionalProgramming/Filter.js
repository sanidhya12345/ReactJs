let arr=[1,2,3,4,5,6,7,8,9,10]

const even=arr.filter(element=>element%2==0)
console.log(even)


const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

const scoreMoreThanEighty=scores.filter(value=>value.score>80)
console.log(scoreMoreThanEighty)