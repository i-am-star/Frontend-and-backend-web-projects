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
<<<<<<< HEAD
 for(var i = 2020; i<2025; i++) {
    console.log(i)
    for(var k = 1; k < 13; k++) {
    console.log(k)
   }
 }
=======


//ASSIGNMENT

for(var i=1; i<=10; i++){
	
	if(i==1){
		console.log("Gold medal");
	}
else if(i==2){
	console.log("silver medal");
	}
else if(i==3){ 
	console.log("Bronze medal");
}
else {
	console.log(i,"Level failed");
}

}

// Using switch instead of if-else
for(var i=1; i<=10; i++){
	switch(i){

	case 1: 
	console.log("Gold medal");
		break;
		
	case 2; 
	console.log("Silver medal");
	break;
	
	case 3;
	console.log("Bronze medal");
	break;

default: 
	console.log(i, "Level failed");

	}
}

>>>>>>> 9518517da3a5c04aa9be1908e7bc9893c7f05335
