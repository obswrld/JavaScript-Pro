function ATMvalidation(cardNumber) {
	for(let i = 0; i < cardNumber.length; i++){
		if (typeof cardNumber[i] !== "number"  || isNaN(cardNumber[i])){
			return{
					Valid: False, reason: "Card number do not contain numeric values. "
			}
		}
	}

let visaCard = {
			Valid: true, 
			Issuer: "Visa card"
		};

let masterCard = {
			Valid: true, 
			Issuer: "Master card" 
		};

let discoverCard = {
			Valid: true,
			Issuer: "Discover card" 
		};

let americanExpress = {
			Valid: true,
			Issuer: "American Express card"
		};

let Invalid = {
			Valid: false, 
			Reson: "Invalid Length"
		};

if (cardNumber[0] == 4 && cardNumber.length == 16) return visaCard;
else if (carNumber[0] != 4 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] == 4 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] != 4 && cardNumber.length == 16) return Invalid;
else if (cardNumber[0] == 5 && cardNumber.length == 16) return masterCard;
else if (cardNumber[0] != 5 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] == 5 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] != 5 && cardNumber.length == 16) return Invalid;
else if (cardNumber[0] == 6 && cardNumber.length == 16) return discoverCard;
else if (cardNumber[0] != 6 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] == 6 && cardNumber.length != 16) return Invalid;
else if (cardNumber[0] != 6 && cardNumber.length == 16) return Invalid;
else if (cardNumber[0] == 3 && cardNumber.length == 15) return americanExpress;
else if (cardNumber[0] != 3 && cardNumber.length != 15) return Invalid;
else if (cardNumber[0] == 3 && cardNumber.length != 15) return Invalid;
else if (cardNumber[0] != 3 && cardNumber.length == 15) return Invalid;
};

firstNum = [4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7];
let result =  ATMvalidation(firstNum);
console.log(result);