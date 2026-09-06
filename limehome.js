
function changeWelcomeMessage() {
                document.getElementById("welcome").innerHTML = "My First JavaScript";
            }

// This is the first calculation
function calculateTotal(x,y,z) {

    // let x = 5;
    // let y = 10;
    // let z = 30;
   
document.getElementById("welcome").innerHTML = "Total: $" +(x + y + z);

window.alert("Total: $" + "Is yet to be calculated");

}

// To make further calculations, you can use the following function:
function anotherCalculation(x,y,z) {

let a,b,Total;

a = 5;
b = 10;
Total = (x*(a+b)+z)/y
document.getElementById("welcome").innerHTML = "Total: $" + Total;
      
}
      
////////////////////////////////////////////26/07/2026/////////////////////////////////////

function whatToChange(x,y,z) {

    if(x+y+z > 100) {
        document.getElementById("welcome").innerHTML = "Total is greater than 100";

    }
    else {
        document.getElementById("welcome").innerHTML = "Total is less than or equal to 100";
    }



}

function getDriverAge(age) {
    // let age = prompt("Please enter your age:");
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age >= 18) {
        if (age == 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
        else if (age > 18) {
            if (age < 21) {
                alert("You are old enough to drive, but you are not allowed to drive this car. Powering off... first");
            }
            else if (age >= 21 && age < 71) {
                alert("Powering On. Enjoy the ride! First");
            }
            else{
                alert("You are old enough to drive, but you are not allowed to drive this car. Powering off");
            }
        }
    }

    /////////////////////////////added new conditions to the function//////////////////////////////////////
    else if (age > 18) {
            if (age < 21) {
                alert("You are old enough to drive, but you are not allowed to drive this car. Powering off... first");
            }
            else if (age >= 21 && age < 71) {
                alert("Powering On. Enjoy the ride! checks");
            }
            else{
                alert("You are old enough to drive, but you are not allowed to drive this car. Powering off again");
            }
        }
    else if (age > 18 && age < 21) {
        alert("You are old enough to drive, but you are not allowed to drive this car. Powering off... second");
    }
    else if (age >= 71) {
        alert("You are old enough to drive, but you are too old to drive this car. Powering off");
    }
    else {
        alert("Powering On. Enjoy the ride! Second");
    }
}



function checkDriverEligibility(age, gender, country) {
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age >= 18 && country == "Nigeria") {
        if (gender == "male" || gender == "female") {
            
                alert(age + " " + gender + " " + country);
        
        }
        else{
            alert("Enter a valid gender (male or female)");
        }
    }
    else{
            alert("Apologies," + gender + " from " + country + ". you are not allowed to drive this car in your country. Powering off");
            }
}

function approveDriverEligibility(driversNumber) {
    for (let i = 0; i < driversNumber; i++) {
        console.log("Driver " + (i + 1) + " is eligible to drive.");

    }
}

function checkDayOfTheWeek(day) {
    var dayLowerCase = day.toLowerCase();
    if (dayLowerCase === "sunday" || dayLowerCase === "saturday" ){
        alert("Today is a weekend day.  Enjoy your time off!");
    }
    else{
        alert("Today is a weekday.  Have a great day!");
    }
}

