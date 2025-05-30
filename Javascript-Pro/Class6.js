const person = {
	name : "chinedu",
	age : 16,
	gender : "sheMale",
	password: "34523"
};

person.color = "black";
person.password = "newpassword1234";

//delete person.name;


//this prints the value in the variable
console.log(Object.values(person)); 

//this prints the varaibles of the object
//console.log(Object.keys(person));

//this prints the variable and the objects 
//console.log(Object.entries(person));