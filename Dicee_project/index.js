var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImage1="Dice" + randomNumber1 +".svg"
var randomImageSource1= "images/" + randomImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2= Math.floor(Math.random()* 6) + 1;
var randomImage2= "Dice" + randomNumber2 + ".svg";
var randomImageSource2= "images/" + randomImage2 ;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!!";
}

