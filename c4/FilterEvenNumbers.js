function filterEvenNumbers(arr) {
	const evenNumbers = [];
	let count = 0;

	for (let i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			evenNumbers.push(arr[i]);
			count++;
		}
	}

	return {
		evenNumbers: evenNumbers,
		count: count
	}
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8,])); 
console.log(filterEvenNumbers([3, 6, 7, 8, 5,]));