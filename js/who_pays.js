function WhoIsPaying (){
var names = ["Kahepa","Josue", "Kenny","Kelly","Bruno","Henry","sheja"]
var numberofpeople = names.length();
var randompersonposition = Math.floor(Math.random()*numberofpeople);
var randomperson = names[randompersonposition];
return randomperson + " is going to pay";
}
console.log(WhoIsPaying);