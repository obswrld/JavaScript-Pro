const prompt = require("prompt-sync")();

const count = prompt("How many numbers would you like to input:  ");
const number = Number(prompt("Enter the first Number:   "));
let sum = 0;
let min = number;
let max = number;

for (let i = 1; i < count; i++){
	const num = Number(prompt('Enter integer:  '));

	if(num < min){
		min = num
	}
	if(num > max){
		max = num
	}	
}
sum = max + min;
console.log('max:  ', max, ' min: ', min);
console.log('sum is:  ', sum);