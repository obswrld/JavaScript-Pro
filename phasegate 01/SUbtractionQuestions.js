const prompt = require("Prompt-sync")();
function getSubtractionQuestion(number1, number2){
	function subNumbers(){
			let number1 = Math.floor(Math.random() * 10000);
			let number2 = Math.floor(Math.random() * number1);
			let question = console.log("What is " + number1 + " - " + number2 + " :  ");
			let answer = number1 - number2
		return question, answer
		}
	return subNumbers()
}
let question, correctAnswer = getSubtractionQuestion()
let userAnswer = Number(prompt(question));
let attempt  = 2;
let questions = 0;
while (questions <= 10){
	let question, correctAnswer = getSubtractionQuestion()
	let userAnswer = Number(prompt(question));
	while (true){
		if (attempt == 0){
			break;	
		}
		if (userAnswer == correctAnswer){
			console.log("Very Good!")
			break;
		} else{
			attempt--;
			if (attempt > 0){
				console.log("Opps You have " + attempt + " attempts left. Enter One More Attempt:  ")
				userAnswer = Number(prompt(question));
				continue;

				if (userAnswer == correctAnswer){
					console.log("Congrats on your Second Attempt")
					break;
				} else{
					console.log("I'm Sorry. No trial left")
				}
			}
		}
	}
		console.log("The Next Question is:  ")
		question, correctAnswer = getSubtractionQuestion()
		userAnswer = Number(prompt(question));
		questions++;

} 

//if (attempt == 10){
//console.log("You have used all your attempts.")
//};

