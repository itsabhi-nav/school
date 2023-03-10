// Header
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
// For Swipper

const swiper = new Swiper('.swiper', {
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// Loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


// Services
