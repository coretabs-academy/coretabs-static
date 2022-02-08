var toggle = document.querySelector('.toggle');
var navOverlayed = document.querySelector('.no-overlay .nav__list');
var mainNav = document.querySelector('#main-header .nav');
var mainNavList = document.querySelector('#main-header .nav .nav__list');
var overlay = document.querySelector('.no-overlay');
var mainNavBtn = document.querySelectorAll('.main-nav-btn');
var forumUrl = document.querySelectorAll('.forum-url');


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


// Change App Domain & Forums Href based on whether we're on Dev or Production environment
var appDomain, forumHref;

if (window.location.host === 'spa-dev.coretabs.net') {
  appDomain = 'https://spa-dev.coretabs.net';
  forumHref = 'https://discourse.coretabs.net';
} else {
  appDomain = 'https://coretabs.net';
  forumHref = 'https://forums.coretabs.net';
}

window.addEventListener('load', (event) => {
  
  // Change Forums & Main Nav Button's Href based on whether we're on Dev or Production environment
  [].forEach.call(forumUrl, function(child) {
    child.setAttribute('href', forumHref);
  });

  
  // Check for user if he's logged in and change Main nav button accordingly
  // theres's two versions of button, one in .overlay element and the other in #main-header
  [].forEach.call(mainNavBtn, function(child) {
    if (getCookie('isLoggedIn')) {
      child.setAttribute('href', `${appDomain}/classroom/`);
      child.innerText = 'الصف الدراسي';  
    } else {
      child.setAttribute('href', `${appDomain}/signin/`);
      child.innerText = 'تسجيل الدخول';
    }
  });
});


// Changing Navbar on Scroll
// window.onscroll = function () {
//     if ((window.pageYOffset || document.documentElement.scrollTop >= 200) && !overlay.classList.contains("overlay")) {
//       mainNav.classList.add("nav-colored");
//       mainNav.classList.remove("nav-transparent");
//       toggle.classList.add("toggle--on-bg");
//     } else {

//       mainNav.classList.add("nav-transparent");
//       mainNav.classList.remove("nav-colored");
//       toggle.classList.remove("toggle--on-bg");
//     }
// };

// Hamburger Menu
function toggleMenu() {
    if (navOverlayed.classList.contains("active")) {
        if (window.innerWidth > 960) {
          toggle.style.display = "none";
        }

        navOverlayed.classList.remove("active");
        overlay.classList.remove("overlay");
        overlay.classList.add("no-overlay");
        mainNavList.classList.remove("overlay-mode");

        toggle.querySelector("a").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>';
      
      } else {
        

        navOverlayed.classList.add("active");
        overlay.classList.remove("no-overlay");
        overlay.classList.add("overlay");
        mainNavList.classList.add("overlay-mode");

        toggle.querySelector("a").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>';
      }
}

toggle.addEventListener('click', toggleMenu, false);
window.addEventListener('resize', function(event){
  if (window.innerWidth <= 960 || (overlay.classList.contains("overlay") && window.innerWidth > 960)) {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
});