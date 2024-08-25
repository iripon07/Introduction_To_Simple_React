// Template string 



// 2. Arrow function 
const getFiftyFive = () => 55
const addSixtyFive = (num) => num + 65

const numbers = [89, 55, 88, 14]
const student = {
    name: 'Shakib Al Hasan',
    age: 12,
    movies: ['King', "batman"]
}

// spread operator 
const newNumbers = [...numbers]
numbers.push(99)
numbers.push(99)
numbers.push(99)

const currentNUmbers = [...numbers, 100]

console.log(numbers);
console.log(newNumbers);
console.log(currentNUmbers);