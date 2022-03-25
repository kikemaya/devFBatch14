'use strict'

const arr1 = [ 'one', 'hola', 100, [], true ]

arr1[1] = 'two'

arr1.push(false, "hola mundo!")
arr1.pop()
arr1.unshift("zero", false, 100)
arr1.shift()

console.log(arr1.length);
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[3]);
}

arr1.forEach(element => {
    console.log(element);
});