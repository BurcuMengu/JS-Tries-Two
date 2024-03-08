var n = Math.random();
console.log(n);  // 0 danküçük sayılar



var n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log(n);  //  0 dahil-6 değil arasındaki tam sayıları gösterir




var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);  // 1 ve 6 dahil olmak üzere arasındaki tam sayıları gösterir




prompt("What is your name?");
prompt("What is their name?");
var loveScore =Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

alert("Your love score is " + loveScore + "%." );




prompt("What is your name?");
prompt("What is your name?");
var loveScore =Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore < 100) {
    alert("Your love score is " + loveScore + "%." );

} else {
    alert("Oh yo.");
}




prompt("What is your name?");
prompt("What is your name?");
var loveScore =Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 30 && loveScore <= 100) {
    alert("Your love score is " + loveScore + "%." );

} if (loveScore <= 30) {
    alert("Oh yo.");
}




prompt("What is your name?");
prompt("What is your name?");
var loveScore =Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 30 || loveScore <= 100) {
    alert("Your love score is " + loveScore + "%." );

} if (loveScore <= 30) {
    alert("Oh yo.");
}




function bmiCalculator (weight, height) {
    var interpretation = weight / Math.pow(height, 2);
    
    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + ", so you are underweight.";

    } if (interpretation >= 18.5 && interpretation <= 24.9) {
        return "Your BMI is " + interpretation + ", so you have a normal weight.";
    } if (interpretation >24.9) {
        return "Your BMI is " + interpretation +  ", so you are overweight.";
    } 
    return interpretation;
}

bmiCalculator(80, 190);




function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0 ) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        }  else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

isLeap(2400);




var guestList = ["ay", "ba", "ka", "la"];
var guestName = prompt("What is your name?");
if(guestList.includes(guestName)) {
        alert("Welcome!");
} else {
    alert("Sorry,maybe next time.");
}