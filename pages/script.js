const hamburgerBtn = document.querySelector('.mobile_nav_btn')
const navMenu = document.querySelector('.mobile_nav_menu')
const active = document.querySelector('.active')
const header = document.querySelector('.header')
const btnX = document.querySelector('.btnX')


// Hamburger icon animation function

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  document.body.classList.toggle("btnX")
})

// Hide nav on scroll down function 

let hideNav = window.pageYOffset

window.onscroll = function() {
let currentLocation = window.pageYOffset
    if (hideNav > window.pageYOffset) {
      document.getElementById("header").style.top = '0'
    } else {
      document.getElementById("header").style.top = '-110px'
      navMenu.classList.remove("active")
      document.body.classList.remove("btnX")
    }

    hideNav = currentLocation
}

// Comment slideshow function 

let commentIndex = 1;
let commentTimer;


window.addEventListener("load",function() {
  showComments(commentIndex);
    commentTimer = setInterval(function(){changeComment(1)}, 4000);
  

})

function changeComment(n){
  clearInterval(commentTimer);
  if (n < 0) {
    showComments(commentIndex -= 1);
 
  } else {
    showComments(commentIndex += 1); 
  }
  
  if (n === -1){
    commentTimer = setInterval(function(){changeComment(n + 2)}, 4000);
  } else {
    commentTimer = setInterval(function(){changeComment(n + 1)}, 4000);
  }
}

function showComments(n){
  let i;
  let slides = document.getElementsByClassName("myComments");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {commentIndex = 1}
  if (n < 1) {commentIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[commentIndex-1].style.display = "block";
  dots[commentIndex-1].className += " activeDot";
}
