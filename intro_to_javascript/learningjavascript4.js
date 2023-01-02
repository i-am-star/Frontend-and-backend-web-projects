//funtions
//Declaring and calling a function that displays a person's name and lastname
function great(name, lastname){

    console.log("Hello", name, lastname);
    }
    great('smith', 'davidson')
    //declaring and calling a function without parameters that adds two numbers
function adder(){
var x = 10;
var y = 20;
var z = x + y; 
console.log("Adding", x, "and", y, "will result to:", z);   
}
adder()
//declaring and calling a function with parameters that add five numbers.
function addNum (a,b,c,d,e) {
    var x = a + b + c + d + e;
console.log(a, "+", b, "+", c, "+", d, "+", e, "=", x);
}
addNum(5,5,24,5,10 )

//Storing data in arrays
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[0]);