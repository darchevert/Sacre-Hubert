let ligne = document.getElementsByClassName('player');
let joue = {
    joue: false,
    element: null
};

for (var i = 0; i < ligne.length; i++) {
  ligne[i].addEventListener("click",
  (function aud_play_pause(lig) {
    return function(){

      console.log("click détécté !");

      if(joue.joue){
        joue.element.pause();
        joue.joue = false;
      } else {

        console.log("Du son!");
        console.log(lig)
        lig.querySelector('audio').play();
        joue.element=lig.querySelector('audio');
        joue.joue = true;
      }

    }
  })(ligne[i]));
};
