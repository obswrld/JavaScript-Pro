let numberOne = 3;
let numberTwo = 2;
function getAnswer(number, secondNumber){
	let numberThree = 4;
	function multiply(){
		let result = secondNumber * number * numberThree
		return result
	};
	return multiply();
};
let finalResult = getAnswer(numberOne, numberTwo);
console.log(finalResult);