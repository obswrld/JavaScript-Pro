const prompt = require("Prompt-sync")();
	function getSubNumbers(){
			let number1 = Math.floor(Math.random() * 10000);
			let number2 = Math.floor(Math.random() * number1);
		return {
			question: "What is " + number1 + " - " + number2 + " ? ",
			answer: number1 - number2
		};
	}
let questions = 0;
let questions2 = 3;
let result = 0;
while (questions < questions2){
	let {question, answer:  correctAnswer} = getSubNumbers()
	let userAnswer;
	let attempt  = 2;

	console.log(question)
	while (attempt > 0){	
		userAnswer = Number(prompt("Your answer is:  "));

		if (userAnswer === correctAnswer){
			console.log("Very Good!")
			result++;
			break;
		} else{
			attempt--;
			if (attempt > 0){
				console.log("Opps You have " + attempt + " attempts left. Enter One More Attempt:  ")
			} else{
					console.log("I'm Sorry. No trial left");
				}
			}
		}
		questions++;
		console.log("The Next Question is:  ")
} 
console.log("Your score is:  " + result + " / " + questionss2);

//if (attempt == 10){
//console.log("You have used all your attempts.")
//};

