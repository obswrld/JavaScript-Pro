let arrayOfNumbers = [2, 3, 5, 6, 7];
const printNumbers =(array)=>{
	for(let number of array){
		console.log(number)
	};
};

printNumbers(arrayOfNumbers)

module.exports = arrayOfNumbers
//const array = require ("../folderName/fileName")for it being outside the folder
//const array = require("./fileName")for it being in the same folder