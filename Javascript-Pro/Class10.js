let numberOne = 3;
function Math(number){
	let numberTwo = 2;
	function multiply(value){
		let product = value * number
		return product
	};
	return multiply(numberTwo)
};
console.log(Math(numberOne))