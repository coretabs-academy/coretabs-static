var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.nav__list');
var overlay = document.querySelector('.no-overlay');

function toggleMenu() {
    if (menu.classList.contains("active")) {
        console.log('Here')
        if (window.innerWidth > 960) {
          toggle.style.display = "none";
        }

        menu.classList.remove("active");
        overlay.classList.remove("overlay");
        overlay.classList.add("no-overlay");


        toggle.querySelector("a").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>';
      } else {
        

        menu.classList.add("active");
        overlay.classList.remove("no-overlay");
        overlay.classList.add("overlay");

        toggle.querySelector("a").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>';
      }
}

toggle.addEventListener('click', toggleMenu, false);
window.addEventListener('resize', function(event){
  console.log(window.innerWidth)
  if (window.innerWidth <= 960 || (overlay.classList.contains("overlay") && window.innerWidth > 960)) {
    toggle.style.display = "block";
    console.log('HAAA')
  } else {
    toggle.style.display = "none";
  }
});