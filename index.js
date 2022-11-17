
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function() { //Arrow function
    // console.log(this.innerHTML)
    this.style.color = "blue";

    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break

      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break

      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break

      case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break

      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break

      case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break

      default:
    }

  }
);

}
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if(event.key == "w"){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
    else if(event.key == "a"){
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
  }
    else if(event.key == "s"){
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
  }
    else if(event.key == "d"){
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
  }
    else if(event.key == "j"){
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
  }
    else if(event.key == "k"){
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    }
    else if(event.key == "l"){
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    }

} );
