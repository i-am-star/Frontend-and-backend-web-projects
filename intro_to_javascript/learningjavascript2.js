//looping constructs
//Using for loop to create a countdown that outputs happy new year.
 for(i=10; i>0; i--){
    console.log(i)
}
console.log("Happy New year"); 

//using while loop to perform a countdown

var i = 20;
while (i > 5) {
    console.log(i);
    i--
}
console.log("wait a minute");//i is equal to 20. while i is greater than 5, minus 1 and repeat till i is equal to 5. and print wait a minute

//using while loop to count
var age = 10;
while(age < 20); {
    console.log(age);
    age++;
}//age is equal to 18, as long as age is less than 20, add 1 till age is equal to 20. then print you need to be at least 18 years old
console.log("You need to be atleast 18 years old.");
               
 //nested loops
 for(var i = 2020; i<2025; i++) {
    console.log(i)
    for(var k = 1; k < 13; k++) {
    console.log(k)
   }
 }
