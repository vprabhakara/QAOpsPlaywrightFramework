let a=10
let b =20

console.log(a+b)

var array = [20,30,13,49,80,77]
let count = array.length
console.log(count)
array.push(65)
console.log(array)
count = array.length
console.log(count)

console.log(array.includes(20))
let checkEvenNumbers = array.filter(even=>even%2==0)
console.log(checkEvenNumbers)
let multipliedArray = checkEvenNumbers.map(score=>score*3)
console.log(multipliedArray)
let totalMarks = multipliedArray.reduce((sum,val)=>sum+val,0)
console.log(totalMarks);