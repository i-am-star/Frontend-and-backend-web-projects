//WRITING STATEMENTS
/*IF-ELSE
 A code that decides if a person passed the test using the if-else statement*/
var result = 39;
if( result >= 40) {
    console.log("Congratulations!!! You passed.")
} else {
    console.log("Unfortunately you failed.")
}
/* IF-ELSE AND ELSE IF. A code that determines what time of day it is. using the 24 hrs clock. 6 - 12 am is morning. 
13 - 16 pm is afternoon from 17 - 20 pm is goodevening.*/
var time = 20;
if ( time >= 4 && time < 12) {
    console.log("It is morning, You might want to have breakfast")
}
else if ( time >= 13 && time < 17) {
    console.log("It is noon, please have your lunch")
}
else {
    console.log("It is evening, dinner sounds like a good idea")
}

// A statement that determines an individual's income depending on age.
var age = 18;
if (age >= 65) {
    console.log("You get your income from your pension")
}
else if (age < 65 && age >= 18) {
console.log("Each month, you get a salary")
}
else if (age < 18) {
    console.log("You get an allowance")
}
else {
    console.log("The value of the age variable is not numerical")
}
// SWITCH. 
var grade = "b";
switch (grade) {
    case "A": 
    console.log("Great");
    break;
    case "B":
         console.log("Good");
    break;
    case "C":
         console.log("Okay");
    break;
    case "D":
         console.log("Pass");
    break;
    case "F":
         console.log("Fail");
    break;
    default: 
    console.log (grade, "is a wrong input.", "Your grade should contain a single uppercase letter from A-F")
}
// second example using a switch statement - daily schedule
var day = "Monday";
switch(day) {
    case "Sunday":
        console.log("Today is Sunday, you might want to visit grandma, and walk your dog");
        break;
    case "Monday":
        console.log("Today is Monday, you have an appointment with your hairdresser by 9:am");
        break;
    case "Tuesday":
            console.log("Today is Tuesday, you have a staff meeting by 11:am");
            break;
    case "Wednesday":
            console.log("Today is Wednesday, you have an appointment with your obygyn");
            break;
    case "Thursday":
            console.log("Today is Thursday, you have a meeting with your suppliers by 11:am");
            break;
    case "Friday":
            console.log("Today is Friday, you have to go for grocery shopping");
            break;
    case "saturday":
            console.log("Today is Saturday, it is gym day");
            break;
            default:
                console.log(day, "is a wrong input. Please input a day of the week from Sunday to Saturday.")


}