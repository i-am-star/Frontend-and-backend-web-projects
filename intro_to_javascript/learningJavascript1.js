/*getting familiar with datatypes and operators.*/

/*LOGICAL AND OPERATORS
this code is meant to check if the currentTime variable is between 9:am and 5:pm, therefore, it should return true if the
 currentTime variable is greater than 9 (true), and less than 17(true). i.e console.log(true && true) will output true, 
 and anything else will output false.*/
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17); 
//since the currentTime variable is 10, and 10 is greater than 9, and less than 17, the output will be true.

/*LOGICAL OR OPERATOR
this code is meant to return true if the value of the currentTime variable is not between 9 and 17. i.e the code should
console.log true if the value of currentTime variable is either less than 9 or greater than 17.*/
var currentTime1 = 7;
console.log(currentTime1 < 9 || currentTime1 > 17);
//

/* THE LOGICAL NOT OPERATOR
A code that will signify that a pet is no longer hungry, after being fed*/
var petHungry = true;
console.log("The pet is hungry:", petHungry)
console.log("Feeds the pet");
console.log("The pet is hungry:", !petHungry);
// the NOT operator was used to switch the petHungry variable from true to false.

/* THE MODULUS OPERATOR
A code that will show how many guests won't sit down in a small resturant that has 4 chairs per table and a total of 
5 tables and unexpectedly recieves 22 guests*/
var number_of_guests = 22;
var number_of_tables = 5;

console.log(number_of_guests % number_of_tables);



