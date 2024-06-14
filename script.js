const arr = ['ECE', 'CSE', 'IT', 'EEE', 'MECH', 'CIVIL'];
const list = document.getElementById('departments-list');

arr.forEach(function(department) {
    const listItem = document.createElement('li');
    listItem.textContent = department;
    list.appendChild(listItem);
});
console.clear();
const number = [1, 2, 3, 4, 5];
const doubleValue = number.map(num => num * 2);
console.log(doubleValue);
console.log(number);
const eveodd= num.filter(num=>num%2==0)

console.log(eveodd);
console.log(num);
const s=num.reduce((accumulator,currentval)=>accumulator+currentval,0);
console.log(s);
console.clear();


// Conversion rate from USD to INR
const conversionRate = 75;

// Array of dollar values
const dollarValues = [1, 2, 3, 4, 5];

// Convert dollar values to rupees using map
const rupeeValues = dollarValues.map(dollar => dollar * conversionRate);
console.log(rupeeValues);  // 

// Sum of rupee values using reduce
const totalRupees = rupeeValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalRupees);  



// Array of 5 numbers
const numbers = [10, 25, 30, 45, 50];


const max = 0;

// Use filter to get numbers greater than the threshold
const greater = numbers.filter(num => num > max);

console.log(greater);  

console.clear();
let a=[1,1,2,3,4,5,6,7,8,9]
let myset = new Set(a);
console.log(myset);

console.log(a);

let myset2 = new Set();
myset2.add(4);
myset2.add(5);
myset2.add("elakkiya");
myset2.add({ 'a': 1, 'b': 2 });
myset2.add(4);
myset2.add({ 'a': 1, 'b': 2 });

console.log(myset2);
