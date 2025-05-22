const prompt = require("Prompt-sync")();

let operator = Number(prompt("What arithmetic do you want to do? Press 0 for Addition. Press 1 for subtraction. Press 2 for multiplication. Press 3 for Division:   "));
let left_operand = Number(prompt("Enter a Number:   "));
let right_operand = Number(prompt("Enter a number:  "));

let ans = 0;
switch(operator){
	case 0: 
		console.log("You Selected Addition");
		ans = left_operand + right_operand
		console.log(ans) 
		break;
	case 1: 
		console.log("You Selected Subtraction");
		ans = left_operator - right_operator
		console.log(ans)
		break;
	case 2: 
		console.log("You Selected Multiplication");
		ans = left_operand * right_operand
		console.log(ans)
		break;
	case 3:
		console.log("You Slected Division");
		ans = left_operand / right_operand
		console.log(ans)
		break;
	default: 
		ans = "NaN"
		console.log(ans)
}