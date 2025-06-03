const prompt = require("Prompt-sync")();
console.log("Welcome to bank")
let balance = prompt("Enter Your Balance:   ");
while (balance != 0){
	if (balance < 0){
		console.log("Invalid Amount. Please Enter a valid amount")
		continue;
	}else{
		let withdraw = prompt("Enter amount to withdraw:   ")
			if (withdraw <= 0) console.log("Invalid Amount. Please ");
			else if (withdraw > balance) console.log("Insufficient Funds");
			else if (withdraw % 500 != 0) console.log("Invalid Amount. Please Amount must be multiples of 500 0r 1000");
			else if (withdraw > balance * 90 / 100) console.log("Invalid Amount, Please Amount to be withdrawn must not exceed 90% of your account balance");
			else{
				balance = balance - withdraw - 100
				console.log("withdrawn amount is:  " + withdraw + ", withdrawal fee: 100. Account Balance is:  " + balance)
				break;
			};
		}
}