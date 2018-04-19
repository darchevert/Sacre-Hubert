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
        joue.element.currentTime = 0;
        joue.joue = false;
        lig.querySelector('audio').play();
        joue.element=lig.querySelector('audio');
        joue.joue = true;
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

function myFunction() {
    // Declare variables
    var input, filter, ul, li, p, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
