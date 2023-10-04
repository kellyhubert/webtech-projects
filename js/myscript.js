// function lifeInYear(age){
//     var age = prompt("enter your ag")
//     var yearsRemaning = 90 - age;
//     var dayRemaning = yearsRemaning * 365;
//     var weekRemaning = yearsRemaning * 52;
//     var monthRemaining = yearsRemaning * 12;
//     alert("you have"+yearsRemaning+"and"+monthRemaining+"month remaining, "+ weekRemaning +" week remaining, "+ dayRemaning +"days remaining.");
// }
// lifeInYear(25);
 
// function bmiCalculation(weight,height){
//     var bmi =weight/ Math.pow(height,2);
//    return bmi;
// }
// var bmi = bmiCalculation(76,1.6);
// alert( Math.round(bmi));

// var n = Math.random();
// n= n*6;
// n = Math.floor(n) +1;
// alert(n);


// prompt("what is your name");
// prompt("what your crush name");
//  var lovescore= Math.random()* 100;
//  lovescore= Math.floor(lovescore)+1;
//  if (lovescore>=70){
//     alert("your love score is " +lovescore+"% you love each other lke kanye oves kanye");
//  }
//  else{
//     alert("your love score is "+ lovescore +"%");
//  }


// function leapYear(year){
//     var year = prompt("enter a year");
//     if (year % 4 === 0){
//         if (year % 100 === 0){
//            if (year % 400 === 0){
//             return Leapyear;
//            }
//            else{
//             return notleapyear;
//            }
//         }  
//         else{
//             return Leapyear;
//         }
//     }
//     else{
//         return NotLeapyear;
//     }
// }

// var guestlist= ["ange", "queen","bella" ,"thia" ,  "fofo"]
// var guestName =prompt ("enter your name");
// if (guestlist.includes(guestName)){
//     alert("welcome "+ guestName.toUpperCase(0,1))
// }
// else{
//     alert("sorry, maybe next time");
// }


// var i=[];
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     alert('FizzBuzz');
//   } else if (i % 3 === 0) {
//     alert('Fizz');
//   } else if (i % 5 === 0) {
//     alert('Buzz');
//   } else {
//     alert([i]);
//   }
// }

// let outputArray = [];

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     outputArray.push('FizzBuzz');
//   } else if (i % 3 === 0) {
//     outputArray.push('Fizz');
//   } else if (i % 5 === 0) {
//     outputArray.push('Buzz');
//   } else {
//     outputArray.push(i);
//   }
// }

// alert(outputArray);

// var numberofbottle = 99;
// while (numberofbottle >=0){
//     var bottleword= "bottle";
//     if (numberofbottle ===1){
//         var bottleword="bottles";
//     }
//     alert (numberofbottle + " " +bottleword +" of beer on the wall");
//     alert (numberofbottle + " " + bottleword +" of beer");
//     alert (" take one down, pass it around");
//     numberofbottle--;
//     alert (numberofbottle + " " +bottleword +" of beer on the wall.");
// }

// function fibronacci(n){
//     var output=[]
//     if (n===1){
//         output=[0];
//     }
//     if(n===2){
//         output=[0,1];
//     }
//     else{
//         output=[0,1];
//         for (var i=2; 1<n; i++){
//         output.push(output[output.length-2] + output[output.length-1]);
//        }
//      }
//          return output;
//     }
//      output=fibronacci(10);
  
//    alert (output);
// Document.querySelector("h1").style.backgroundColor="red";
// function main(){
//     spacedBeeper();
//     spacedBeeper();
//     semiSpaceBepper();
// }

// function spacedBeeper(){
//     putBeeper(),
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     turnLeft();
//     turnLeft();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     turnRight();
// }

// function semiSpaceBepper(){
//     putBeeper();
//     move();
//     move();
//     putBeeper();
//     move();
//     move();
//     putBeeper();
// }
// prompt("Enter the name of the first partener: ");
// prompt("Enter the name of the second partener: ");

// var lovescore = Math.random() * 100;
// lovescore = Math.floor(lovescore) +1;
// alert("your lovescore is: "  +lovescore + "%");
// if(lovescore => 50){
//     alert("you love each other like Kanye loves kanye")

// }
// else{
//     alert("your lovescore is: "  +lovescore + "%");
// }
// function Leapyear(year){
//   year = prompt("enter a year: " + year)
//     if(year % 4 == 0){
//        if(year %100 ==0){
         
//            if(year % 400 ==0){

//         }
//         else{
//             alert("this year is not a leap year")
//         }

//        }

//        else{
//            alert("this is a leapyear")
//        }
//     }
//     else{
//         alert("is not a leap year")
//     }
//  }
var guestlist =["kenny","kelly","keilla","kellia"]
var guestName = prompt("Enter the guest name: ")

if (guestlist.includes(guestName)) {
    alert("WEELCOME!")
}
else {
    alert("Sorry please Enter another  name!")
}