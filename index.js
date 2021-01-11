// function to compare character using switch and determine what sound to play
function compareCharacter(character){

  switch(character.toLowerCase()){
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;

    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;

    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;

    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;

    case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;

    case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;

    default:
  }
}


// function to make animated button;
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {  activeButton.classList.remove("pressed"); }, 150);
}



// to make the buttons interactive:
// finding total number of drum button
var totalNumberDrumButton=document.querySelectorAll(".drum").length;
//loop to add event listener to each button having class 'drum'
for (var i=0;i<totalNumberDrumButton;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML= this.innerHTML;
    compareCharacter(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// to make website resppond to the keypresses:
//adding event listener to each button pressed while viewing the website
document.addEventListener("keydown", function(event){
  compareCharacter(event.key);
  buttonAnimation(event.key);
});
