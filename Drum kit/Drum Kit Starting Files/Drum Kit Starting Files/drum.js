var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",buttnInnerHTML);
}
function buttnInnerHTML(){
    this.style.color="green";
    var buttons=this.innerHTML; 
    makeSound(buttons);
    buttonAnimation(buttons);
}

// var audio= new  Audio("sounds/tom-1.mp3");
//        audio.play();

// function HouseKepper(name,yearOfExperience,cleaningRepertoires) {
//     this.name= name;
//     this.yearOfExperience= yearOfExperience;
//     this.cleaningRepertoires= cleaningRepertoires;
//     this.clean= function () {
//         alert("we are cleanning");
//     }
    
// }

// var houseKepper1 = new HouseKepper("jacky",12,[("bathroom","bedroom")]);
// houseKepper1.clean();

document.addEventListener("keypress",events);
function events(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    }
function makeSound(key) {
    
  switch (key) {
    case "w":
        tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;
    case "a":
        tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        tom4=new Audio("sounds/tom-4.mp3");
        tom4.play(); 
        break;
    case "j":
        snare=new Audio("sounds/snare.mp3");
        snare.play();
          
        break;
    case "k" :
        crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
       var  kick=new Audio("sounds/kick-bass.mp3");
        kick.play(); 
        break;               
    default: 
    alert(buttons);
        break;
  }}
  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
  }
